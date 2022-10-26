const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = require("../../utils/prisma");
const app = require("express")();

module.exports = {
  logIn: async (req, res) => {
    try {
      const operator = await prisma.operator.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (operator) {
        const match = await bcrypt.compare(
          req.body.password,
          operator.password
        );
        if (match) {
          const token = jwt.sign(
            {
              operatorId: operator.id,
              email: operator.email,
            },
            process.env.JWT_KEY
          );

          return res
            .status(200)
            .json({ message: "authorization successfull", token });
        } else {
          console.log(error);
          return res.status(500).json({ message: "auth failed" });
        }
      } else {
        res.status(500).json({ message: "auth failed" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  // Registering a new operator account
  register: async (req, res) => {
    try {
      const logoPicUrl = req.file != undefined ? req.file.path : "";
      const userExist = await prisma.operator.count({
        where: {
          email: req.body.email,
        },
      });
      if (userExist) {
        return res.status(409).json({ message: "Email is used" });
      } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (err) {
            return res.status(500);
          } else {
            const data = await prisma.operatorProfile.create({
              data: {
                company_name: req.body.company_name,
                motto: req.body.motto,
                logo_pic: logoPicUrl,
                operator: {
                  create: {
                    password: hash,
                    email: req.body.email,
                  },
                },
              },
            });
            res.status(201).json({ message: "operator registered" });
          }
        });
      }
    } catch (error) {
      console.log("error", error);
      res.status(500).json(error);
    }
  },
};
