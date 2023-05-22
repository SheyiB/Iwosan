const { expect } = require('chai');
const app = require('./server');
const request = require('supertest');

const mongoose = require('mongoose')
require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  
  afterEach(async () => {
    await mongoose.connection.close();
  });
describe('Patient App API', () => {
  it('should register a new patient', async () => {
    const res = await request(app).post('/api/v1/auth/signup')
      .send({ name: 'John Doe', email: 'jhnde@example.com', password: 'password' });


    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('patient');
  });

  it('should log in a patient', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'john@example.com', password: 'password' });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Login Successful');
  });
});
