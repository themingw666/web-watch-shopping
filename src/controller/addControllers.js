import {PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const index = async (req,res) => {

    try {
        const id = Number(req.query.id);
        await prisma.products.update({
            where: {
                id
            },
            data: {
                quantity: {
                    increment: 1
                }
            }
        });
        return res.redirect('cart')
        
    } catch (error) {
        
    }
}

export default {index}