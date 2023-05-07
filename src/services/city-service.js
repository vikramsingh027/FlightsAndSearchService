const { CityController } = require("../controllers");
const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity(name);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async createMany({ cities }) {
    try {
      const allCities = await this.cityRepository.createMany(cities);
      return allCities;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        name: filter.name,
      });
      return cities;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAirports({ city: filter }) {
    // alias city->filter
    try {
      const airports = await this.cityRepository.getAirports(filter);
      return airports;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
