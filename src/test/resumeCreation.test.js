const resumeCollection = require('../dbFolder/resumeModel')
jest.mock('../dbFolder/resumeModel')
const { createResume, getResumes } = require('../controllers/resume.controllers');
const loginCollection = require('../dbFolder/loginmodel');


const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
}

const mockRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req;

}

describe('testing resume models', () => {
    let req = mockRequest();
    let res = mockResponse();



    it('showing message to create a resume if no resume is present while trying to get it', async () => {
        req.params.user = "test1"
        const spy = jest.spyOn(loginCollection, 'find').mockImplementation(() => {
            return null
        })
        await getResumes(req, res)
        expect(spy).toBeCalled()
        expect(res.send).toHaveBeenCalledWith("create your resumes here")
    })

    it('getting resumes if presenr', async () => {
        req.params.user = "test1"
        const data = [
            {
                "_id": "64a2a774c8fe587c18d5332e",
                "name": "MOUNIKA ALLADA",
                "gmail": "mounika@cloud4c.com",
                "contactNum": 7780760443,
                "socialNetwork": [
                    {
                        "networName": "asdfg",
                        "networKLink": "asdfgh",
                        "_id": "64a2a774c8fe587c18d5332f"
                    },
                    {
                        "networName": "asdfg",
                        "networKLink": "asdfgh",
                        "_id": "64a2a774c8fe587c18d53330"
                    }
                ],
                "descriptionOfUser": "software engineer",
                "currentProfession": [
                    {
                        "professionTitle": "software engineer",
                        "projectsInvolvedIn": [],
                        "_id": "64a2a774c8fe587c18d53331"
                    },
                    {
                        "projectsInvolvedIn": [
                            "asdfc"
                        ],
                        "experienceInCurrentCompany": "2years",
                        "_id": "64a2a774c8fe587c18d53332"
                    }
                ],
                "previousCompaniesDetails": [
                    {
                        "previousCompanyName": "previousCompanyName",
                        "projectsInvolvedIn": [],
                        "_id": "64a2a774c8fe587c18d53333"
                    },
                    {
                        "projectsInvolvedIn": [
                            "asdfg"
                        ],
                        "_id": "64a2a774c8fe587c18d53334"
                    },
                    {
                        "projectsInvolvedIn": [],
                        "previousYearsExperience": "2years",
                        "_id": "64a2a774c8fe587c18d53335"
                    }
                ],
                "educationDetails": [
                    {
                        "educationBackground": "bpharm",
                        "projectsDone": [],
                        "_id": "64a2a774c8fe587c18d53336"
                    },
                    {
                        "typeOfEducation": "bachelors",
                        "yearsTookToComplete": "4",
                        "projectsDone": [
                            "sdf"
                        ],
                        "_id": "64a2a774c8fe587c18d53337"
                    }
                ],
                "techStack": [
                    "full stack development course"
                ],
                "skillsKnown": [
                    "msword"
                ],
                "hobbies": [
                    "photography"
                ],
                "languagesKnown": [
                    {
                        "languageName": "telugu",
                        "proficiency": "fluent",
                        "_id": "64a2a774c8fe587c18d53338"
                    }
                ],
                "references": [
                    {
                        "referencePerson": "referencePerson",
                        "_id": "64a2a774c8fe587c18d53339"
                    },
                    {
                        "referencePersonCurrentCompany": "referencePersonCurrentCompany",
                        "_id": "64a2a774c8fe587c18d5333a"
                    },
                    {
                        "contact": 7780760443,
                        "_id": "64a2a774c8fe587c18d5333b"
                    },
                    {
                        "personMail": "personMail@gmail.com",
                        "_id": "64a2a774c8fe587c18d5333c"
                    },
                    {
                        "personProfession": "personProfession",
                        "_id": "64a2a774c8fe587c18d5333d"
                    }
                ],
                "__v": 0,
                "user": "test1"
            },
            {
                "_id": "64a2a9cf02ae0730c9ebe374",
                "name": "MOUNIKA ALLADA",
                "gmail": "mounika@cloud4c.com",
                "contactNum": 7780760443,
                "socialNetwork": [
                    {
                        "networName": "asdfg",
                        "networKLink": "asdfgh",
                        "_id": "64a2a9cf02ae0730c9ebe375"
                    },
                    {
                        "networName": "asdfg",
                        "networKLink": "asdfgh",
                        "_id": "64a2a9cf02ae0730c9ebe376"
                    }
                ],
                "descriptionOfUser": "software engineer",
                "currentProfession": [
                    {
                        "professionTitle": "software engineer",
                        "projectsInvolvedIn": [],
                        "_id": "64a2a9cf02ae0730c9ebe377"
                    },
                    {
                        "projectsInvolvedIn": [
                            "asdfc"
                        ],
                        "experienceInCurrentCompany": "2years",
                        "_id": "64a2a9cf02ae0730c9ebe378"
                    }
                ],
                "previousCompaniesDetails": [
                    {
                        "previousCompanyName": "previousCompanyName",
                        "projectsInvolvedIn": [],
                        "_id": "64a2a9cf02ae0730c9ebe379"
                    },
                    {
                        "projectsInvolvedIn": [
                            "asdfg"
                        ],
                        "_id": "64a2a9cf02ae0730c9ebe37a"
                    },
                    {
                        "projectsInvolvedIn": [],
                        "previousYearsExperience": "2years",
                        "_id": "64a2a9cf02ae0730c9ebe37b"
                    }
                ],
                "educationDetails": [
                    {
                        "educationBackground": "bpharm",
                        "projectsDone": [],
                        "_id": "64a2a9cf02ae0730c9ebe37c"
                    },
                    {
                        "typeOfEducation": "bachelors",
                        "yearsTookToComplete": "4",
                        "projectsDone": [
                            "sdf"
                        ],
                        "_id": "64a2a9cf02ae0730c9ebe37d"
                    }
                ],
                "techStack": [
                    "full stack development course"
                ],
                "skillsKnown": [
                    "msword"
                ],
                "hobbies": [
                    "photography"
                ],
                "languagesKnown": [
                    {
                        "languageName": "telugu",
                        "proficiency": "fluent",
                        "_id": "64a2a9cf02ae0730c9ebe37e"
                    }
                ],
                "references": [
                    {
                        "referencePerson": "referencePerson",
                        "_id": "64a2a9cf02ae0730c9ebe37f"
                    },
                    {
                        "referencePersonCurrentCompany": "referencePersonCurrentCompany",
                        "_id": "64a2a9cf02ae0730c9ebe380"
                    },
                    {
                        "contact": 7780760443,
                        "_id": "64a2a9cf02ae0730c9ebe381"
                    },
                    {
                        "personMail": "personMail@gmail.com",
                        "_id": "64a2a9cf02ae0730c9ebe382"
                    },
                    {
                        "personProfession": "personProfession",
                        "_id": "64a2a9cf02ae0730c9ebe383"
                    }
                ],
                "__v": 0,
                "user": "test1"
            }
        ]
        const spy = jest.spyOn(loginCollection, 'find').mockImplementation(() => {
            return data
        })
        await getResumes(req, res)
        expect(spy).toBeCalled()
        expect(res.send).toBe(data)
    })


    it('creating a resume', async () => {
        req.params.user = "test1"

        req.body = {
            "name": "MOUNIKA ALLADA",
            "gmail": "mounika@cloud4c.com",
            "contactNum": 7780760443,
            "socialNetwork": [
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                },
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                }
            ],
            "descriptionOfUser": "software engineer",
            "currentProfession": [
                {
                    "professionTitle": "software engineer"
                },
                {
                    "projectsInvolvedIn": [
                        "asdfc"
                    ],
                    "experienceInCurrentCompany": "2years"
                }
            ],
            "previousCompaniesDetails": [
                {
                    "previousCompanyName": "previousCompanyName"
                },
                {
                    "projectsInvolvedIn": "asdfg"
                },
                {
                    "previousYearsExperience": "2years"
                }
            ],
            "educationDetails": [
                {
                    "educationBackground": "bpharm"
                },
                {
                    "typeOfEducation": "bachelors",
                    "yearsTookToComplete": "4",
                    "projectsDone": [
                        "sdf"
                    ]
                }
            ],
            "techStack": [
                "full stack development course"
            ],
            "skillsKnown": [
                "msword"
            ],
            "hobbies": [
                "photography"
            ],
            "languagesKnown": [
                {
                    "languageName": "telugu",
                    "proficiency": "fluent"
                }
            ],
            "references": [
                {
                    "referencePerson": "referencePerson"
                },
                {
                    "referencePersonCurrentCompany": "referencePersonCurrentCompany"
                },
                {
                    "contact": 7780760443
                },
                {
                    "personMail": "personMail@gmail.com"
                },
                {
                    "personProfession": "personProfession"
                }
            ]
        }



        const result = {
            "name": "MOUNIKA ALLADA",
            "gmail": "mounika@cloud4c.com",
            "contactNum": 7780760443,
            "socialNetwork": [
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                },
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                }
            ],
            "descriptionOfUser": "software engineer",
            "currentProfession": [
                {
                    "professionTitle": "software engineer"
                },
                {
                    "projectsInvolvedIn": [
                        "asdfc"
                    ],
                    "experienceInCurrentCompany": "2years"
                }
            ],
            "previousCompaniesDetails": [
                {
                    "previousCompanyName": "previousCompanyName"
                },
                {
                    "projectsInvolvedIn": "asdfg"
                },
                {
                    "previousYearsExperience": "2years"
                }
            ],
            "educationDetails": [
                {
                    "educationBackground": "bpharm"
                },
                {
                    "typeOfEducation": "bachelors",
                    "yearsTookToComplete": "4",
                    "projectsDone": [
                        "sdf"
                    ]
                }
            ],
            "techStack": [
                "full stack development course"
            ],
            "skillsKnown": [
                "msword"
            ],
            "hobbies": [
                "photography"
            ],
            "languagesKnown": [
                {
                    "languageName": "telugu",
                    "proficiency": "fluent"
                }
            ],
            "references": [
                {
                    "referencePerson": "referencePerson"
                },
                {
                    "referencePersonCurrentCompany": "referencePersonCurrentCompany"
                },
                {
                    "contact": 7780760443
                },
                {
                    "personMail": "personMail@gmail.com"
                },
                {
                    "personProfession": "personProfession"
                }
            ]
        }


        const spy = jest.spyOn(resumeCollection, 'create').mockImplementation(() => {
            return result
        })
        await createResume(req, res)
        expect(spy).toBeCalled()
        expect(res.send).toHaveBeenCalledWith(result)
    })


    it('throwing error while sending resume', async () => {
        req.params.user = "test1"

        req.body = {
            "name": "MOUNIKA ALLADA",
            "gmail": "mounika@cloud4c.com",
            "contactNum": "7780760443",
            "socialNetwork": [
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                },
                {
                    "networName": "asdfg",
                    "networKLink": "asdfgh"
                }
            ],
            "descriptionOfUser": "software engineer",
            "currentProfession": [
                {
                    "professionTitle": "software engineer"
                },
                {
                    "projectsInvolvedIn": [
                        "asdfc"
                    ],
                    "experienceInCurrentCompany": "2years"
                }
            ],
            "previousCompaniesDetails": [
                {
                    "previousCompanyName": "previousCompanyName"
                },
                {
                    "projectsInvolvedIn": "asdfg"
                },
                {
                    "previousYearsExperience": "2years"
                }
            ],
            "educationDetails": [
                {
                    "educationBackground": "bpharm"
                },
                {
                    "typeOfEducation": "bachelors",
                    "yearsTookToComplete": "4",
                    "projectsDone": [
                        "sdf"
                    ]
                }
            ],
            "techStack": [
                "full stack development course"
            ],
            "skillsKnown": [
                "msword"
            ],
            "hobbies": [
                "photography"
            ],
            "languagesKnown": [
                {
                    "languageName": "telugu",
                    "proficiency": "fluent"
                }
            ],
            "references": [
                {
                    "referencePerson": "referencePerson"
                },
                {
                    "referencePersonCurrentCompany": "referencePersonCurrentCompany"
                },
                {
                    "contact": "7780760443"
                },
                {
                    "personMail": "personMail@gmail.com"
                },
                {
                    "personProfession": "personProfession"
                }
            ]
        }




        const spy = jest.spyOn(resumeCollection, 'create').mockImplementation(() => {
            return null
        })
        await createResume(req, res)
        expect(spy).toBeCalled()
        expect(res.send).toHaveBeenCalledWith("error occured")
    })
})
