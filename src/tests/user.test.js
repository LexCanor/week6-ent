const request = require('supertest')
const app = require('../app')

const BASE_URL = '/api/v1/users'

let TOKEN
let userId


beforeAll(async() => {

    const user = {
        email: 'hector@gmail.com',
        password: 'hector1234'
    }

    const res = await request(app)
        .post(`${BASE_URL}/login`)
        .send(user) 

    TOKEN = res.body.token
})


test('Get -> BASE_URL, should return statusCode 200, and res.body.length === 1', async() => {
    const res = await request(app)
        .get(BASE_URL)
        .set('Authorization', `Bearer ${TOKEN}`)

    expect(res.statusCode).toBe(200)
    expect(res.body).toBeDefined()
    expect(res.body).toHaveLength(1)
})

test('Post -> BASE_URL, should return statusCode 201, and res.body.firstName === user.firstName', async() => {
    const user = {
        firstName: 'Leonardo',
        lastName: 'Montenegro',
        email: 'leonardo@gmail.com',
        password: 'leonardo1234',
        phone: '1234'
    }

    const res = await request(app)
        .post(BASE_URL)
        .send(user)

    userId = res.body.id
    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(user.firstName)
})
