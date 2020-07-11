// Below data will hold all of the reserved tables. Initially it is set equal to
// an array with a "fake" customer. However, `tableArray` could have been
// assigned an empty array.
const tableArray = [
  {
    customerName: "Ahmed",
    customerEmail: "ahmed@example.com",
    customerID: "afhaque89",
    phoneNumber: "000-000-0000"
  }
];

// Note how the array is exported. This makes it accessible to other files using
// require.
module.exports = tableArray;
