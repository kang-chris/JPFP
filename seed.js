const {db} = require('./server/db')

const Student = require('./server/db/models/student');
const Campus = require('./server/db/models/campus');

const students = [{
    firstName: 'Chris',
    lastName: 'Kang',
    email: 'chriskang@gmail.com',
    imageUrl: 'https://i.pinimg.com/474x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg',
    gpa: 4.0,
    campusId: 1
  },{
    firstName: 'Christina',
    lastName: 'Kang',
    email: 'christinakang@gmail.com',
    imageUrl: 'https://i.pinimg.com/474x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg',
    gpa: 3.6,
    campusId: 3
  },{
    firstName: 'Kris',
    lastName: 'Cang',
    email: 'kriscang@gmail.com',
    imageUrl: 'https://i.pinimg.com/474x/47/ba/71/47ba71f457434319819ac4a7cbd9988e.jpg',
    gpa: 3.4,
    campusId: 2
  }];
  
  const campuses = [{
    name: 'Foo State',
    description: 'Foo Foo',
    address: "123 Foo St, Footown, Foostate",
    imageUrl: 'https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg'
  },
  {
    name: 'Bazz Tech',
    description: 'Bazz Bazz',
    address: "123 Bazz Ave, Bazztown, Bazzstate",
    imageUrl: 'https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg'
  },
  {
    name: 'Bar College',
    description: 'Bar Bar',
    address: "123 Bar Rd, Bartown, Barstate",
    imageUrl: 'https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg'
  },
  ];
  
  const seed = async () => {
    try {
      await db.sync({force: true})
  
      await Promise.all(campuses.map(campus => {
        return Campus.create(campus);
      }));
      
      await Promise.all(students.map(student => {
        return Student.create(student);
      }));
  
      console.log('Seeding success!')
      db.close()
    }
    catch (err) {
      console.error('Whoops! Something went wrong!')
      console.error(err)
      db.close()
    }
  }
  
  seed();