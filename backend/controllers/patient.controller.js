const PatientServices = require('../services/patient.service')

const Patient = new PatientServices();

// Routes
module.exports.getPatientData = async (req, res) => {
    try{
        const patient = await Patient.getPatient(req.params.id);
        return res.status(200).json(patient)
    }  catch(e){
        return next(res.status(500).json(e))
    }
};
  