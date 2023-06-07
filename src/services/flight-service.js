const { Op } = require("sequelize");

const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  //Logic for modifying filter object
  //"#" symbol is used to declare functions as private
  #createFilter(query) {
    let filter = {};

    if (query.departureAirportId) {
      filter.departureAirportId = query.departureAirportId;
    }
    if (query.arrivalAirportId) {
      filter.arrivalAirportId = query.arrivalAirportId;
    }

    //Below is one way of creating filter object
    // if (query.minPrice && query.maxPrice) {
    //   Object.assign(filter, {
    //     price: { [Op.between]: [query.minPrice, query.maxPrice] },
    //   });
    // } else if (query.minPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: query.minPrice } });
    // } else if (query.maxPrice) {
    //   Object.assign(filter, { price: { [Op.lte]: query.maxPrice } });
    // }

    //Another way of creating filter object
    let priceFilter = [];
    if (query.minPrice) {
      priceFilter.push({ price: { [Op.gte]: query.minPrice } });
    }
    if (query.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: query.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });

    return filter;
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw "Arrival Time must be less than Departure Time";
      }
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getFlight({ id }) {
    try {
      const flight = await this.flightRepository.getFlight(id);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async getAllFlights(query) {
    try {
      const filter = this.#createFilter(query);
      const flights = await this.flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async update(flightId, data) {
    try {
      const flight = await this.flightRepository.update(flightId, data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }

  async destroy(flightId) {
    try {
      const flight = await this.flightRepository.destroy(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
