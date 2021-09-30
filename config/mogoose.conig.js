mongoose = require('mongoose');
const DB = "scores"

mongoose.connect('mongodb://localhost/' + DB, { 
    useNewUrlParsers: true,
    useUnifiedTopology: true,
}). then(() => {
    console.log("established connection to" + DB)
}).catch((err) => console.log("Something went wrong, couldn't connect to database", err));