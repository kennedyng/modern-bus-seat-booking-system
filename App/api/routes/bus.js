const express = require("express");
const { PrismaClient } = require('@prisma/client');
const pagination = require("../middlewares/pagination");


const router = express();

const prisma = new PrismaClient();




module.exports = router;