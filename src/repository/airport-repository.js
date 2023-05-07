const { Op } = require("sequelize");

const { Airport } = require("../models/index");

class AirportRepository {
  static async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({ name, address, cityId });
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository layer");
      throw { error };
    }
  }

  static async deleteAirport(airportId) {
    try {
      const response = await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in airport repository layer");
      throw { error };
    }
  }

  static async updateAirport(airportId, data) {
    try {
      const airport = await Airport.update(data, {
        where: {
          id: airportId,
        },
      });
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository layer");
      throw { error };
    }
  }

  static async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      console.log("Something went wrong in airport repository layer");
      throw { error };
    }
  }

  static async getAllAirports(page, airport) {
    const limit = 5;
    const offset = (page - 1) * limit;
    try {
      if (airport) {
        const airports = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: airport,
            },
          },
          limit,
          offset,
        });
        return airports;
      }
      const airports = await Airport.findAll({ limit, offset });
      return airports;
    } catch (error) {
      console.log("Something went wrong in airport repository layer");
      throw { error };
    }
  }
}

module.exports = AirportRepository;
