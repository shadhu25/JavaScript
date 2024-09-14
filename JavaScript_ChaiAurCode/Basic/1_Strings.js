let string = 'Krishn';
console.log(string.length);

// There are 4 methods for extracting string characters:

    // charAt()
        console.log(string.charAt(0));
    // At();
        console.log(string.at(-6));
        console.log(string.at(0));
    // string[0]
        console.log(string[0]);

// There are 3 methods for extracting a part of a string:

    // slice() === subStr()
        console.log(string.slice(0,6));
        console.log(string.slice(0));
        console.log(string.slice(-6));
    // subString()
        console.log(string.subst|Bring(0,6));
        console.log(string.substring(0));
    // start and end values less than 0 are treated as 0
        console.log(string.substring(-3));
    // substr() === slice()
    // the second parameter specifies the length of the extracted part.
        console.log(string.substr(0,6));
        console.log(string.substr(0));
        console.log(string.substr(-6));
// charCodeAt() is UTF-16, codePointAt() is Unicode.
    // charPointAt() === charCodeAt()
        console.log(string.codePointAt(0))
    // charCodeAt() === charPointAt()
        console.log(string.charCodeAt(0));
// toUpperCase()
    console.log(string.toUpperCase());
// toLowerCase()
    console.log(string.toLowerCase());
// concat()
    console.log(string.concat('Krishn'));
    console.log(string.concat('-', 'Kant'));
    console.log("Hello" + " " + "World!");
    console.log("Hello".concat(" ", "World!"));
// trim()
    console.log('     Krishn       '.trim());
// trimStart()
    console.log('     Krishn       '.trimStart());
// trimEnd()
    console.log('     Krishn       '.trimEnd());
// padStart()
    // not supported in Internet Explorer.
    console.log(string.padStart(9,'x'));
// padEnd()
    // not supported in Internet Explorer.
    console.log(string.padEnd(9,'x'));
// To pad a number, convert the number to a string first.
    let num = 55;
    console.log(num.toString().padStart(5,'x'));
// repeat()
    // not supported in Internet Explorer.
    console.log(string.repeat(3));
// replace()
    console.log('Krishn Kant Kumar'.replace('Kumar','Singh'));
    console.log('Krishn Kant Kumar Kumar'.replace('Kumar','Singh'));
// replace all matches
    console.log('Krishn Kant Kumar Kumar'.replace(/Kumar/g,'Singh'));
// case sensitive
    console.log('Krishn Kant Kumar'.replace('KUMAR','Singh'));
// making  case insensitive
    // Regular expressions are written without quotes.
    console.log('Krishn Kant Kumar'.replace(/KUMAR/i,'Singh'));
// replaceAll()
    // not work in Internet Explorer.
    console.log('Krishn Kant Kumar Kumar'.replaceAll('Kumar','Singh'));
// make sure every possible case
    console.log('Krishn Kant Kumar kumar KUMAR '.replace('Kumar','Singh').replace('kumar','singh').replace('KUMAR','SINGH'));
// split()
    // A string can be converted to an array
    console.log(string.split(''));
    console.log('k,r,sh,n'.split(','));
// endsWith()
    console.log(string.endsWith('n'));
// startWith()
    console.log(string.startsWith('K'));
    // lastIndexOf()
    let text = "Hello planet earth, you are a great planet.";
    let result = text.lastIndexOf("planet"); // 36
    // indexOf()
        console.log(string.indexOf('planet')); // 6
// localeCompare
    let text1 = "ab";
    let text2 = "cd";
    result = text1.localeCompare(text2); // -1
// match()
    // return a array with match information
    // if false return null
    let text3 = "The rain in SPAIN stays mainly in the plain";
    text3.match("ain"); // retun a array
    text3.match(/ain/g); // ['ain','ain','ain']
    text3.match(/ain/gi); // ['ain','AIN','ain','ain']
    text3.match('noi'); // null
// matchAll()
    // return array containing of information of all matches as object
    text3.matchAll("ain");
    text3.matchAll(/ain/gi); // case insensitive
    text3.matchAll('w'); // [] empty array
// search()
    // return a index of first match
    // if false return -1
    text3.search("ain"); // 5 === indexOf()
    text3.search('AIN') // 14
    text3.search(/AIN/i) // 5
// toLocaleLowerCase()
    console.log(string.toLocaleLowerCase('en-US'));
// toLocaleUpperCase()
    console.log(string.toLocaleUpperCase('tr')); // tr == Turkish
// toString() === valueOf()
let str = new String('Krishn');
console.log(str.toString()); // Krishn
console.log(str.valueOf()); // Krishn

    
