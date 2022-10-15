const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

module.exports = {
  logIn: async (req, res) => {
    try {
      const passenger = await prisma.passenger.findUnique({
        where: {
          phone_number: req.body.phone_number,
        },
      });
      if (passenger) {
        const match = await bcrypt.compare(
          req.body.password,
          passenger.password
        );
        if (match) {
          const token = jwt.sign(
            {
              passengerId: passenger.id,
              phone_number: passenger.phone_number,
            },
            process.env.JWT_KEY
          );

          return res
            .status(200)
            .json({ message: "authorization sucessfull", token });
        } else {
          return res.status(500).json({ message: "auth failed" });
        }
      } else {
        res.status(500).json({ message: "auth failed" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  register: async (req, res) => {
    try {
      const userExist = await prisma.passenger.count({
        where: {
          phone_number: req.body.phone_number,
        },
      });

      if (userExist) {
        return res.status(409).json({ message: "phone number is used" });
      } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          if (err) {
            return res.status(500).json({ err });
          } else {
            const data = await prisma.passengerProfile.create({
              data: {
                first_name: req.body.first_name,
                middle_name: req.body.middle_name,
                last_name: req.body.last_name,
                nrc: req.body.nrc,
                address: req.body.address,
                passenger: {
                  create: {
                    password: hash,
                    phone_number: req.body.phone_number,
                  },
                },
              },
            });
            res.status(201).json({ message: "passenger registered" });
          }
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
