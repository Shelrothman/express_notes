// Below data will hold all of the wait listed customers. Initially it is set
// equal to an array with a "fake" customer. However, `waitingArray` could have
// been assigned an empty array.
const waitingArray = [
  {
    customerName: "Saima",
    customerEmail: "saima@example.com",
    phoneNumber: "000-000-0000",
    customerID: "saimaCool"
  }
];


// Note how the array is exported. This makes it accessible to other files using
// require.
module.exports = waitingArray;
