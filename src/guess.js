#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getRandom } = require('./helpers.js');

const argv = yargs(hideBin(process.argv))
  .option('s', {
    alias: 'start',
    type: 'number',
    default: 0,
    description: 'Начало диапазона',
  })
  .option('e', {
    alias: 'end',
    type: 'number',
    default: 100,
    description: 'Конец диапазона',
  })
  .argv;
const from = argv.s;
const to = argv.e;
const number = getRandom(from, to);
let iterations = 0;

const question = () => {
  return new Promise((resolve, reject) => rl.question('Попробуйте отгадать: ', answer => resolve(answer)));
};

const main = async () => {
  console.log(`Загадано число в диапазоне от ${from} до ${to}`);

  let success = false;

  while (!success) {
    const answer = await question();

    if (answer < number) console.log('Больше');
    if (answer > number) console.log('Меньше');
    
    iterations += 1;
    success = +answer === number;
  }

  console.log(`🎉 🎉 🎉 Отгадано число ${number} (попыток: ${iterations})`);
  rl.close();
};

main();