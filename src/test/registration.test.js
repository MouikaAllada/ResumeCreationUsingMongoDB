// const registration = require('../routes/registration')
const loginCollection = require('../dbFolder/loginmodel')
jest.mock('../dbFolder/loginmodel.js')
const request = require('supertest');
const newUserRegistration = require('../controllers/registration.controller');


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




describe('checking registration page test cases', () => {
    let req = mockRequest();
    let res = mockResponse();
    // beforeEach(() => {
    //     req = {
    //         body: {
    //             username: 'testuser',
    //             password: 'testpassword',
    //             confirmpassword: 'testpassword',
    //         },
    //     };
    //     res = {
    //         send: jest.fn(),
    //     };
    // });

    // afterEach(() => {
    //     res.send.mockClear();
    // });


    it('testing if case by not giving credentials', async () => {
        req.body.password = "";
        await newUserRegistration(req, res)
        // expect(result).toHaveBeenCalledWith('please give all credentials');
        expect(res.send).toHaveBeenCalledWith("please give all credentials")
    })

    it('testing else case by mismatched credentials', async () => {
        req.body = {
            username: "test1",
            password: "mounika",
            confirmpassword: "mounika@"
        }
        await newUserRegistration(req, res)
        result = newUserRegistration(req, res)
        expect(res.send).toHaveBeenCalledWith("Passwords didnt matched")
    })

    it('should send an error response if the profile already exists', async () => {
        req.body = {
            username: 'testinguser',
            password: "mounika@28",
            confirmpassword: "mounika@28"

        }
        const result = 'profile already exists. Please login to continue'
        const spy = jest.spyOn(loginCollection, 'findOne').mockImplementation(() => {
            return result
        });
        await newUserRegistration(req, res)
        expect(spy).toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith(result)


    });


    it('should save the user, if user doesnt exist', async() => {
        req.body = ({
            username: 'testinguser',
            password: "mounika@28",
            confirmpassword: "mounika@28"
        });
  
        
        const result = "Regisetered Successfully . Please login to continue"

        const spy = jest.spyOn(loginCollection, 'findOne').mockImplementation(() => {
            return null
        });
        const savemock = jest.spyOn(loginCollection , 'create').mockImplementation(()=>{
            return result
        })
        
        // console.log(spy.value)
        await newUserRegistration(req,res)
        expect(spy).toHaveBeenCalled()
        expect(savemock).toBeCalled()
        expect(res.send).toHaveBeenCalledWith(result)
      });
    

   
});





// test('sending data that is already in db', async () => {
//     const data = {
//         username: "test1",
//         password: "mounika@28",
//         confirmpassword: "mounika@28"
//     }
//     const req = mockRequest({
//         body: data
//     });
//     const res = mockResponse();
//     const result = 'profile already exists. Please login to continue'
//     const spy = jest.spyOn(loginCollection, 'findOne').mockImplementation(() => {
//         return result
//     })
//     await newUserRegistration(req, res);
//     expect(spy).toBeCalled();
//     expect(res.send).toHaveBeenCalledWith(result)

//     // expect(newUser).toBe(implementingMock)
//     // expect(res).toBe(res)
//     // expect(newUser).toBe("profile already exists. Please login to continue")
//     // expect(newUser).toBe(implementingMock)

//     // expect(implementingMock).toBeCalled()
// })


