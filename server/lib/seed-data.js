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

function parseCsv(filePath, year, queryInterface, query) {
    let tempArray = [];
    csv()
    .fromFile(filePath)
    .on('json', (obj, index) => {
        if(obj.State !== ''){
            obj.State = firstLetterUpperCase(obj.State)
            tempArray.push(obj)
        } else if(obj.State === ''){
            obj.State = year2015[index -1].State;
            tempArray.push(obj)
        }
    })
    .on('end', error => {
        console.log('resolved');
        return queryInterface[query]('Crimes', tempArray.map(crime => {
            return {
                year: year,
                population: crime.population,
                violent_crime: crime.violent_crime,
                murder_and_manslaughter: crime.murder_and_manslaughter,
                rape: crime.rape,
                robbery: crime.robbery,
                aggravated_assult: crime.aggravated_assult,
                property_crime: crime.property_crime,
                burlgary: crime.burlgary,
                larceny_theft: crime.larceny_theft,
                motor_vehicle_theft: crime.motor_vehicle_theft,
                arson: crime.arson,
                city: crime.City,
                state: crime.State,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        }))
        // console.log("done")
        // fs.writeFile("./lib/year2015.json", JSON.stringify(year2015), err => {
        //     if (err) {console.log(err)}
        //         console.log("Saved data to json...")
        // })

    })
}







module.exports = {
    stateNames,
    parseCsv
}