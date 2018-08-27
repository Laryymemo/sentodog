import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './src/models/users';
import Pet from './src/models/pets';
import Especificacion from './src/models/especificaciones'
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import {createToken} from './src/resolve/createToken'
import {verifyToken} from './src/resolve/verifyToken'

const app = express();
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || "mongodb://Larry:Hitme43@ds263571.mlab.com:63571/sento-dog"

mongoose.connect(mongoURI,{ useNewUrlParser: true});
const db = mongoose.connection;
db.on('err',() => console.log("error en db"))
  .once('open',() => console.log("conectado a db"))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())
app.get('/',(req,res)=>{
  res.send('Ya se prendio esta cosa :v')
});

app.post('/user/create',(req,res) => {
  let user = req.body
  User.create(user)
      .then(user => {
          return res.status(201).json(
            {message:"usuario creado",
             id:user._id}
          )
      })
      .catch(err => {
          console.log(err)
          return res.status(400).json(err)
      })
})

app.post('/pet/create',(req,res) => {
  let pet = req.body
  Pet.create(pet)
      .then(pet => {
          return res.status(201).json(
            {message:"mascota creada",
             id:pet._id}
          )
      })
      .catch(err => {
          console.log(err)
          return res.status(400).json(err)
      })
})

app.post('/pet/especificacion',(req,res) => {
  let especificacion = req.body
  Especificacion.create(especificacion)
      .then(especificacion => {
          return res.status(201).json(
            {message:"Especificacion asignada",
             id:especificacion._id}
          )
      })
      .catch(err => {
          console.log(err)
          return res.status(400).json(err)
      })
})

app.post('/login',(req,res) => {
    const token = createToken(req.body.name,req.body.password)
        .then(token => {
            res.status(201).json({token})
        })
        .catch(() => {
            res.status(403).json({message:'Login Failed'})
        })
});


app.use('/graphql',(req,res,next)=>{
    const token  = req.headers['authorization'];
    try{
        req.user = verifyToken(token)
        next();
    }catch(err){
        res.status(401).json({message:err.message})
        console.log(err);
    }
})

app.use('/graphql',graphQLHTTP((req,res) => ({
   schema,
   graphiql:true,
   pretty:true
})));

app.listen(PORT,() => {
  console.log("server corriendo en el puerto "+ PORT)
});
