const person = {
    name : "Vin Diesel",
    phone : 09097897665,
    gfName : "Kat",
    family : ["DOM", "Groot"],
    info : {
        address : "USA, California",
        homeAddress : "#3 Block Los Angel"
    }
}

const {phone} = person;
const {name} = person;

const[firstFriend] = person.family;
console.log(firstFriend);
const shortInfo = phone + name;
console.log(shortInfo);


const actor = ["Robert Downey", "Chris Evans", "Chris Hamsworth", "Tom Holland", "Sherlock Holmes"];
var [firstActor, secondActor, ...restActor] = actor;
console.log(firstActor);
console.log(secondActor); 
console.log(restActor);