const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const patientSchema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
  });
  
patientSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

})

patientSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

patientSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id}, process.env.SECRETKEY, {
        expiresIn: process.env.JWT_EXPIRE
     })
}


module.exports = mongoose.model('Patient', patientSchema);
  