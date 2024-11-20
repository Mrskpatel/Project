const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
        // required : true
    },
    subject : {
        type : String,
        // required : true
    },
    description : {
        type : String,
        // required : true
    },
    language : {
        type : String,
        // required : true
    },
    teacherId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        // required : true
    }
})

const userSchema = mongoose.model('course', schema)

module.exports = userSchema