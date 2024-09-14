// Normal Loops

// while loop
    // let index = 1;
    // while(index <= 10){
    //     console.log("index = ",index);
    //     index++;
    // }

// do while loop
// let index1 = 1;
//     do{
//         console.log("index = ",index1);
//         index1++;
//     }while(index1 <= 10);

// for loop
    // for (let index = 1; index <= 10; index++){
    //     console.log("index = ",index);
    // }

// Higher Order Loops

// for of loop

// Case 1
// let heroes = ["IronMan", "Captain America", "Batman", "Flash", "WinterSoldier"];
// for (const hero of heroes) {
//     console.log(hero);
// }

// Case 2
// Error :- TypeError: herosObject is not iterable
// let herosObject = {
//     hero1: "IronMan",
//     hero2: "Captain America",
//     hero3: "Batman",
//     hero4: "Flash",
//     hero5: "WinterSoldier",
// }
// for (const hero of herosObject) {
//     console.log(hero);
// }

// Case 3
// let languages = [
//     {
//         name: "C++",
//         fileExtension: "cpp",
//     },
//     {
//         name: "Java",
//         fileExtension: "java",
//     },
//     {
//         name: "javaScript",
//         fileExtension: "js",
//     },
// ]
// for (const language of languages) {
//     console.log("Language = ",language.name);
//     console.log("File Extension = ",language.fileExtension);
// }
// for (const {name, fileExtension} of languages) {
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// }

// Case 4
// Error :- TypeError: herosObject is not iterable
// let languages1 = {
//    language1: [ "C++","cpp" ],
//    language2: [ "Java", "java" ],
//    language3: [ "javaScript", "js" ],
// }
// for (const language of languages1) {
//     console.log("Language = ",language[0]);
//     console.log("File Extension = ",language[1]);
// }

// Case 5
// let myMap = new Map();
// myMap.set("js", "javaScript");
// myMap.set("cpp", "C++");
// myMap.set("java", "Java");
// for (const language of myMap) {
//     console.log(language);
// }
// for (const [fileExtension, language] of myMap) {
//     console.log("Language = ",language);
//     console.log("File Extension = ",fileExtension);
// }

// for in loop

// Case 1
// let heroes = ["IronMan", "Captain America", "Batman", "Flash", "WinterSoldier"];
// for (const index in heroes) {
//     console.log(index); // print all index
//     console.log(heroes[index]) // print all name
// }

// Case 2
// let herosObject = {
//     hero1: "IronMan",
//     hero2: "Captain America",
//     hero3: "Batman",
//     hero4: "Flash",
//     hero5: "WinterSoldier",
// }
// for (const key in herosObject) {
//     console.log(key); // print all key 
//     console.log(herosObject[key])  // print all name
// }

// Case 3
// let languages = [
//     {
//         name: "C++",
//         fileExtension: "cpp",
//     },
//     {
//         name: "Java",
//         fileExtension: "java",
//     },
//     {
//         name: "javaScript",
//         fileExtension: "js",
//     },
// ]
// for (const index in languages) {
//     console.log("Language index = ",index);
//     console.log("Language = ",languages[index].name);
//     console.log("File Extension = ",languages[index].fileExtension);
// }
// for (const index in languages) {
//     console.log("Language index = ",index);
//     const {name, fileExtension} = languages[index];
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// }

// Case 4
// let languages1 = {
//    language1: [ "C++","cpp" ],
//    language2: [ "Java", "java" ],
//    language3: [ "javaScript", "js" ],
// }
// for (const key in languages1) {
//     const [name, fileExtension] = languages1[key];
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// }

// Case 5
// let myMap = new Map();
// myMap.set("js", "javaScript");
// myMap.set("cpp", "C++");
// myMap.set("java", "Java");
// // console will empty
// for (const language in myMap) {
//     console.log(language);
// }
// // consol will empty
// for (const [fileExtension, language] in myMap) {
//     console.log("Language = ",language);
//     console.log("File Extension = ",fileExtension);
// }

// forEach Method(loop)

// Case 1
// let heroes = ["IronMan", "Captain America", "Batman", "Flash", "WinterSoldier"];
// heroes.forEach(hero => console.log("name = ",hero));

// Case 2
// let herosObject = {
    //     hero1: "IronMan",
    //     hero2: "Captain America",
    //     hero3: "Batman",
    //     hero4: "Flash",
    //     hero5: "WinterSoldier",
    // }
// you can only use forEach with an array of objects
// herosObject.array.forEach(key => {
//     console.log(herosObject[key]);
// });

// Case 3
// let languages = [
//     {
//         name: "C++",
//         fileExtension: "cpp",
//     },
//     {
//         name: "Java",
//         fileExtension: "java",
//     },
//     {
//         name: "javaScript",
//         fileExtension: "js",
//     },
// ]
// languages.forEach(language => {
//     const { name, fileExtension} = language;
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// });

// Case 4
// let languages1 = {
//    language1: [ "C++","cpp" ],
//    language2: [ "Java", "java" ],
//    language3: [ "javaScript", "js" ],
// }
// you can only use forEach with an array of objects
// languages1.array.forEach(key => {
//     const [name, fileExtension] = languages1[key];
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// });

// Case 5
// let myMap = new Map();
// myMap.set("js", "javaScript");
// myMap.set("cpp", "C++");
// myMap.set("java", "Java");
// myMap.forEach((name, fileExtension) => {
//     console.log("Language = ",name);
//     console.log("File Extension = ",fileExtension);
// });