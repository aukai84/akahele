const csv = require('csvtojson');
const csvFilePath = './lib/2015_CRIME.csv';
const fs = require('fs');

let stateNames = ['Alabama','Alaska','Arizona','Arkansas','Californa','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachussets','Michigan','Minnesota','Mississippi','Missouri',
'Montana','Nebrasksa','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisctonsin','Wyoming'];



function firstLetterUpperCase(string) {
    let newWord = '';
    let words = string.split(' ');
    if(words.length > 1){
        words.forEach(word => {
            newWord += word.charAt(0) + word.slice(1).toLowerCase() + ' ';
        })
    } else {
        newWord = words[0].charAt(0) + words[0].slice(1).toLowerCase();
    }
    return newWord
}

firstLetterUpperCase('HELLO WORLD')
let year2015 = [];

csv()
    .fromFile(csvFilePath)
    .on('json', (obj, index) => {
        if(obj.State !== ''){
            obj.State = firstLetterUpperCase(obj.State)
            year2015.push(obj)
        } else if(obj.State === ''){
            obj.State = year2015[index -1].State;
            year2015.push(obj)
        }
    })
    .on('end', error => {
        console.log("done")
        fs.writeFile("./lib/year2015.json", JSON.stringify(year2015), err => {
            if (err) {console.log(err)}
                console.log("Saved data to json...")
        })

    })






module.exports = {
    stateNames
}