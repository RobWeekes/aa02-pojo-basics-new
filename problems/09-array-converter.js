/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

// NOT GETTING THE RIGHT COUNTS FOR MULTIPLE OCCURENCES, COUNTER NOT RESETTING PROPERLY
function arrayConverter(array) {
    let arr = [];
    let obj = {}
    console.log(array);
    let count = 1;

    // array.forEach((key) => {    // the same as 'for(let key of array)' minus ')'

    // let dict = {};
    // for(let key in array) {
    //     dict[key] = 1 + dict.get(key, 0);
    //     console.log(dict);

    // }

    // console.log(obj);
    // // console.log(arr);
    // return obj;

    array.forEach((key) => {          // count instances of each item

        if(!arr.includes(key)) {
            console.log('no key yet');
            arr.push(key);            // push key into new array if its not there
            console.log(count);
            console.log(arr);
            // console.log('first key: ' + key);
            // console.log(key);
            count = 1;                // reset count to 1 when a new key is entered
            obj[key] = count;
            console.log(obj);
        } else
            if(arr.includes(key)) {
                // console.log(`no push, add counter for ${key}`);
                count++;
                obj[key] = count;
                console.log(count);
                console.log(`${key}: ${count}`)
                // console.log(key);
                // console.log(arr);
                console.log(obj);
            }
            console.log(obj);
            // console.log(key);
            // console.log(count);
    });

    console.log(obj);
    // console.log(arr);
    return obj;
}

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

console.log(arrayConverter(["potato", 'potato', "banana", "banana", 'banana',  "apple", 'cherry']));
// should get { apple: 1, banana: 3, potato: 2, cherry: 1 } -- banana, potato counts wrong

// // play code
// let character = {
//     name: "Homer",
//     traits: 'fat',
//     married: 'yes',
//     job: 'nuclear power plant'
// }

// console.log(character);
// console.log(character['traits']);

// character.traits = 'lovable oaf';   // can reassign key values

// console.log(character);
// console.log(character.traits);


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
