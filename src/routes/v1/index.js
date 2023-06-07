const express = require("express");
const router = express.Router();

const { FlightMiddlewares } = require("../../middlewares/index");

const {
  CityController,
  AirportController,
  FlightController,
  AirplaneController,
} = require("../../controllers/index");

router.post("/city", CityController.create);
router.post("/cities", CityController.createMany); //For creating multiple resources in header create query as "Content-Type: application/json"
router.delete("/cities/:id", CityController.destroy);
router.get("/cities/airports", CityController.getAirports);
router.get("/cities/:id", CityController.get);
router.get("/cities", CityController.getAll);
router.patch("/cities/:id", CityController.update);

router.post("/airports", AirportController.create);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airports/:id", AirportController.update);

router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightController.getAll);
router.patch("/flights/:id", FlightController.update);
router.delete("/flights/:id", FlightController.destroy);

router.post("/airplanes", AirplaneController.create);
router.delete("/airplanes/:id", AirplaneController.destroy);
router.get("/airplanes/:id", AirplaneController.get);
router.get("/airplanes", AirplaneController.getAll);
router.patch("/airplanes/:id", AirplaneController.update);
module.exports = router;
