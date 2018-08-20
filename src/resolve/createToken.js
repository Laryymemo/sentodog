import jwt from 'jsonwebtoken'
import User from '../models/users'

const secret = 'ejemplo'
const expiresIn = '1y'

export const createToken = (name,password) => {

    if (!name || !password){
        return false
    }

    const compare = new Promise((resolve,reject) => {
        User.findOne({'name':name})
            .then(user => {
                console.log(user)
                if (!user) reject(false)
                user.comparePassword(password,(err,isMatch) =>{
                    console.log(isMatch)
                    if (isMatch){
                        let payload = {
                            username:user.name,
                            id:user._id
                        }
                        const token = jwt.sign(payload,secret,{expiresIn})
                        resolve(token)
                    }else{
                        reject(false)
                    }
                })
            })
            .catch(err => false)
    });

    return compare

}
