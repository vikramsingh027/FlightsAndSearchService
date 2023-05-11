module.exports = {
  CityService: require("./city-service"),
  AirportService: require("./airport-service"),
  FlightService: require("./flight-service"),
  AirplaneService: require("./airplane-service"),
  // CrudService: require("./crud-service"),
};

//importing base class and derived class in same file creates circular referencing problem

//Here, using CrudService(base) and CityService(child) leads to circular referencing problem
