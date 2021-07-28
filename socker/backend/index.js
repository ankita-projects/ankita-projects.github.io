import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './routes/soccerRoutes';



const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;  //mongoo will tell us that we are connected and promise will expect a response, it is a sucess or not
mongoose.connect('mongodb://localhost/soccerDB',{       //url where you wanted to connect
      userNewUrlParser: true,
      useUnifiedTopology: true
});

//bodyparser setup so thaT WE CAN TRANSPILE OUR REQ THAT MONGO UNDERSTAND
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//CORS setup
app.use(cors());

routes(app);

app.get('/', (req,res )=>
      res.send(`our Soccer application is running ${PORT}`)
);
app.get('/ankit', (req,res )=>
      res.send(`hello ankit ${PORT}`)
);

app.listen(PORT, ()=>
   console.log(`Your soccer server is running on port ${PORT}`)
);
