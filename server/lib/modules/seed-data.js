
let stateNames = ['Alabama','Alaska','Arizona','Arkansas','Californa','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachussets','Michigan','Minnesota','Mississippi','Missouri',
'Montana','Nebrasksa','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisctonsin','Wyoming'];

function reduceNationData(array) {
    let tempArray = [];
    let tempObj = {year: 2005, state: 'Alabama', population: 0, violent_crime: 0, murder_and_manslaughter: 0, rape: 0, robbery: 0, aggravated_assault: 0, property_crime: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, createdAt: new Date(), updatedAt: new Date()};
    for(let i = 0; i < array.length; i++){    // console.log(array[i])
        if(array[i].State === tempObj.state){
            tempObj.population += array[i].population;
            tempObj.violent_crime += array[i].violent_crime;
            tempObj.murder_and_manslaughter += array[i].murder_and_manslaughter;
            tempObj.rape += array[i].rape;
            tempObj.robbery += array[i].robbery;
            tempObj.aggravated_assault += array[i].aggravated_assault;
            tempObj.property_crime += array[i].property_crime;
            tempObj.burglary += array[i].burglary;
            tempObj.motor_vehicle_theft += array[i].motor_vehicle_theft;
            tempObj.arson += array[i].arson;
        } else if(array[i].State !== tempObj.state){
            tempArray.push(tempObj);
            tempObj = {year: 2005, state: array[i].State , population: 0, violent_crime: 0, murder_and_manslaughter: 0, rape: 0, robbery: 0, aggravated_assault: 0, property_crime: 0, burglary: 0, larceny_theft: 0, motor_vehicle_theft: 0, arson: 0, createdAt: new Date(), updatedAt: new Date()};
        }
    }
    return tempArray;
}

module.exports = {
    stateNames
}