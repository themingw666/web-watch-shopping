import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import initproduct from "../controller/initproduct.js"

const getLastestId = async function() {
    const LastestId = await prisma.users.findMany({
      orderBy: {
        id: 'desc',
      },
      take: 1,
    });
    if (LastestId.length > 0) {
      return LastestId[0].id;
    } else {
      return 1;
    }
}

const index = async (req,res) => {
    try {
        const {register_username, register_email, register_password} = await req.body
        const LastestId = await getLastestId() + 1
        await prisma.$queryRaw`INSERT INTO \"users\" (id, username, email, password, role, money)
        VALUES (${LastestId}, ${register_username}, ${register_email}, ${register_password}, 0, 4000)`
        initproduct.init(LastestId)
        return res.redirect('/login')

    } catch (err) {
        return res.status(500).send({ error: 'Internal Server Error' });
    }
}

const check = async (req,res) => {
    try {
        const { email, username } = req.body;
        const data1 = await prisma.users.findUnique({
            where: {
            username: username,
            },
        })
        const data2 = await prisma.users.findUnique({
            where: {
            email: email,
            },
        })
        const usernameExists = (data1 !== null)
        const emailExists = (data2 !== null)
        return res.json({ emailExists: emailExists, usernameExists: usernameExists });

    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {index, check}