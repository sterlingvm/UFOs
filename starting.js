// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
};


// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
};

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
};

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
};

// Function written as an Arrow Function
printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
};

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
};

// Arrow function version of the doubleAddition function
doubleAddition = (c, d)  => addition(c, d) * 2;

// Establishing an array as a variable
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Use a function to iterate through a list
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
};
 

// Try making an interative function yourself:
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"] 

function listOut(list) {
    for (var i = 0; i < list.length; i++) {
        console.log("I love " + list[i])
    } 
}
  
listOut(vegetables)


// Loop through numbers without an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
};


// Create a function to build a table for our main project's data
function buildTable(data) {

    // First clear the data table on the HTML page, 
    //that way we ensure that the data we want is all 
    //we are putting into the table via appending
    tbody.html("");

    // Use a forEach protocol to iterate through data entries
    data.forEach((dataRow) => {

        // For every data entry create a row in our table (append "tr" - tablerow)
        let row = tbody.append("tr");

        //For every value in the data object...
        Object.values(dataRow).forEach((val) => {

            // Create a cell
            let cell = row.append("td");

            // Add the value of the data object key into the cell
            cell.text(val);
        });
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);

// EXAMPLE if-statement syntax
// if ( condition ) { code to execute }

// pseudocode practice
// if (a date is entered) {
   // Filter the default data to show only the date entered
// };


