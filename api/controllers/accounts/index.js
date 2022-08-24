const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getOperatorBalance: async(req, res) => {
        try {
            const { _sum: {amount_payed: totalBalance} } = await prisma.receipt.aggregate({
                where: {
                    Trip: {
                        operatorId: Number(req.userData.operatorId)
                    }
                },
                _sum: {
                    amount_payed: true,
                },
                
            })
            res.status(201).json(totalBalance)
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }


}