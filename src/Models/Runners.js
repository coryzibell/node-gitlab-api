const BaseModel = require('./BaseModel');
const Utils = require('../Utils');

class Runners extends BaseModel {
  all(options = {}) {
    return this.get('runners/all', options);
  }

  show(runnerId) {
    const rId = Utils.parse(runnerId);

    return this.get(`runners/${rId}`);
  }

  update(runnerId, attributes) {
    const rId = Utils.parse(runnerId);

    return this.put(`runners/${rId}`, attributes);
  }

  remove(runnerId) {
    const rId = Utils.parse(runnerId);

    return this.delete(`runners/${rId}`);
  }
  
  disable(runnerId, projectId) {
    const [rId, pId] = [runnerId, projectId].map(Utils.parse);
    
    return this.delete(`projects/${projectId}/runners/${runnerId}`);
  }
}

module.exports = Runners;
