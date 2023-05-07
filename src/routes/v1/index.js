const express = require("express");
const router = express.Router();

const {
  CityController,
  AirportController,
} = require("../../controllers/index");

router.post("/city", CityController.create);
router.post("/cities", CityController.createMany);
router.delete("/city/:id", CityController.destroy);
router.get("/city/airport", CityController.getAirports);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.patch("/city/:id", CityController.update);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

module.exports = router;
