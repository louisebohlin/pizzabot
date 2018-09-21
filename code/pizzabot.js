const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80



alert("Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza")

const pizzaType = [vegetarian, hawaiian, pepperoni]

const orderName = prompt("Enter the name of the pizza you want to order today.")

const checkPizza = (theOrderName) => {
  if (theOrderName != vegetarian && theOrderName != hawaiian && theOrderName != pepperoni) {
    alert("Sorry, we don't have that pizza on our menu.")
    return false
  } else {
    return true
  }
}

const res = checkPizza(orderName) // res = true eller false


if(res){
  const orderQuantity = prompt("How many of " + orderName +" do you want?")

  const calculateOrderTotal = () => {
    return orderQuantity * pizzaPrice
  }

  const orderTotal = calculateOrderTotal()

  const calculateCookingTime = () => {
    if (orderQuantity <= 2) {
      return (10)
  } else if (orderQuantity >= 6) {
      return (20)
  } else {
      return (15)
  }
}

  const cookingTime = calculateCookingTime()

alert("Great, I'll get started on your " + orderName + " right away. It will cost " + orderTotal + " kr. The pizzas will take " + cookingTime + " min.")

}
