const operatorTripsQuery = {
  totalQuery: (req) => {
    return {
      where: {
        operatorId: Number(req.userData.operatorId),
      },
      select: {
        id: true,
      },
    };
  },
  dataQuery: (req) => {
    return {
      where: {
        operatorId: Number(req.userData.operatorId),
      },
      orderBy: {
        id: "desc",
      },
      include: {
        Route: true,
        Bus: true,
        receipt: true,
      },
    };
  },
  intialDataSize: 5,
  model: "trip",
};
const tripsQuery = {
  totalQuery: (req) => {
    return {
      where: {
        Route: {
          AND: [
            { ending_point: req.params.ending_point },
            { starting_point: req.params.starting_point },
          ],
        },
        operatorId: Number(req.params.operatorId),
      },
    };
  },
  dataQuery: (req) => {
    return {
      where: {
        Route: {
          AND: [
            { ending_point: req.params.ending_point },
            { starting_point: req.params.starting_point },
          ],
        },
        operatorId: Number(req.params.operatorId),
      },
      orderBy: {
        departing_time: "desc",
      },
      include: {
        Route: true,
        Bus: true,
      },
    };
  },
  intialDataSize: 5,
  model: "trip",
};

module.exports = {
  operatorTripsQuery,
  tripsQuery,
};
