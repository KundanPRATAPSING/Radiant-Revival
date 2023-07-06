const { mongoose } = require("../config/imports");
const DATABASE_URL = process.env.DATABASE_URL;

const main = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = {
    mongoose,main,
};