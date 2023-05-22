const AuthServices = require('../services/auth.service')

const Auth = new AuthServices();

// Routes
module.exports.signup = async (req, res) => {

    try{
        const patient = await Auth.signUp(req.body);
        if (patient) {
          res.status(201).json({
            success: true,
            patient,
          }); 
        }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
    
  }

};
  
module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const token = await Auth.login(email, password)

      if (token) {
          res.status(200).json({
            success: true,
            message : "Login Successful",
            token
          });

        }
      } catch (e) {
        res.status(500).json({
          success: false,
          message: e.message,
        });
      }
  };
  