const { FlightService } = require("../services/index");
const { SuccessCodes, serverErrorCodes } = require("../utils/error-codes");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to create flight",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully fetched a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(SuccessCodes.OK).json({
      data: flights,
      success: true,
      message: "Successfully fetched all the flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const flight = await flightService.update(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfully updated the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to update the flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
};
