const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

module.exports= mongoose
    .connect("mongodb://localhost:27017/todos", {
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })
    .then(() => {console.log("Mongodb Database is Connected!..")})
    .catch((err) => console.log(err));