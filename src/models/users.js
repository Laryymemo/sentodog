import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT = 10;

const Schema = mongoose.Schema

const UserSchema = new Schema({
  "name":{
    type: String,
    require: true
  },
  "password":{
    type: String,
    require: true
  },
  "correo":{
    type: String,
    require: true
  },
  "telefono":{
    type: Number,
    require: true
  }
},{collection:"Users", timestamps: true})

UserSchema.pre('save',function(next){
    let user = this;
    if (!user.isModified('password')){return next()}
    bcrypt.genSalt(SALT,(err,salt)=>{
        if (err) return next(err);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if (err) return next(err);
            user.password = hash;
            next();
        })
    });
});

export default mongoose.model('Users',UserSchema)
