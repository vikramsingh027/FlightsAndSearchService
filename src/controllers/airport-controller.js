const { AirportService } = require("../services/index");
const { SuccessCodes, serverErrorCodes } = require("../utils/error-codes");

const create = async (req, res) => {
  try {
    const airport = await AirportService.createAirport(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      status: true,
      message: "Successfully added airport",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to create airport",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await AirportService.deleteAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      status: true,
      message: "Successfully deleted airport",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to delete airport",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await AirportService.updateAirport(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      status: true,
      message: "Successfully updated airport",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to update airport",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airport,
      status: true,
      message: "Successfully retrevied airport",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to get airport",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airports = await AirportService.getAllAirports(req.query);
    return res.status(SuccessCodes.OK).json({
      data: airports,
      status: true,
      message: "Successfully Fetched all airports",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to get airport",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};
