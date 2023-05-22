const PatientModel = require('../model/patient.model')

class PatientService {
    getPatient(patientid){
        return new Promise(async(resolve, reject) => {
            try{
                const patient = await  PatientModel.findById(patientid);
                if (patient) return resolve(patient);

                reject('Patient Not Found!')
            }
            catch(e ){
                e.source = 'Get Patient Service';
                return reject(e)
            }
        })
    }


}

module.exports = PatientService