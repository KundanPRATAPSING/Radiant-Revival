const {bcrypt,nodemailer,ejs,fs,path} = require("../config/imports")
const router = require("../config/router")
const saltRounds = 10;

const {Users} = require("../models/mongoose")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_APP_PASSWORD,
    },
});

router.post("/register", async (req, res) => {
    let user = new Users();

    user.name = req.body.name;
    user.username = req.body.username;
    user.address = req.body.address;
    user.phoneNumber = req.body.phoneNumber;
    user.email = req.body.email;
    user.password = req.body.password;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    user.password = hashPassword;

    const verificationToken = user.generateVerificationToken();
    const url = `http://localhost:8080/verify/${verificationToken}/verify/${verificationToken}`;

    fs.readFile(path.join(__dirname, "../views/index.ejs"), "utf8", (err, template) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        }

        const renderedHTML = ejs.render(template, { user, url });

        transporter.sendMail({
            to: user.email,
            subject: "Verify Account",
            html: renderedHTML,
        });
    });

    try {
        await user.save();
        res.json(
            "Please verify your email for account activation, Check your inbox! If not then Spam"
        );
    } catch (error) {
        res.status(500).json({ error: "Could not register user" });
    }
});

module.exports = router;
