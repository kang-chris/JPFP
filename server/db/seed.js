const { faker } = require("@faker-js/faker");
const Campus = require("./models/campus");
const Student = require("./models/student");

const seed = async () => {
    const studentFirstName = faker.name.firstName();
    const studentLastName = faker.name.lastName();
    const studentRandomGPA = Math.floor(Math.random() * 41) / 10;
    const studentCampus = Math.floor(Math.random() * 100 + 1);
    const studentEmail = faker.internet.email(studentFirstName, studentLastName);
    const campusStreet = faker.address.streetAddress();
    const campusCity = faker.address.cityName();
    const campusState = faker.address.stateAbbr();
    const campusZIP = faker.address.zipCode();
    const campusAddress = campusStreet.concat(
        " ",
        campusCity,
        " ",
        campusState,
        " ",
        campusZIP
    );
    const campusName = faker.company.name();
    const campusDescription = faker.commerce.productDescription();
    try {
        await Campus.create({
            name: campusName + " University",
            address: campusAddress,
            description: campusDescription,
        });
        await Student.create({
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail,
            gpa: studentRandomGPA,
            campusId: studentCampus,
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = seed;