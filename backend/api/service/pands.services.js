const { PandS} = require('./../model/productsAndServices.model');

class PandSService {
  constructor() {
  }

  async getAll() {
    const all = await PandS.find({});
    return all
  }



}
module.exports = PandSService;
