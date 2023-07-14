const User = require('../dbFolder/loginmodel')
// const session =  require('express-session')

async function postinglogindetails(req, res, next) {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            throw new Error("please give valid credentials")
        } else {
            const verifyUser = await User.findOne({ username })
            if (verifyUser) {
                if (verifyUser.password == password) {
                    res.send('Login verified, Create your resume')
                    next()
                } else {
                    throw new Error("password is incorrect");
                }
            } else {
                throw new Error("No account found. Please register to Continue")
            }
        }
    } catch (e) {
        // throw new Error("Something went wrong")
        next(e)
    }
}


module.exports = postinglogindetails