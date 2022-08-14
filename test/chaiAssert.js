const { expect } = require('chai')
const request = require('supertest')

describe('Chai Assert - Get Example', () => {
    const response = request ('https://petstore.swagger.io/v2')
    .get('/store/inventory')
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    it('response body to have property', async () => {
        expect((await response).body).to.haveOwnProperty(`available`)
        expect((await response).body).to.haveOwnProperty(`unavailable`)
        expect((await response).body).to.haveOwnProperty(`pending`)
        expect((await response).body).to.haveOwnProperty(`status`)
    })
})

describe('Post Request Example', () => {
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
    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })
    
    it('response body to haveOwnProperty', async () => {
        expect((await response).body).to.haveOwnProperty(`message`)
    })
})