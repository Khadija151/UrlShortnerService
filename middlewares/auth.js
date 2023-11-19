const { setUser, getUser } = require('../services/auth');

async function restrictToLoggedinUserOnly(req, res, next) {
    console.log('came to restriction')
    const userUid = req.cookies?.uuid;
    console.log("cookie is ", userUid)

    if (!userUid) return res.redirect('login');
    const user = getUser(userUid);
    if (!user) return res.redirect('login');

    req.user = user;
    return next()

}

async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uuid;
    const user = getUser(userUid);

    req.user = user;
    next();
}


module.exports = { restrictToLoggedinUserOnly, checkAuth }