const { addMinutes } = require('date-fns');

const time = 0.35445601851851855;
const minutesToAdd = time * 24 * 60;

let date = new Date(0, 0 ,0, 0, 0, 0, 0);
const output = addMinutes(date, minutesToAdd);

console.log(output.toISOString());
