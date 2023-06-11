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

server.post('/register', async (req, res, next) => {
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

server.post('/login', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    console.log(req.body);
    res.json(req.body);
});

server.listen(8080, () => {
    console.log('Server Connected');
});
