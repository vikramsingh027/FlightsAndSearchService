const { AirportRepository } = require("../repository/index");

class AirportService {
  static async createAirport(data) {
    try {
      const airport = await AirportRepository.createAirport(data);
      return airport;
    } catch (error) {
      console.log("something went wrong in service layer of airport");
      throw { error };
    }
  }

  static async deleteAirport(airprotId) {
    try {
      const response = await AirportRepository.deleteAirport(airportId);
      return response;
    } catch (error) {
      console.log("something went wrong in service layer of airport");
      throw { error };
    }
  }

  static async updateAirport(airportId, data) {
    try {
      const airport = await AirportRepository.updateAirport(airportId, data);
      return airport;
    } catch (error) {
      console.log("something went wrong in service layer of airport");
      throw { error };
    }
  }

  static async getAirport(airportId) {
    try {
      const airport = await AirportRepository.getAirport(airportId);
      return airport;
    } catch (error) {
      console.log("something went wrong in service layer of airport");
      throw { error };
    }
  }

  static async getAllAirports({ page, airport }) {
    try {
      const airports = await AirportRepository.getAllAirports(page, airport);
      return airports;
    } catch (error) {
      console.log("something went wrong in service layer of airport");
      throw { error };
    }
  }
}

module.exports = AirportService;
