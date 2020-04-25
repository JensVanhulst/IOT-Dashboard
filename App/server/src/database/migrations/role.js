var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var role = new Schema({
  roleName: { type: String, required: true },
  roleDescription: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});
