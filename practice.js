//create an empty global array
//create an array and and a sub array into it and input random numbers of 4 into them
//loop through the sub array of the different index to check the highest numbers
//push the highest numbers found in the sub array to the empty global array created


const numArr = [[10, 12, 14, 18], [2, 4, 6, 8], [50, 55, 60, 70], [1002, 1003, 1004, 1005]];

const CheckHighestNumber = () => {
  const outPut = [];
  for (const subArr of numArr) {
    let largestNumber = Math.max(...subArr);
    outPut.push(largestNumber);
  }
  console.log(outPut);
}

CheckHighestNumber();

//create a student object with fname, lname, and phoneNumber
//use object destructuring to extract the phoneNumber and use your console.log to print out the phoneNumber to the console

//create the object
const students = {
  fnmae: 'isaac',
  lname: 'ajadi',
  phoneNumber: '08129447633'
}

//destructure it
const { phoneNumber = 08087942525 } = students;
console.log(phoneNumber);