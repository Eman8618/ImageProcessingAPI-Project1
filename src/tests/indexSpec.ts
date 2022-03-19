
// Importing supertest 
import supertest from 'supertest';
// Importing app from index.ts file
import app from '../index';
// Define request as supertest of app
const req = supertest(app);
// Describe the test
describe('Testing the URL of REST API as an endpoint responses', () => {
    it('Getting URL of the API endpoint', async () => {
        //Defining an Endpoint response that gets the data of an API 
        const res = await req.get('/'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    }
)});
describe('Testing the URL of the resized image', () => {
    it('Getting URL of the URL of the resized image', async () => {
        //Defining an Endpoint response that gets the data of an API 
        const res = await req.get('/thumbnail/imagename/palmtunnel.jpg/width/111/height/400'); 
        //Expect results for the test
        expect(res.status).toBe(200);
    }
)});

       