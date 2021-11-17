const trip = JSON.parse(window.localStorage.getItem("chosenTrip")) //преобразовали строку в объект 
//console.log(trip)
const main = document.querySelector("main")
main.textContent = JSON.stringify(trip)
const { zones } = trip
console.log(zones)
