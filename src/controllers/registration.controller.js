const loginCollection = require('../dbFolder/loginmodel')


async function newUserRegistration(req, res , next) {
    try {
        console.log("im here")
        const { username, password, confirmpassword } = req.body
        if (!username || !password || !confirmpassword) {
            throw new Error('please give all credentials')
        } else {
            if (password != confirmpassword) {
                throw new Error("Passwords didnt matched")
            } else {
                //console.log('result====================',await loginCollection.findOne({ username: username }))
                const findingAcc = await loginCollection.findOne({ username: username })
                if (findingAcc) {
                    // console.log("=========================")
                    throw new Error("profile already exists. Please login to continue")
                } else {
                    //const obj = new loginCollection.loginDetailsOfPerson("","","")
                    //new obj.save()
                    await loginCollection.create({ username, password })
                    res.send("Regisetered Successfully . Please login to continue")
                }

            }
        }
    } catch (err) {
        next(err)
    }
}

// async function newUserRegistration(req,res){
//     try {
//        // console.log(loginCollection)
//         const { username, password, confirmpassword } = req.body
//                 //console.log('result====================',await loginCollection.findOne({ username: username }))
//                 let acc = await loginCollection.findOne({ username: username })
//                 res.send("profile already exists. Please login to continue")  
//     } catch (err) {
//         return (err)
//     }
// }

module.exports = newUserRegistration