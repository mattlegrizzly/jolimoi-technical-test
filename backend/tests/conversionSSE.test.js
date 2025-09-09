const request = require('supertest')
const app = require('../index')

describe('GET /conversion/roman-sse', () => {
  it('should stream a roman numeral', async () => {
    const res = await request(app)
      .get('/conversion/roman-sse?number=9')
      .set('Accept', 'text/event-stream')

    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/event-stream/)
    expect(res.text).toContain('IX')
  })
})
