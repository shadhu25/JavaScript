const obj1 = null;
const obj2 = null;

console.log("obj1 = ", obj1);
console.log("typeof obj1 = ", typeof obj1);
console.log("obj2 = ", obj2);
console.log("typeof obj2 = ", typeof obj2);

console.log(shallowEqual(obj1, obj2));

function shallowEqual(obj1,obj2){
    // check if both are objects and null
    if(typeof obj1 !== "object" || obj1 === null || typeof obj2 !== "object" || obj2 === null){
            return false;
    }
    // compare the number of properties
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if(key1.length !== key2.length){
        return false;
    }
    // compare each property value
    for (const key of key1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
/** web consol output
 * dummy.js:4 obj1 =  null
 * dummy.js:5 typeof obj1 =  object
 * dummy.js:6 obj2 =  null
 * dummy.js:7 typeof obj2 =  object
 * dummy.js:9 true
 */


