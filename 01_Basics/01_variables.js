const accountId = 12343
let accountEmail = "vinayak@gmail.com"

// Prefer not to use var 
// bcuz of issue in block scope and functional scope

var accountPass = "23442"
accountCity = "Jaipur"

// accountId = 45 //not allowed bcuz constant variable

accountEmail = "bhoj@gmail.com"
accountPass = "34534535"
accountCity = "mumbai"

console.log(accountId, " " ,accountEmail);
console.table([accountId,accountEmail,accountPass]);

