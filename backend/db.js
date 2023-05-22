const mongoose = require("mongoose")

module.exports.connect = async() => {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    .then((res) => console.log(`Database Connected ${res}`))
    .catch((e) => {console.log(`Could not Connect Because of ${e.message}`)});

  
}

