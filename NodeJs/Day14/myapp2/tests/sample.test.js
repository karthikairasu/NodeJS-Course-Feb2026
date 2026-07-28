const request = require('supertest');
const app = require('../app'); // ✅ correct

describe('Get Sample endpoint', () => {
    it('should return a default greeting', async () => {
        const response = await request(app).get('/sample');
        expect(response.body.message).toBe('Hello world');
    });
    it('sample with query param', async () => {
        const response = await request(app).get('/sample?name=Karthik');
        expect(response.body.message).toBe('Hello Karthik');
    });
});