const { Flight } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const flights = await Flight.findAll({
        where: filter,
      });
      return flights;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }

  async update(flightId, data) {
    try {
      const flight = await Flight.update(data, {
        where: {
          id: flightId,
        },
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
