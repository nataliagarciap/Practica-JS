import { table } from 'console';
import { toNamespacedPath } from 'path';
import readline from 'readline'

const students = [{
    age: 22,
    examScores: [2,4,6,8],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [7,10,9,7],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 28,
    examScores: [2,5,6],
    gender: 'male',
    name: 'victor'
  },
  {
    age: 21,
    examScores: [9,8,7,6],
    gender: 'female',
    name: 'isabel'
  },
  {
    age: 24,
    examScores: [3,7,8],
    gender: 'male',
    name: 'leo'
  },
  {
    age: 31,
    examScores: [9,6,4,3],
    gender: 'female',
    name: 'ana'
  }]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });  

  function getUserChoice() {
    return new Promise((resolve, reject) => {
      rl.question('Choose option from 1 to 15: ', function(choice) {
        rl.pause();
        const parsedNumber = parseInt(choice)
        resolve(parsedNumber);
      })
    });
  }

async function studentRecord() {
    let userChoice; 
  
    do {
  
      try {
        userChoice = await getUserChoice();
      } catch (error) {
        console.log(error);
        process.exit(0);
      }
      
      switch (userChoice) {
          case 1:
            console.table(students);
          break;
          
          case 2: 
            console.log(students.length)
          break;
  
          case 3: 
            students.forEach(element => {console.log(element.name)
            });
          break;
  
          case 4: 
            students.pop()
          break;
          
          case 5:
            console.log(students)  
            function RandomNumber(min, max) {
              const random = Math.floor(Math.random() * (max - min)) + min;
              return random;
            }
          
            const randomIndex = RandomNumber(0, students.length)
          
            students.splice(randomIndex, 1)
                        
            console.log(students)
          break;
               
          case 6: 
            const females = students.filter(person => person.gender === "female")
            console.log(females)
          break;
          
          case 7:
            const num_female_students = students.filter(person => person.gender === "female")
            const num_male_students = students.filter(person => person.gender === "male")
            console.log('The number of female students: ', num_female_students.length)
            console.log('The number of male students: ', num_male_students.length)
          break;

          case 8:
            let allFemale = students.every(isFemale); 
            console.log(allFemale)
            
            function isFemale(person) {
              return person.gender === "female";
            }

          break;
          

          case 9:
            const youngStudents = students.filter(student => student.age >= 20 && student.age <= 25)

            function youngStudentsNames(youngStudents) {
              youngStudents.forEach(person => console.log(person.name))
              };
            
            youngStudentsNames(youngStudents)
          
          break;
    
          case 10:

          const randomAge = RandomAge(20,50)
          function RandomAge(min, max) {
                const randomNumber = Math.floor(Math.random() * (max - min)) + min;
                return randomNumber;
              }
            
          function RandomGender(min, max) {
                const randomGenderIndex = Math.floor(Math.random() * (max - min)) + min;
                //return randomGenderIndex;
                let randomGenderName
                if (randomGenderIndex === 1){
                    randomGenderName = "female"
                } else {
                    randomGenderName = "male"
                }
                return randomGenderName
              }
            
            
          const randomGender = RandomGender(0,2);
            
          function getRandomName(randomGender) {
                let assignedName 
                if (randomGender === 'male') {
                    const randomMaleName = Math.floor(Math.random() * availableMaleNames.length);
                    assignedName = availableMaleNames[randomMaleName]
                } else {
                    const randomFemaleName = Math.floor(Math.random() * availableFemaleNames.length);
                    assignedName = availableFemaleNames[randomFemaleName]
                }
                return assignedName
            }
            
          const randomName = getRandomName(randomGender)
            
                  
          let newStudent = {
                age: randomAge,
            
                examScores: [],
            
                gender: randomGender,
            
                name: randomName,
            }
            
          students.push(newStudent);  
          console.log("New Student:", newStudent)
          
          break;

          case 11:

          const youngestStudent = students.reduce((previous, current) => {
            return current.age < previous.age ? current : previous;
          })

            console.log('Youngest Student Name:', youngestStudent.name)

          break;
            
          case 12:

          const MediaAge = students.reduce((acc, curr) => acc + curr.age, 0)/students.length
          console.log('La edad media es:', MediaAge)

          break;

          case 13:

         const ListOfFemales = students.filter(student => student.gender === 'female')

         const FemaleMediaAge = ListOfFemales.reduce((acc, curr) => acc + curr.age, 0)/students.length
          console.log('La edad media de las mujeres es:', FemaleMediaAge)

          break;

          case 14:

            function RandomScore(min, max) {
                const random = Math.floor(Math.random() * (max - min)) + min;
                return random;
            }
            students.forEach(student => student.examScores.push(RandomScore(0,10)));

            console.log('Nuevas notas agregadas')
            console.table(students)

          break;

          case 15:
            const orderNames = students.sort(function(a,b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0
            })

            console.log(orderNames)

          break;


          default: 
          console.log("You have closed the application")
          rl.close 
  
          }
  
      } while ((userChoice >= 1) && (userChoice <= 15)); 
  }
  
studentRecord()
