function shoesOnTheBus( ArrayOfKidsOnBus ){
  // This function accepts an array (ArrayOfKidsOnBus) of kids on the bus.
  // Assume each kid on the bus is wearing 2 shoes.
  var shoes = 0; // start with zero shoes
  for (var i = 0; i < ArrayOfKidsOnBus.length; i++) {
    console.log("Nice Shoes " + bus[i] +"!");
    var shoes = (i + 1) * 2;
  }
  // Write a for loop to count how many shoes are on the bus
  // AND console log "Nice shoes!" for each student.

  // The totaling of shoes should be done inside the loop.
return shoes

  // This function should return the number of shoes on the bus.

} // end shoesOnTheBus

// test your function shoesOnTheBus by calling it below and logging the result
var bus = ["Mike", "Beth", "Carl", "Amanda", "Sam"];
console.log(shoesOnTheBus(bus));
