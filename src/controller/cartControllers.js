import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const index = async (req,res) => {

    try {
        let data = await prisma.$queryRaw`SELECT * FROM \"products\" WHERE authorid=${req.decoded.id} AND quantity > 0`
        if (data === null)
            next()
        let data1 = {
            d: 0,
            d1: 0,
            vat: 0
        };
        for (let i = 0; i < data.length; ++i)
        {
            data[i].money6 = data[i].quantity * data[i].money
            data1.d += data[i].quantity
            data1.d1 += data[i].money6
        }
        data1.vat = Math.round(data1.d1 * 0.015)
        return res.render('cart', {data, data1})

    } catch (error) {
        res.send(error)
    }
}

const update_cart = async (req,res) => {
    try {
        await prisma.products.updateMany({
            where: {
                authorid: req.decoded.id,
                },
            data: {
                quantity: 0,
            },
        })
        for (const key in req.body) {
            if (key.startsWith('quantity_')) {
              const id = Number(key.split('_')[1]);
              const quantity = Number(req.body[key]);
              await prisma.products.update({
                where: {
                  authorid: req.decoded.id, 
                  id: id,
                },
                data: {
                  quantity: quantity,
                },
              })
            }
        }
        return res.redirect('/cart')

    } catch (error) {
        return res.send(error)
    }
}

export default {index, update_cart}