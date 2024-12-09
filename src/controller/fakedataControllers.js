import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const index = async (req,res) => {
    try {
        await prisma.ShippingAddress.deleteMany();
        await prisma.BillingAddress.deleteMany();
        await prisma.products.deleteMany();
        await prisma.users.deleteMany();
        await prisma.$queryRaw`INSERT INTO \"users\" (id, username, email, password, role, money)
        VALUES (0, 'admin', 'admin@gmail.com', 'veryverysecret666888', 0, 9999999999999999)`
        await prisma.$queryRaw`INSERT INTO \"users\" (id, username, email, password, role, money)
        VALUES (1, 'guest', 'guest@gmail.com', 'guest', 0, 10000)`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (1, 'Classic Neu Black', 2900, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/DL44Zzw.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (2, 'Multi Midnight', 6200, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/gSM8ryJ.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (3, 'Wesse', 1700, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/iI2nEUo.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (4, 'Parigi Connect', 12900, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/0iyWiIa.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (5, 'Classic Neu Black 6', 5800, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/m74J4fs.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (6, 'Multi Midnight 6', 12400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/UW0g34w.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (7, 'Wesse 6', 3400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/E6rPB9B.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (8, 'Parigi Connect Vjp Pro Max 666', 666666, 6, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 0, 'https://i.imgur.com/ZsOutul.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (9, 'Classic Neu Black', 2900, 1, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/DL44Zzw.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (10, 'Multi Midnight', 6200, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/gSM8ryJ.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (11, 'Wesse', 1700, 1, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/iI2nEUo.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (12, 'Parigi Connect', 12900, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/0iyWiIa.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (13, 'Classic Neu Black 6', 5800, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/m74J4fs.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (14, 'Multi Midnight 6', 12400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/UW0g34w.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (15, 'Wesse 6', 3400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/E6rPB9B.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (16, 'Parigi Connect Vjp Pro Max 666', 666666, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', 1, 'https://i.imgur.com/ZsOutul.jpeg')`

        await prisma.$queryRaw`INSERT INTO "ShippingAddress" (userid, name, address, country, email, phone)
        VALUES (1, 'Daniel Robinson', '1418 River Drive, Suite 35 Cottonhall, CA 9622', 'United States', 'sale@uomo.com', '+1 246-345-0695');`;
        await prisma.$queryRaw`INSERT INTO "BillingAddress" (userid, name, address, country, email, phone)
        VALUES (1, 'Daniel Robinson', '1418 River Drive, Suite 35 Cottonhall, CA 9622', 'United States', 'sale@uomo.com', '+1 246-345-0695');`;

        return res.clearCookie('jwt').send("OKE")
        
    } catch (error) {
        return res.send(error)
    }
    
}

const clear = async (req,res) => {
    try {
        await prisma.products.deleteMany();
        await prisma.users.deleteMany();
    } catch (error) {
        return res.send("ERROR", error)
    }
}

export default {index, clear}