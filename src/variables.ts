/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

let fullName: string = `Sulaiman Alomar`;
let yearOfBirth: number = 1995;
let hobby: string = `running`;
let funFact: string = `The tallest mountain in africa is Kilomanjaro`
let image: string = `https://media.istockphoto.com/id/1152603285/photo/mature-black-man-with-crossed-arms-looking-at-camera.jpg?s=612x612&w=0&k=20&c=w36OXeTp70Wt49KlVB8N1XEh62sO5gitafcPoaY2ui0=`

/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it: "My name is {fullName}""
 * 2. ageString           -> assign it: "I am {YOUR_AGE}"", and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it: "My hobby is {YOUR_HOBBY}""
 */

let fullNameString: string = `My name is ${fullName}`
let ageString: string = `I am ${2025 - yearOfBirth}`
let hobbyString: string = `My hobby is ${hobby}`

/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let hackerScore = 0;

function incrementBy1() {hackerScore = hackerScore +1}
  // Increment hackerScore by 1 👇🏻

function decrementBy1() {hackerScore = hackerScore -1}
  // decrement hackerScore by 1 👇🏻


function incrementBy2() {hackerScore = hackerScore +2}
  // Increment hackerScore by 2 👇🏻

function decrementBy2() {hackerScore = hackerScore -2}
  // decrement hackerScore by 2 👇🏻


// Ignore this part (:
export {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
};
