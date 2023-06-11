const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/customer');
}

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    address: String,
    phoneNumber: String, // first two digits are the country code for India
    email: String,
    password: String,
    confirmPassword: String,
});

const Users = new mongoose.model('Users', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CORS middleware
server.use((req, res, next) => {
    // Replace '*' with the appropriate origin(s) or configure it dynamically
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Add other allowed methods as needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    // Add other allowed headers as needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    // Set cache-control headers to prevent caching
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    next();
});

server.post('/register', async (req, res) => {
    let user = new Users();

    user.name = req.body.name;
    user.username = req.body.username;
    user.address = req.body.address;
    user.phoneNumber = req.body.phoneNumber;
    user.email = req.body.email;
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;

    try {
        await user.save();
        res.json(req.body);
    } catch (error) {
        res.status(500).json({ error: 'Could not register user' });
    }
});

server.get('/register', (req, res) => {

})

server.post('/checkUser', async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const validUserEmail = req.body.email
    const validUserUsername = req.body.username
    const validUserPhoneNumber = req.body.phoneNumber

    const existingEmailUser = await Users.findOne({ email: validUserEmail });
    const existingUsernameUser = await Users.findOne({ username: validUserUsername });
    const existingPhoneNumberUser = await Users.findOne({ phoneNumber: validUserPhoneNumber });

    const errors = {};

    if (existingEmailUser) {
        errors.email = 'Email already taken';
    }

    if (existingUsernameUser) {
        errors.username = 'Username already taken';
    }

    if (existingPhoneNumberUser) {
        errors.phoneNumber = 'Phone number already taken';
    }

    try {
        if (Object.keys(errors).length > 0) {
            res.json({ errors });
        } 
        else {
            res.json({ success: true });
        }
    } 
    catch (error) {
        console.error('Error validating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});


server.post('/login', async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const isEmail = req.body.email;
    const isPassword = req.body.password;

    const user = await Users.findOne({ email: isEmail });

    if (!user) {
        return res.json({ errors: { email: 'Email does not exist' } });
    }

    if (user.password !== isPassword) {
        return res.json({ errors: { password: 'Incorrect password' } });
    }

    res.json({ success: true });
});

server.listen(8080, () => {
    console.log('Server Connected');
});
