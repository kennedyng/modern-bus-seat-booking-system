const prisma = require("../../utils/prisma");

module.exports = {
  getAllOperatorProfiles: async (req, res, next) => {
    try {
      const total = await prisma.passengerProfile.count();
      const data = await prisma.passengerProfile.findMany();
      req.modelData = { total, data };
      next();
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  getOperatorProfile: async (req, res) => {
    try {
      const { operatorId } = req.params;
      data = await prisma.operatorProfile.findUnique({
        where: {
          operatorId: Number(req.userData.operatorId),
        },
        include: {
          operator: {
            select: {
              email: true,
            },
          },
        },
      });
      res.status(200).json({
        data,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  },

  updateOperatorProfile: async (req, res) => {
    try {
      let operatorData = {};
      if (req.file) {
        operatorData = {
          company_name: req.body.company_name,
          motto: req.body.motto,
          logo_pic: req.file.path,
        };
      } else {
        operatorData = {
          company_name: req.body.company_name,
          motto: req.body.motto,
        };
      }
      updateProfile = await prisma.operatorProfile.update({
        data: operatorData,
        where: {
          operatorId: Number(req.userData.operatorId),
        },
      });
      res.status(201).json({
        updateProfile,
        message: "updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error,
      });
    }
  },
};
