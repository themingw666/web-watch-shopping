import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import moment from 'moment';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "example@gmail.com",
      pass: "hjfsah2352",
    },
});


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
        data1.date = moment().format('DD/MM/YYYY');
        data1.id6 = Math.floor(100000 + Math.random() * 900000);

        let result = await prisma.$queryRaw`SELECT * FROM \"users\" where id=${req.decoded.id}`

        let money = BigInt(result[0].money), d1 = BigInt(data1.d1), vat = BigInt(data1.vat)
        let money6 = money - d1 - vat
        await prisma.users.update({
            where: {
                id: req.decoded.id,
            },
            data: {
                money: money6,
            },
        })
        await prisma.products.updateMany({
            where: {
                authorid: req.decoded.id,
                },
            data: {
                quantity: 0,
            },
        })

        const email = req.session.email
        delete req.session.email;
        const mailOptions = {
            from: "moikhoo23@gmail.com",
            to: email,
            subject: "Thank You for Your Purchase!",
            text: 
            `Dear ${result[0].username},

    Thank you for choosing to shop with us and for purchasing one of our exquisite watches. We truly appreciate your business and trust in our products. Below are the details of your order:
                
    SHIPPING: Free shipping  
    TOTAL (including VAT): ${d1 + vat}
                
    Your satisfaction is our top priority. Should you have any questions or require further assistance with your order, please don't hesitate to reach out to us. We are always here to help and ensure you have the best shopping experience.

    We look forward to serving you again in the future. Thank you once again for being a valued customer.

    Best regards!!`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
        });

        return res.render('shop_order_complete', {data, data1})

    } catch (error) {
        res.send(error)
    }
}

export default {index}