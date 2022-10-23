const prisma = require("../utils/prisma");

const paginateData = ({ totalQuery, dataQuery, intialDataSize, model }) => {
  return async (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    let size = parseInt(req.query.size) || intialDataSize;
    const skip = (page - 1) * size;
    if (skip < 0) {
      skip = 0;
    }
    await prisma[model]
      .findMany(totalQuery(req))
      .then(
        async (totalItems) =>
          await prisma[model]
            .findMany({
              ...dataQuery(req),
              skip: skip,
              take: size,
            })
            .then((data) => {
              const totalPages = Math.ceil(totalItems.length / size);
              res.status(200).json({ totalPages, data });
              next();
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json(error);
            })
      )
      .catch((error) => {
        console.log(error);
        res.status(500).json(error);
      });
  };
};

module.exports = {
  paginateData,
};
