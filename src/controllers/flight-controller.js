const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Successfully fetched a flight",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    return res.status(200).json({
      data: flights,
      success: true,
      message: "Successfully fetched all the flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
};
