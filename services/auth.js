const jwt = require('jsonwebtoken');
const secretKey = 'Hello123';

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }
    return jwt.sign(payload, secretKey)
}
function getUser(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error('Error verifying JWT:', error.message);
        return null;
    }
}

module.exports = {
    setUser,
    getUser
}


