const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    getOperatorAccountsData: async(req, res) => {
        try {
            const { _sum: { amount_payed: totalBalance}, _count: {passengerId: totalPassenger}} = await prisma.receipt.aggregate({
                where: {
                    Trip: {
                        operatorId: Number(req.userData.operatorId)
                    }
                },
                _sum: {
                    amount_payed: true,
                },

                _count:{
                    passengerId: true
                }
                
            })

            
            res.status(200).json({ dashboard: {
                accountBalance: totalBalance,
                totalPassengers: totalPassenger
            }})
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }


}