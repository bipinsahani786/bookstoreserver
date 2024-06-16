import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import bookRoute  from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors'

const app = express()
app.use(express.json());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// try {
//     mongoose.connect(URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("connected to mongoDB")
// } catch (error) {
//     console.log("Error:" , error);
// }

async function connectToDatabase() {
    try {
      await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  connectToDatabase();
//defining routes


// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

app.use("/book" , bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});