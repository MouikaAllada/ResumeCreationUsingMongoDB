const mongoose = require('mongoose')




let resumeModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    contactNum: {
        type: Number,
        required: true
    },
    socialNetwork: [{
        networName: {
            type: String
        },
        networKLink: {
            type: String
        }
    }],
    descriptionOfUser: {
        type: String,
    },
    currentProfession: [{
        professionTitle: {
            type: String
        },
        projectsInvolvedIn: {
            type: [String]
        },
        experienceInCurrentCompany: {
            type: String
        }
    }],
    previousCompaniesDetails: [{
        previousCompanyName: {
            type: String
        },
        projectsInvolvedIn: {
            type: [String]
        },
        previousYearsExperience: {
            type: String
        }
    }],
    educationDetails: [{
        educationBackground: {
            type: String
        },
        typeOfEducation: {
            type: String
        },
        yearsTookToComplete: {
            type: String
        },
        projectsDone: {
            type: [String]
        }
    }],
    techStack: {
        type: [String],
        required: true
    },
    skillsKnown: {
        type: [String],
    },
    hobbies: {
        type: [String],
    },
    languagesKnown: [{
        languageName: {
            type: String
        },
        proficiency: {
            type: String
        }
    }],
    references: [{
        referencePerson: {
            type: String
        },
        referencePersonCurrentCompany: {
            type: String
        },
        contact: {
            type: Number
        },
        personMail: {
            type: String
        },
        personProfession: {
            type: String
        }
    }],
    user :{
        type:String,
        // required:true
    }

})

const resumeCollection = mongoose.model('resumeDetailsCollection', resumeModel)

module.exports = resumeCollection


/** 
* Paste one or more documents here
*/
// {
//     "name": "MOUNIKA ALLADA",
//     "gmail": "mounika@cloud4c.com",
//     "contactNum": 7780760443,
//     "socialNetwork": [
//       {
//         "networName": "asdfg",
//         "networKLink": "asdfgh",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef624"
//         }
//       },
//       {
//         "networName": "asdfg",
//         "networKLink": "asdfgh",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef625"
//         }
//       }
//     ],
//     "descriptionOfUser": "software engineer",
//     "currentProfession": [
//       {
//         "professionTitle": "software engineer",
//         "projectsInvolvedIn": [],
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef626"
//         }
//       },
//       {
//         "projectsInvolvedIn": [
//           "asdfc"
//         ],
//         "experienceInCurrentCompany": "2years",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef627"
//         }
//       }
//     ],
//     "previousCompaniesDetails": [
//       {
//         "previousCompanyName": "previousCompanyName",
//         "projectsInvolvedIn": [],
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef628"
//         }
//       },
//       {
//         "projectsInvolvedIn": [
//           "asdfg"
//         ],
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef629"
//         }
//       },
//       {
//         "projectsInvolvedIn": [],
//         "previousYearsExperience": "2years",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62a"
//         }
//       }
//     ],
//     "educationDetails": [
//       {
//         "educationBackground": "bpharm",
//         "projectsDone": [],
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62b"
//         }
//       },
//       {
//         "typeOfEducation": "bachelors",
//         "yearsTookToComplete": "4",
//         "projectsDone": [
//           "sdf"
//         ],
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62c"
//         }
//       }
//     ],
//     "techStack": [
//       "full stack development course"
//     ],
//     "skillsKnown": [
//       "msword"
//     ],
//     "hobbies": [
//       "photography"
//     ],
//     "languagesKnown": [
//       {
//         "languageName": "telugu",
//         "proficiency": "fluent",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62d"
//         }
//       }
//     ],
//     "references": [
//       {
//         "referencePerson": "referencePerson",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62e"
//         }
//       },
//       {
//         "referencePersonCurrentCompany": "referencePersonCurrentCompany",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef62f"
//         }
//       },
//       {
//         "contact": 7780760443,
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef630"
//         }
//       },
//       {
//         "personMail": "personMail@gmail.com",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef631"
//         }
//       },
//       {
//         "personProfession": "personProfession",
//         "_id": {
//           "$oid": "64a2a9f98ddbe837c0cef632"
//         }
//       }
//     ],
//     "__v": 0
//   }