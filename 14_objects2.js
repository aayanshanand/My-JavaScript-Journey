// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "aayansh10"
tinderUser.name = "Aayansh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "aayansh@gmail.com", 
    fullname: {
        userfullname:{
            firstname: "aayansh",
            lastname: "anand"
        }
    }
}
// console.log(regularUser.fullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "aayansh@gmail.com"
    },
    {
        id: 1,
        email: "aayansh@gmail.com"
    },
    {
        id: 1,
        email: "aayansh@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aayansh"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// {
//   "name": "aaysnh",
//   "coursename": "js in hindi",
//   "price": "free"
// }

