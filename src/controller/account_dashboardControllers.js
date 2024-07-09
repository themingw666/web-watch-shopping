import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const index = async (req,res) => {
    try {
        let data = await prisma.$queryRaw`SELECT * FROM \"users\" where id=${req.decoded.id}`
        return res.render('account_dashboard', {data: data[0]})
    } catch (error) {
        return res.clearCookie('jwt').redirect('/login')
    }
    
}

export default {index}