const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    mob : {
        type : Number,
        required: true
    },
   
    plot_type : {
        type : String,
        required: true
    },
   
    plot_ID : {
        type : String,
        required: true
    },
    plot_price : {
        type : String,
        required: true
    },
    

    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;