const Reservations = require("./Reservations");
const Travels = require("./Travels");
const Users = require("./Users");

const defineAssociations = () => {
  // Relation entre Reservations et Travels
  Travels.hasMany(Reservations, { foreignKey: "travel_id", as: "reservations" });
  Reservations.belongsTo(Travels, { foreignKey: "travel_id", as: "travel" });

  // Relation entre Reservations et Users
  Users.hasMany(Reservations, { foreignKey: "client_id", as: "reservations" });
  Reservations.belongsTo(Users, { foreignKey: "client_id", as: "client" });

  // Relation entre Travels et Users
  Users.hasMany(Travels, { foreignKey: "created_by", as: "travels" });
  Travels.belongsTo(Users, { foreignKey: "created_by", as: "created_by_user" });
};

module.exports = defineAssociations;
