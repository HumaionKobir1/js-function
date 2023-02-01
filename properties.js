var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// when you know the property name, use dot notation to get the property values
var penCount = shoppingCart.pen;
console.log(penCount);

//alternativs system
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

var propertis = Object.keys(shoppingCart);
console.log(propertis);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);


var propertyName = 'mouse';

var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);


// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);


shoppingCart['mouse'] = 25;
console.log(shoppingCart);


shoppingCart[propertyName] = 89;
console.log(shoppingCart)