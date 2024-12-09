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

const index1 = async (req,res) => {
    return res.render('account_orders')
}

const index3 = async (req,res) => {
    return res.render('account_edit')
}

const index4 = async (req,res) => {
    return res.render('account_wishlist')
}

export default {index, index1, index3, index4}