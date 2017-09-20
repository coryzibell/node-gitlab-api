const BaseModel = require('./BaseModel');
const Utils = require('../Utils');

class ProjectVariables extends BaseModel {
  all(projectId, options = {}) {
    const pId = Utils.parse(projectId);

    return this.get(`projects/${pId}/variables`, options);
  }
  
  show(projectId, variableKey, options = {}) {
    const [pId, vKey] = [projectId, variableKey].map(Utils.parse);
    
    return this.get(`projects/${pId}/variables/${vKey}`, options);
  }
  
  create(projectId, options = {}) {
    const pId = Utils.parse(projectId);
    
    return this.post(`projects/${pId}/variables`, options);
  }
  
  update(projectId, variableKey, options = {}) {
    const [pId, vKey] = [projectId, variableKey].map(Utils.parse);
    
    return this.post(`projects/${pId}/variables/${vKey}`, options);
  }
  
  delete(projectId, variableKey) {
    const [pId, vKey] = [projectId, variableKey].map(Utils.parse);
    
    return this.delete(`projects/${pId}/variables/${vKey}`);
  }
}

module.exports = ProjectVariables;
