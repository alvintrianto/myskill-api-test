const request = require('supertest')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request ('https://petstore.swagger.io/v2')
        .post('/user')
        .send({
            "id": 12345,
            "username": "myskill",
            "firstName": "myskill",
            "lastName": "myskill",
            "email": "myskill@mailsac.com",
            "password": "myskill123",
            "phone": "08123123",
            "userStatus": 1
          })
        console.log((await response).status)
        console.log((await response).body)
    })
})