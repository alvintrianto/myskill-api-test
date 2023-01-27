const { expect } = require('chai')
const request = require('supertest')
const data = require('../../data/restful-booker/data')

const baseUrl = 'https://restful-booker.herokuapp.com'

describe('RestFul Booker', async () => {
    //GET TOKEN
    const resToken = await request (baseUrl)
    .post('/auth')
    .send(data.LOGIN_DATA)

    const token = (await resToken).body.token

    it('response status equal to 200', async  () => {
        expect((await resToken).status).to.equal(200)
    })
    
    const resCreateBooking = await request(baseUrl)
    .post('/booking')
    .send(data.CREATE_BOOKING_DATA)
    .set({ "Content-Type" : "application/json" })


    const bookingId = (await resCreateBooking).body.bookingid

    describe('Create Booking', async () => {
        it('response status equal to 200', async  () => {
            expect((await resCreateBooking).status).to.equal(200)
        })
        it('verify response body data', async () => {
            expect((await resCreateBooking).body.booking).to.equal(data.CREATE_BOOKING_DATA)
        })
    })

    const resUpdateBooking = await request(baseUrl)
    .put(`/booking/${bookingId}`)
    .send(data.UPDATE_BOOKING_DATA)
    .set(
    { "Content-Type" : "application/json" }, 
    { "Accept" : "application/json" },
    { "Cookie" : `token=${token}` })

    describe('Update Booking', async () => {
        it('response status equal to 200', async  () => {
            expect((await resUpdateBooking).status).to.equal(200)
        })
        it('verify response body data', async () => {
            expect((await resUpdateBooking).body).to.equal(data.UPDATE_BOOKING_DATA)
        })
    })
})