/*
/!*
// feature comment
const important = () => {
// production comment

  const one = 1;
  const two = 2;
  const three = 3;
  const four = 4;
  const five = 5;
  const six = 6;
  const seven = 7;
  const eight = 8;
  const newLine = 9;

}
const A = true;
const feature = 'feature';
const newLine = 'yay';
const onFeature = true;
const B = true;*!/

/!*
function doWhenDataRecived(value){
  returnNextElement.next(value);
}


function *createFlow(){
  const data = yield fetch("https://swapi.dev/api/planets/2")
/!*
    .then(res =>  res.json()).then(planet => {console.log(planet)})
*!/

}


const returnNextElement = createFlow();
console.log(returnNextElement)
const futureData = returnNextElement.next()
console.log(futureData.value.then(doWhenDataRecived)

)
*!/
/!*
function *createFlow(){
  const num = 4;
  const newNewNumber = yield num
  yield newNewNumber
  yield 5 + newNewNumber
  yield 6

}
const returnNextElement = createFlow();
console.log(returnNextElement.next());
console.log(returnNextElement.next(10));
console.log(returnNextElement.next());
*!/

// negative zero testing

// this is incomplete but essentiilay testing for negative infinity is good enough
// ie value / 0 === - Infinity ? yes : no

if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    const xisNegZero = isNegativeZero(x);
    const yisNegZero = isNegativeZero(y);
    // check for -0
    function isNegativeZero(v) {
      // v / 0 returns infinity or -Infinity if v == -0 😳
      return v === 0 && v / 0 === -Infinity;
    }

    function isNan(v) {
      return v !== v;
    }
  };
}

// Nan's are the only values that are not equal to its self
const nan1 = NaN;
const nan2 = nan1;

const varable = " \t\n";

const isValidString = (inputString) => {
  let result;

  if (typeof inputString !== "string") {
    return false;
  }
  const whiteSpace = inputString.split(" ");
  if (whiteSpace.length !== 1) {
    return false;
  }

  if (inputString.length < 3) {
    return false;
  }

  return true;
};

const hoursAttended = (attended, length) => {
  if (attended % 1 !== 0 || length % 1 !== 0) return false;
  if (isNaN(attended / 2) || isNaN(length / 2)) return false;
  if (Number(attended) <= Number(length)) return false;
  if (typeof attended !== "string" && typeof attended !== "number") return false;
  if (typeof length !== "string" && typeof length !== "number") return false;
  if(Number(attended) < 0 && Number(length) < 0) return false;

  //if(!Number.isInteger(attended) && !Number.isInteger(length) ) return false;

  return true;
};

// console.log(hoursAttended(34, 9))
const one = 1
const oneObj = {
  val: 1
}



/!*
const notaNumer = '';
let result  = isValidString(notaNumer)
console.log(result)*!/


/!*
function anotherTeacher () {
  console.log('toss')

}
*!/

const called = (arg) => {
  arg()
}

called(function call(){consol.log('cunt')})

 typeof element == 'string' && element.trim != ''*/

function getStudentBiId(studentId){
  // id is passed in inside map a way of mapping over 2 arrays
  return studentRecords.find(function matchId(record){ return record.id == studentId})

 // return studentRecords.find(record => record.id === studentId)
}
/////// some comment ////
function printRecords(recordIds) {
  // student id is passed into getStudentId
const results = recordIds.map(getStudentBiId);

results.sort(function orderByStudentName(a, b){

  if(a.name > b.name){
    return 1
  }else if(a.name < b.name){
    return -1
  }else return 0

})


//results.sort((a, b) => a.name > b.name ? 1 : -1);
results.forEach(function print (el) {
  console.log(`${el.name} "(${el.id}):" ${el.paid ? 'Paid' : 'Not paid'}`)

})
}


function paidStudentsToEnroll() {
  // TODO
}

function remindUnpaid(recordIds) {
  // TODO
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375, 233 ];

var studentRecords = [
  { id: 313, name: "Frank", paid: true, },

  { id: 410, name: "Suzy", paid: true, },
  { id: 709, name: "Brian", paid: false, },
  { id: 105, name: "Henry", paid: false, },
  { id: 502, name: "Mary", paid: true, },
  { id: 664, name: "Bob", paid: false, },
  { id: 250, name: "Peter", paid: true, },
  { id: 375, name: "Sarah", paid: true, },
  { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
 Bob (664): Not Paid
 Henry (105): Not Paid
 Sarah (375): Paid
 Suzy (410): Paid
 ----
 Bob (664): Not Paid
 Frank (313): Paid
 Henry (105): Not Paid
 Mary (502): Paid
 Peter (250): Paid
 Sarah (375): Paid
 Suzy (410): Paid
 ----
 Bob (664): Not Paid
 Henry (105): Not Paid
 */
