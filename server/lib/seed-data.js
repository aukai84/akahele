const csv = require('csvtojson');
const csvFilePath = './lib/2015_CRIME.csv';

let stateNames = ['Alabama','Alaska','Arizona','Arkansas','Californa','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachussets','Michigan','Minnesota','Mississippi','Missouri',
'Montana','Nebrasksa','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisctonsin','Wyoming'];

let year2015 = [];


function firstLetterUpperCase(string) {
    newWord = '';
    string.split(' ').forEach(word => {
        newWord += word.charAt(0) + word.slice(1).toLowerCase() + ' ';
    })
    return newWord
}

firstLetterUpperCase('HELLO WORLD')

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
    .on('done', error => {
        console.log("done")
    })



module.exports = {
    stateNames,
    year2015
}