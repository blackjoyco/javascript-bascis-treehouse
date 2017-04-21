
// Use a for in loop to log each of the property names of the shanghai object to the console 

*/ 
  var shanghai = {
   population: 14.35e6,
   longitude: '31.2000 N',
   latitude: '121.5000 E',
   country: 'CHN'
}; */

//Answer

for (var prop in shanghai) {
console.log(prop)
}

/* Now that you are logging out the property names, include the property values too. In other words you want to log out 4 lines that include both the property name and value. For example: "population: 14.35e6" */

//Answer

for (var prop in shanghai) {
    console.log(prop + ': ' + shanghai[prop]);
}
