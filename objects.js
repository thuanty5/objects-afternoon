// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
    name: "Thuan",
    age: 25,
    password: 123456
};


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.username = "thuan_t";
user.alertUser = function(){
    alert(user.name);
}
user.alertUser(user.name);


// Now loop over your user object and alert each of the keys.

// Code Here
for(var i in user){
  alert(i);
}


// Now loop over your user object and alert each of the values for each key.

// Code Here
for(var i in user){
  alert(user[i]);
}



// Remove the username from your user object

// Code Here
delete user.username;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here
var creditCard = {
    number: 123456789,
    cvc: 212,
    type: "Debit",
    limit: 5000
};


// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here
var alternating = "bonusCategories";


/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects. 
    Each object should have one key value pair. 
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%) 
    
    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.
    
    */
// Code Here
creditCard[alternating] = [{
    Thing_1: {One: "5%"},
    Thing_2: {Two: "7%"},
    Thing_3: {Three: "6%"}
}]

creditCard.bank = {
    bankName: "PiggyBank",
    bankAddress: "2222 NoWhere St."
}


// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here
function mergeUserInfo(user, card){
    var result = Object.assign(user, card);
    return result;
}

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
var mod = function(obj, aliveStat, allieOut, allieIn){
    obj.allies.splice(obj.allies.indexOf(allieOut),1,allieIn);
    obj.alive = aliveStat
    return obj;
}
