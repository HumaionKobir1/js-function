var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shose: 2
}

var friends = {
    rahim: 21,
    karim: 25,
    samad: 24,
    robi: 30,
    kazi: 28,
    sumon: 22
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName);
    console.log(value);

}