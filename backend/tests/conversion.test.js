const request = require('supertest')
const app = require('../index')

describe('POST /conversion/roman', () => {
  it('should convert number to Roman numeral', async () => {
    const res = await request(app)
      .post('/conversion/roman')
      .send({ number: 9 })
      .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(200)
    expect(res.body.result).toBe('IX')
  })

  it('should return 400 for invalid number', async () => {
    const res = await request(app)
      .post('/conversion/roman')
      .send({ number: 5000 })
      .set('Content-Type', 'application/json')

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBeDefined()
  })
})
