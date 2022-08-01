function totalCount(numArr) {
// Write a function to return the total of the array
let total = 0;
for (i of numArr) {
    total += i;
}

return total;
}

function printMessages(msgArr) {
// Write a function to display messages 
for (msg of msgArr) {
    console.log(msg);
}
}

// make sure you go to Shell not Console to run the code


var messagesPerDay = [5, 8, 6]
var messages = ["Please call back!", "Make sure you install jdk", "Help debug please!"]

console.log(totalCount(messagesPerDay));

printMessages(messages)



console.log("Hello World")
