const express = require('express');
const bodyParser = require('body-parser');
const serverless = require("serverless-http");

const path = require('path');
const session = require('express-session');
const { google } = require('googleapis');
const fs = require('fs');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
const credentialsPath = path.join(__dirname, 'cred.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath));
app.use(express.static(path.join(__dirname, '../public')));

const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 's49470744@gmail.com', 
        pass: 'zkfq aflt ohwe uobe', 
    },
});

async function readSheet(spreadsheetId) {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A1:E7'
        });
        const rows = response.data.values;
        return rows;
    } catch (error) {
        console.error('Error reading spreadsheet:', error);
    }
}

async function writeSheetStock(cart) {
    const spreadsheetId = '1Vi6ss46fHLqGgHS2Uwqu1LFUbn6qGaL4Hws154_e3VI';
    const values = await readSheet(spreadsheetId);

    values.forEach(element => {
        cart.forEach(item => {
            if (element[0] === item.productName) {
                console.log(item.productName + "size:" + item.productSize);
                if(item.productSize === "XS") element[1] = parseInt(element[1]) - item.quantity;
                if(item.productSize === "S") element[2] = parseInt(element[2]) - item.quantity;
                if(item.productSize === "M") element[3] = parseInt(element[3]) - item.quantity;
                if(item.productSize === "L") element[4] = parseInt(element[4]) - item.quantity;
            }
        });
    });

    const resource = {
        values
    };

    try {
        await sheets.spreadsheets.values.clear({
            spreadsheetId,
            range: 'Sheet1!A1'
        });
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A1', 
            valueInputOption: 'RAW', 
            resource
        });
    } catch (error) {
        console.error('Error writing to the spreadsheet:', error);
    }
}

async function writeSheetOrder(values) {
    const spreadsheetId = '12Uau_27kqWIM5uLFMZ8-ikQLez6BSjgKOlvLDIzUb2c';
    const resource = {
        values
    };

    try {
        const result = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A1', // Starting position in the spreadsheet
            valueInputOption: 'RAW', // RAW or USER_ENTERED
            resource
        });
    } catch (error) {
        console.error('Error writing to the spreadsheet:', error);
    }
}

async function checkSheet(productName, productSize, quantity) {
    const spreadsheetId = '1Vi6ss46fHLqGgHS2Uwqu1LFUbn6qGaL4Hws154_e3VI';
    const values = await readSheet(spreadsheetId);
    let flag = true;
    console.log(values);
    values.forEach(element => {
        if (element[0] === productName) {
            if(productSize === "XS" && parseInt(element[1]) < quantity) flag = false;
            if(productSize === "S" && parseInt(element[2]) < quantity) flag = false;
            if(productSize === "M" && parseInt(element[3]) < quantity) flag = false;
            if(productSize === "L" && parseInt(element[4]) < quantity) flag = false;
        }
    });
    return flag;
}


app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    res.sendFile(  '../public/index.html');
});


app.get('/men', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/men.html'));
});

app.get('/women', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/wo.html'));
});

app.get('/policy', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pol.html'));
});

app.get('/cart' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/cart.html'));
});

app.post('/add-to-cart', async (req, res) => {
    const { productName, productPrice, productSize , productImage , quantity  } = req.body;
    try {
        let flag = await checkSheet(productName, productSize, quantity);

        if(!flag) {
            console.log("Not enough stock");
            return res.json({ success: false, message: 'Not enough stock' });
        }

        if (!req.session.cart) {
            req.session.cart = [];
        }

        let itemUpdated = false;
        req.session.cart.forEach(element => {
            if (element.productName === productName && element.productSize === productSize) {
                element.quantity += quantity;
                itemUpdated = true;
            }
        });

        if (!itemUpdated) {
            req.session.cart.push({
                productName: productName,
                productPrice: productPrice,
                productSize: productSize,
                productImage: productImage,
                quantity: quantity
            });
        }
        console.log('Cart:', req.session.cart);
        return res.json({ success: true, cartCount: req.session.cart.length });
    }
    catch (error) {
        console.error('Error checking sheet:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/checkout.html'));
});

app.get('/cart-data', (req, res) => {
    if(req.session.cart) {
        res.json({cart: req.session.cart});
    }
    else{
        res.json({cart: []});
    }
});

app.post('/remove-item', (req, res) => {
    const index = req.body.index;
    if (req.session.cart && index >= 0 && index < req.session.cart.length) {
        req.session.cart.splice(index, 1); 
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid item index' });
    }
    console.log('Cart:', req.session.cart);
});

app.post('/update-quantity', (req, res) => {
    const { index, action } = req.body;
    if (req.session.cart && index >= 0 && index < req.session.cart.length) {
        const item = req.session.cart[index];
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease') {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else if (item.quantity === 1) {
                req.session.cart.splice(index, 1);
            }
        }
        res.json({ success: true});
    } else {
        res.json({ success: false, message: 'Invalid item index' });
    }
    console.log('Cart:', req.session.cart);
});

app.post('/submit', async (req, res) => {
    const name = req.body.customerName;
    const email = req.body.email;
    const phone = req.body.phone;
    const shipping = req.body.address;
    const cart = req.session.cart;

    if (!name || !email || !phone || !shipping || !cart) {
        return res.json({ success: false, message: 'Invalid form data' });
    }

    let order = [name, email, phone, shipping];
    let total = 0;
    let str = "";
    let cartHtml = '<h3>Your Order:</h3><ul>';
    cart.forEach(item => {
        str += item.productName + " (" + item.productSize + ") " + "x" + item.quantity + ", ";
        cartHtml += `<li>${item.productName} (${item.productSize}) x${item.quantity}</li>`;
        total += item.productPrice * item.quantity;
    });
    str = str.slice(0, -2);
    order.push(str);
    order.push(total.toString());
    console.log('Order:', order);
    writeSheetOrder([order]);
    writeSheetStock(cart);
    const mailOptions = {
        from: 's49470744@gmail.com', 
        to: email, 
        subject: 'Order Received - Confirmation', 
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0;">Order Confirmation</h2>
            
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thank you for your order! We have received your purchase and are now processing it. Here are your order details:</p>
    
            <div style="border: 1px solid #ddd; padding: 10px; margin: 20px 0;">
                ${cartHtml}
            </div>
    
            <p style="color: #555;">We will notify you once your order has been shipped. If you have any questions, feel free to reply to this email.</p>
    
            <p style="text-align: center; padding: 10px; background-color: #f8f8f8; border-radius: 10px;">
                <strong>TanksEG</strong><br>
            </p>
        </div>
        `
    };
    await transporter.sendMail(mailOptions);
    res.redirect('/');
});


// app.listen(3001, () => {
//     console.log('Server is running on http://localhost:3001');
// });

module.exports.handler = serverless(app);