const mongoose = require("mongoose");

//Mlab

// mongoose.connect(
//   "mongodb+srv://chandan:help4you@cluster0-yawar.mongodb.net/ck?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   (err) => {
//     if (!err) {
//       console.log("connected successfully");
//     } else {
//       console.log(
//         "errror in Db connection :-" + JSON.stringify(err, undefined, 2)
//       );
//     }
//   }
// );

//Mongo Atlas

mongoose.connect(
  "mongodb+srv://chandan:help4you@cluster0-tx6h1.mongodb.net/chandan?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connected successfully");
    } else {
      console.log(
        "errror in Db connection :-" + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

module.export = mongoose;
