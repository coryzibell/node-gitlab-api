const BaseModel = require('./BaseModel');
const Utils = require('../Utils');

class ProjectServices extends BaseModel {
  show(projectId, serviceName) {
    const pId = Utils.parse(projectId);

    return this.get(`projects/${pId}/services/${serviceName}`);
  }

  update(projectId, serviceName, options = {}) {
    const pId = Utils.parse(projectId);

    return this.put(`projects/${pId}/services/${serviceName}`, options);
  }

  remove(projectId, serviceName) {
    const pId = Utils.parse(projectId);

    return this.delete(`projects/${pId}/services/${serviceName}`);
  }
}

module.exports = ProjectServices;
