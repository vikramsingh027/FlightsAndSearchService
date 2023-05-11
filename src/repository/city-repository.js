const { Op } = require("sequelize");

const { City } = require("../models/index");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }

  async createMany(cities) {
    try {
      const allCities = await City.bulkCreate(cities);
      return allCities;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  //method-overloading
  async getAll(filter) {
    //filter can be empty also
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
  //Get all airports of particular city by passing city name
  async getAirports(cityName) {
    try {
      const city = await City.findOne({
        where: {
          name: cityName,
        },
      });
      const airports = await city.getAirports();
      return airports;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
