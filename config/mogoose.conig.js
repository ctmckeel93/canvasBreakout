mongoose = require('mongoose');
const DB = "scores"

mongoose.connect('mongodb+srv://vercel-admin-user:QU1ZtSfvovnBiVme@breakoutdb.kak4hrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' + DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}). then(() => {
    console.log("established connection to " + DB)
}).catch((err) => console.log("Something went wrong, couldn't connect to database", err));

