const Campus = require("./models/campus");
const db = require("./database");
const Student = require("./models/student");
const seed = require("./seed");

Student.belongsTo(Campus, {
	foreignKey: "campusId",
});
Campus.hasMany(Student, {
	foreignKey: "campusId",
});

module.exports = { Campus, db, seed, Student };
