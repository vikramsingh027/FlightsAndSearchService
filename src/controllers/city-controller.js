const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.create(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create object",
      err: error,
    });
  }
};

const createMany = async (req, res) => {
  try {
    const allCities = await cityService.createMany(req.body);
    return res.status(201).json({
      data: allCities,
      success: true,
      message: "Successfully created multiple cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create object",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.update(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully updated the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.get(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully retrieved the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAll(req.query);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "successfully Fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the cities",
      err: error,
    });
  }
};

const getAirports = async (req, res) => {
  try {
    const airports = await cityService.getAirports(req.query);
    res.status(200).json({
      data: airports,
      success: true,
      message: "Successfully accessed all the airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch airports",
      err: error,
    });
  }
};

module.exports = {
  create,
  createMany,
  destroy,
  update,
  get,
  getAll,
  getAirports,
};
