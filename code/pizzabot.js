const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


//welcome message, an alert with a string
alert("Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza")

//variable which gives us an ordername
const orderName = prompt("Enter the name of the pizza you want to order today.")

//function which compares input with pizza variables
const checkOrderName = (theOrderName) => {
  if (theOrderName != vegetarian && theOrderName != hawaiian && theOrderName != pepperoni) {
    alert("Sorry, we don't have that pizza on our menu.")
    return false
  } else {
    return true
  }
}

//invokes the function if true or false
const res = checkOrderName(orderName) // res = true eller false

//the rest will proceed if result is true
if(res){
  //function gives input on number of pizzas ordered
  const orderQuantity = prompt("How many of " + orderName +" do you want?")
  //function which calculates the total price
  const totalCost = () => {
    return orderQuantity * pizzaPrice
  }
  //invokes the function
  const orderTotal = totalCost()
  //function that calculates the cooking time
  const calculateCookingTime = () => {
    if (orderQuantity <= 2) {
      return (10)
  } else if (orderQuantity >= 6) {
      return (20)
  } else {
      return (15)
  }
}
  //invokes the function
  const cookingTime = calculateCookingTime()
//final alert to customer
alert("Great, I'll get started on your " + orderName + " right away. It will cost " + orderTotal + " kr. The pizzas will take " + cookingTime + " min.")

}
