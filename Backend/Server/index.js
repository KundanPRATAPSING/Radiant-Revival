const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/customer');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    address: String,
    phoneNumber: String, // first two digit is country code for india
    email: String,
    password: String,
    confirmPassword: String,
})

const Users = new mongoose.model('Users', userSchema)

const server = express()

server.use(cors())
server.use(bodyParser.json())

server.post('/register', async (req,res) => {

    let user = new Users()

    user.name = req.body.name
    user.username = req.body.username
    user.address = req.body.address
    user.phoneNumber = req.body.phoneNumber
    user.email = req.body.email
    user.password = req.body.password
    user.confirmPassword = req.body.confirmPassword
    await user.save()

    res.json(req.body)
})


server.listen('8080',(req,res) =>{
    console.log('Server Connected')
})