const User = require('../models/user');
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require('../services/auth');

async function handleUserSignUp(req, res) {
    const { name, password, email } = req.body;
    await User.create({
        name,
        password,
        email

    });
    res.redirect('/');
}
async function handleUserLogIn(req, res) {
    console.log('hi im in login')
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.render("login", {
            error: "Invalid User Name or Password",
        })
    }
    const token = setUser(user);
    //res.cookie("uuid", token);
    //res.redirect('/');
    return res.json({ token: token })
}
module.exports = { handleUserSignUp, handleUserLogIn }