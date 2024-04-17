const { Assistance} = require('./../model/assistance.model');

class AssistanceService {
  constructor() {
  }

  async getAll() {
    const all = await Assistance.find({});
    return all
  }

  async create(body){
      const res = await Assistance.create(body)
      return res
  }

}
module.exports = AssistanceService;
