let student = {
    name: 'Rajan',
    age: 20,
    college: 'CBIT',
    location: "Hyderabad"
};
console.log(student);
console.log(student.name);
console.log(student.address); // undefined

// dot , [] notation
console.log(`College : ${student.college}`);
console.log(`College : ${student['college']}`);

// dynamic props
let propName = "college";
console.log(`prop : ${propName} - value : ${student[propName]}`);

// nested Object
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
//console.log(user);

// conversion
/**
 *  javaScript Object -> JSON -> JSON.stringify()
 *  JSON -> JavaScript Object -> JSON.parse();
 */
const userJSONStr = JSON.stringify(user);
console.log(userJSONStr);

const userObj = JSON.parse(userJSONStr);
console.log(userObj);

// to get inner object data
console.log(`Lng : ${user.address.geo.lng} - Lat : ${user.address.geo.lat}`);

// de-structuring
let {lat, lng} = user.address.geo;
console.log(`Lng : ${lng} - Lat : ${lat}`);

let {lat: geoLat, lng: geoLng} = user.address.geo;
console.log(`Lng : ${geoLat} - Lat : ${geoLng}`);

// get all keys of an object
student = {
    name: 'Rajan',
    age: 20,
    college: 'CBIT',
    location: "Hyderabad"
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));









