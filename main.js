// Today's forecast in Kelvin temperature
const kelvin = 293

// Celsius temperature is 273 degrees less than Kelvin temperature
const celsius = kelvin - 273

// We also want to find today's forecast in Fahrenheit, which is rounded down to the nearest whole number
let fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
