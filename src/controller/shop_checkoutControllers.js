import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import url from 'url'

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
        return res.render('shop_checkout', {data, data1})

    } catch (error) {
        return res.send(error)
    }
}

const postform = async (req,res) => {
    try {
        const {email_form} = await req.body
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
        
        let result = await prisma.$queryRaw`SELECT * FROM \"users\" where id=${req.decoded.id}`
        if (result[0].money < data1.d1 + data1.vat) {
            return res.status(200).send('You do not have enough money!!');
        }
        req.session.email = email_form;
        return res.redirect(`/shop_order_complete`)

    } catch (error) {
        return res.send(error)
    }
}

export default {index, postform}