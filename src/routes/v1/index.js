const express = require("express");
const router = express.Router();

const {
  CityController,
  AirportController,
  FlightController,
} = require("../../controllers/index");

router.post("/city", CityController.create);
router.post("/cities", CityController.createMany);
router.delete("/city/:id", CityController.destroy);
router.get("/city/airport", CityController.getAirports);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airports", AirportController.create);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports/:id", AirportController.get);
router.get("/airports", AirportController.getAll);
router.patch("/airports/:id", AirportController.update);

router.post("/flights", FlightController.create);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightController.getAll);
module.exports = router;
