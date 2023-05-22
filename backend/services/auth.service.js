const PatientModel = require('../model/patient.model')

class AuthService {
    signUp(patientDetails){
        return new Promise(async (resolve, reject) => {
            try{
                const patient = await PatientModel.create(patientDetails)
                if(!patient){
                    return reject({code: 401, msg: 'patient not created' })
                }
                return resolve(patient)
            }
            catch(err){
                return reject(err)
            }
        })
    }

    login(email, password){
        return new Promise(async (resolve, reject) => {
            try{

                let patient = await PatientModel.find({"email":  email})
                               
                if(!patient){
                    return reject({code: 404, msg: 'Invalid Credentials'})
                }

                const matchPassword = await patient[0].matchPassword(password)
                if(matchPassword == false){
                    return reject({code: 404, msg: 'Invalid Credentials'})
                }

                const token = patient[0].getSignedJwtToken()

                return resolve(token)
            }
            catch(err){
                return reject(err)
            }
        })
    }


}


module.exports = AuthService