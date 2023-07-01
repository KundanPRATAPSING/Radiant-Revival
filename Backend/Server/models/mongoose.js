const { mongoose } = require("../config/imports");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("DB Connected");
}

module.exports = {
    mongoose,main,
};