const loginCollection = require('../dbFolder/loginmodel');
const resumesCollection = require('../dbFolder/resumeModel')
const loginController = require('../controllers/login.controllers')

async function createResume(req, res, next) {
    const { name, gmail, contactNum, socialNetwork, descriptionOfUser, currentProfession, previousCompaniesDetails, educationDetails, techStack, skillsKnown, hobbies, languagesKnown, references , user = "test1"} = (req.body)

    const resumeData = {
        name,
        gmail,
        contactNum,
        socialNetwork,
        descriptionOfUser,
        currentProfession,
        previousCompaniesDetails,
        educationDetails,
        techStack,
        skillsKnown,
        hobbies,
        languagesKnown,
        references,
        user
    };

    const data = await resumesCollection.create(resumeData)
    if (data) {
        res.send("data inserted")
        res.send(data)
    }
    else {
        throw new Error("Error Occured")
    }

}


async function getResumes(req, res, next) {
    try {
        const user = req.params.user
        const data = await resumesCollection.find({ user })
        console.log(resumesCollection)
        console.log(data)
        if (data.length == 0) {
            throw new Error("create your resumes here")
        }
        else res.send(data)
    } catch (err) {
        next(err)
    }

}


module.exports = { createResume, getResumes }