import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import fs from "fs"
import { fileURLToPath } from 'url'
import path from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import axios from 'axios';
import jwkToPem from 'jwk-to-pem';

const userAuth = async (req,res,next) => {
    let key, value
    if (req.headers.cookie){
      req.headers.cookie.split('; ').forEach(cookie => {
        const [k, v] = cookie.split('=');
        if (k === 'jwt')
        {
          key = k
          value = v
        }
      });
    }
    try{
      if (req.path === '/fakedata666888' || req.path.includes('/register') || (req.path === '/login' && (!key || !value))){
         next()
      }
       else {
          let token = value
          let decoded;
            let rsaKey
            let url
            const header = jwt.decode(token, { complete: true }).header
            //Injection
            if (header.jku) {
              url = header.jku
            }
            else {
              url = `http://localhost:${process.env.PORT}/.well-known/jwks.json`
            }
            await axios.get(url)
              .then(response => {
                const data = response.data;
                rsaKey = {
                  kty: data.keys[0].kty,
                  e: data.keys[0].e,
                  kid: data.keys[0].kid,
                  n: data.keys[0].n
                };
            })
            const publickey = jwkToPem(rsaKey);
            decoded = jwt.verify(token, publickey)
           //None injection
            /*const publickey = fs.readFileSync(path.join(__dirname,'../helper/key/publickey.pem'),'utf-8') 
            decoded = jwt.verify(token, publickey)*/
          req.decoded = decoded
          const id = decoded.id
          const result = await prisma.users.findUnique({
            where: {
                id: id,
              },
          })
          if (req.path === '/login')
            return res.redirect("/")
          if (result !== null){
              next()
          }
      }
    } catch (error) {
        return res.clearCookie('jwt').redirect('/login')
    }
}

export {userAuth}