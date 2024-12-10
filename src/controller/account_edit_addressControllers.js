import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import nunjucks from 'nunjucks';

const index = async (req,res) => {
    try {
        let data = await prisma.$queryRaw`SELECT * FROM \"ShippingAddress\" where userid=${req.decoded.id}`
        let data1 = await prisma.$queryRaw`SELECT * FROM \"BillingAddress\" where userid=${req.decoded.id}`
        let country = data1[0].country
        try {
            country = nunjucks.renderString(country);
        } catch (error) {
        }
        
        //cho set time out
        return res.render('account_edit_address', {data: data[0], data1: data1[0], country: country} )
        
    } catch (error) {
        return res.clearCookie('jwt').redirect('/login')
    }
}

const billing = async (req,res) => {
    try {
        const updatedAddress = req.body;
        await prisma.shippingAddress.update({
            where: { userid: req.decoded.id },
            data: {
                name: updatedAddress.shippingAddressName,
                address: updatedAddress.shippingAddressLocation,
                country: updatedAddress.shippingAddressCountry,
                email: updatedAddress.shippingAddressEmail,
                phone: updatedAddress.shippingAddressPhone,
            },
        });
        return res.status(200).json({ message: "Address saved successfully" });
        
    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const shipping = async (req,res) => {
    try {
        const updatedAddress = req.body;
        await prisma.billingAddress.update({
            where: { userid: req.decoded.id },
            data: {
                name: updatedAddress.billingAddressName,
                address: updatedAddress.billingAddressLocation,
                country: updatedAddress.billingAddressCountry,
                email: updatedAddress.billingAddressEmail,
                phone: updatedAddress.billingAddressPhone,
            },
        });
        return res.status(200).json({ message: "Address saved successfully" });

    } catch (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export default {index, billing, shipping}