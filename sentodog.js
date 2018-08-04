const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const registerman = require('./server.js');
const regispet = require('./server.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  if (re==true) {
  return email;
  console.log("correcto");
 }
  else {
    return alert("Correo no valido");
    console.log("incorrecto");
  }
}

//create register User man

app.post("/api/v1/registro/usuario/",(req,res) => {
    const {nameuser,password,email} = req.body
    let newRegisterman = registerman({
    nameuser:nameuser,
    password:password,
    email:email
  })
   validateEmail(email);
   newRegisterman.save((err,registerman)=>{
     if(err) throw err;
     res.send(registerman);
     console.log("user create");
 })
});
//Create register Pet
app.post("/api/v1/registrar/mascota/",(req,res) => {
  const {namepet,iduser,idunic} = req.body
  let newRegispet = regispet({
    namepet:namepet,
    iduser:iduser,
    idunic:idunic
  })
   newRegispet.save((err,regispet) => {
     if(err) throw err;
     res.send(regispet)
 })
});

app.listen(8000,()=>{
  console.log("server corriendo en el puerto 8000")
});
