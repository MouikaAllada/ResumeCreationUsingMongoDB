const loginCollection = require('../dbFolder/loginmodel')
jest.mock('../dbFolder/loginmodel')
const postinglogindetails = require('../controllers/login.controllers')


const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res
}

const mockRequest = () => {
    const req = {}
    req.params = jest.fn().mockReturnValue(req);
    req.body = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);
    return req;
}


describe('testing login methods', () => {
    const req = mockRequest()
    const res = mockResponse()

    it('it should send message as provide credentials if username or password is not given', async () => {
        req.body = {
            username: "test1",
            password: ''
        }
        await postinglogindetails(req, res)
        expect(res.send).toHaveBeenCalledWith('please give valid credentials')
    })


    it('should verify the user when username and password are correct', async () => {
        req.body = {
            username: 'john_doe',
            password: 'password123'
        }
        const spy = jest.spyOn(loginCollection, 'findOne').mockResolvedValueOnce({
            username: 'john_doe',
            password: 'password123',
        });
        await postinglogindetails(req, res);
        expect(spy).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith('Login verified, Create your resume');
    });


    it('should verify the user when username and password are correct', async () => {
        req.body = {
            username: 'john_doe',
            password: 'password123'
        }
        const spy = jest.spyOn(loginCollection, 'findOne').mockResolvedValueOnce({
            username: 'john_doe',
            password: '',
        });
        await postinglogindetails(req, res);
        expect(spy).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith('password is incorrect');
    });




    // it('giving a message if account doesnt exist', async () => {
    //     req.body = {
    //         username: 'john_doe',
    //         password: 'password123'
    //     }
    //     const spy = jest.spyOn(loginCollection, 'findOne').mockResolvedValueOnce(null)

    //     await postinglogindetails(req, res);
    //     expect(spy).toBeCalled()
    //     expect(res.send).toHaveBeenCalledWith("No account found. Please register to Continue");
    // });

})