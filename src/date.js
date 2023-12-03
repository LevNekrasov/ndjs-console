#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getDay, getMonth, calculateDate } = require('./helpers');

const now = new Date();
let isSuccess = false;

yargs(hideBin(process.argv))
  .command(
    'current',
    'Текущая дата и время в формате ISO',
    (yargsInner) => getOptions(yargsInner, 'boolean', 'Показать'),
    (argv) => {
      getCurrentDate(argv);
      isSuccess = true;
    },
  )
  .command(
    'add',
    'Будущая дата и время в формате ISO',
    (yargsInner) => getOptions(yargsInner, 'number', 'Добавить'),
    (argv) => {
      setDate(argv, 'add');
      isSuccess = true;
    },
  )
  .command(
    'sub',
    'Прошедшая дата и время в формате ISO',
    (yargsInner) => getOptions(yargsInner, 'number', 'Уменьшить'),
    (argv) => {
      setDate(argv, 'sub');
      isSuccess = true;
    },
  )
  .argv;

if (!isSuccess)
  console.log('Такой команды не существует! Воспользуйтесь --help дя поучения дополнительной информации');

function getOptions(yargsInner, type, descriptionKey) {
  return yargsInner
    .option('y', {
      'alias': 'year',
      description: `${descriptionKey} год`,
      type,
    })
    .option('m', {
      'alias': 'month',
      description: `${descriptionKey} месяц`,
      type,
    })
    .option('d', {
      'alias': 'date',
      description: `${descriptionKey} день`,
      type,
    });
}

function getCurrentDate(argv = {}) {
  console.log("🚀 ~ file: date.js:64 ~ getCurrentDate ~ argv:", argv)
  const {date, month, year} = argv;

  console.log('Сегодня у нас...',);

  if (!date && !month && !year) console.log('...дата и время в формате ISO: ', now.toISOString());
  if (date) console.log('...день: ', getDay(now));
  if (month) console.log('...месяц: ', getMonth(now));
  if (year) console.log('...год: ', `${now.getFullYear()}`);
}

function setDate(argv = {}, mode) {
  const {date, month, year} = argv;

  if (!date && !month && !year) {
    console.log('Укажите какой-нибудь флаг! Воспользуйтесь --help дя поучения дополнительной информации');
    return;
  }

  console.log('Получим дату: ', calculateDate(now, date, month, year, mode));
}