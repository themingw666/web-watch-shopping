import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import jwt from 'jsonwebtoken'
import fs from "fs"
import { fileURLToPath } from 'url'
import path from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const index = (req,res) => {
    return res.render('login')
}

const handleLogin = async (req,res) =>{
    const {email,password} = await req.body
    try{
      let result = await prisma.$queryRaw`SELECT * FROM \"users\" where email=${email} AND password=${password}`
      //verifty 
      if(result.length == 0) {
          const error = {
              message : "Email or Password is incorrect !"
          }
         return res.render('login')
      }
      else{
        let token, header
          header = {
            alg: 'RS256',
            typ: 'JWT',
          }
        const payload = {
          id: result[0].id,
        }
        
        let privateKey
        header.kid = "6f597b7-fd81-44c7-956f-6937ea94cdf6"
        privateKey = fs.readFileSync(path.join(__dirname,'../helper/key/privatekey.pem'),'utf-8')
        token = jwt.sign(payload, privateKey, { algorithm: 'RS256', header });
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 10000 * 1000,
        });
        return res.redirect('/')
      }
      
    } catch(ERROR) {
      const error = {
        message : "Email or Password is incorrect !"
    }
      return res.render('login')
    }
}

const logout = (req,res) => {
    return res.clearCookie('jwt').redirect('/login')
}

export default {index, handleLogin, logout}