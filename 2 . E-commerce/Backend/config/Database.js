const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://kasundrasarthi72:Lgol8LXJGEqJcsgq@cluster0.ivpro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("Mongodb Database Connected..."))
    .catch((err) => console.log(err))

module.exports = db;
