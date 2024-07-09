import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const index = async (req,res) => {

    try {
        let data = await prisma.$queryRaw`SELECT * FROM \"products\" WHERE authorid=${req.decoded.id} AND quantity > 0`
        if (data === null)
            next()
        let d = 0
        for (const i of data)
            d += i.quantity
        let dataorigin = await prisma.$queryRaw`SELECT * FROM \"products\" WHERE authorid=${req.decoded.id} ORDER BY id ASC`
        return res.render('index', {data, d, dataorigin})

    } catch (error) {
        res.send(error)
    }
}

export default {index}