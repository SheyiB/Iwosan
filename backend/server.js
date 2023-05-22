require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const AuthRoutes = require('./routes/auth.routes')
const cors = require('cors')
const PatientRoutes = require('./routes/patient.routes')
const morgan = require('morgan')

const { connect} = require('./db')

connect();
// Middleware
app.use(express.json());

app.use(morgan('dev'));


app.use(cors( {
  origin: '*',

}))


app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/patient', PatientRoutes)


// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;