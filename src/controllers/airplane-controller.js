const { AirplaneService } = require("../services/index");
const { SuccessCodes, serverErrorCodes } = require("../utils/error-codes");
const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
      message: "Successfully Created an airplane",
      success: true,
      data: airplane,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      message: "Not able create an airplane",
      success: false,
      data: {},
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airplaneService.destroy(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      status: true,
      message: "Successfully deleted airplane",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to delete airplane",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.update(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      status: true,
      message: "Successfully updated airplane",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to update airplane",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.get(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: airplane,
      status: true,
      message: "Successfully retrevied airplane",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to get airplane",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplanes = await airplaneService.getAll();
    return res.status(SuccessCodes.OK).json({
      data: airplanes,
      status: true,
      message: "Successfully Fetched all airplanes",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      status: false,
      message: "Not able to get airplane",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
};
