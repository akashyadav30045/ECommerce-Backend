const {default : mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb://localhost:27017")
        console.log("Database Connected Succesfully ")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect;