mongoose = require('mongoose');
const DB = "scores"

mongoose.connect('mongodb+srv://coreytmckeel:QtsnbLt3GAoAukqq@breakoutdb.kak4hrt.mongodb.net/?retryWrites=true&w=majority&appName=breakoutDB' + DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}). then(() => {
    console.log("established connection to " + DB)
}).catch((err) => console.log("Something went wrong, couldn't connect to database", err));

