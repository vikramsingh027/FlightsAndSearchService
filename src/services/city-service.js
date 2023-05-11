const CrudService = require("./crud-service"); //Importing CrudService from ./index will generate error
const { CityRepository } = require("../repository/index");

class CityService extends CrudService {
  constructor() {
    const cityRepository = new CityRepository();
    super(cityRepository);
    this.cityRepository = cityRepository;
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

  async getAll(filter) {
    try {
      const cities = await this.cityRepository.getAll(filter);
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
