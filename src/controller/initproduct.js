import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const getLastestId = async function() {
    const LastestId = await prisma.products.findMany({
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

const init = async (authorid) => {
    try {
        const LastestId = await getLastestId() + 1
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId}, 'Classic Neu Black', 2900, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/DL44Zzw.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 1, 'Multi Midnight', 6200, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/gSM8ryJ.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 2, 'Wesse', 1700, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/iI2nEUo.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 3, 'Parigi Connect', 12900, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/0iyWiIa.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 4, 'Classic Neu Black 6', 5800, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/m74J4fs.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 5, 'Multi Midnight 6', 12400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/UW0g34w.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 6, 'Wesse 6', 3400, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/E6rPB9B.jpeg')`
        await prisma.$queryRaw`INSERT INTO \"products\" (id, name, money, quantity, des, authorid, image)
        VALUES (${LastestId} + 7, 'Parigi Connect Vjp Pro Max 666', 666666, 0, 'A luxury watch is a symbol of elegance and sophistication, meticulously crafted from premium materials, blending artistry with advanced technology.', ${authorid}, 'https://i.imgur.com/ZsOutul.jpeg')`
    } catch (error) {
    }
}

export default {init}