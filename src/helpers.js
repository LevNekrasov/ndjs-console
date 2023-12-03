function getDay(date) {
  try {
    const dayValue = date.getDate();
    const dayName = date.getDay();
    const days = {
      1: 'понедельник',
      2: 'вторник',
      3: 'среда',
      4: 'четверг',
      5: 'пятница',
      6: 'суббота',
      7: 'воскресенье',
    };

    return `${dayValue} (${days[dayName]})`;
  } catch (error) {
    //
  }
}

function getMonth(date) {
  try {
    const month = date.getMonth();
    const months = {
      0: 'январь',
      1: 'февраль',
      2: 'март',
      3: 'апрель',
      4: 'май',
      5: 'июнь',
      6: 'июль',
      7: 'август',
      8: 'сентябрь',
      9: 'октябрь',
      10: 'ноябрь',
      11: 'декабрь',
    };

    return months[month];
  } catch (error) {
    //
  }
}

function calculateDate(date, d = 0, m = 0, y = 0, mode = 'add') {
  try {
    const day = date.getDate() + (mode === 'add' ? d : -d);
    const month = date.getMonth() + (mode === 'add' ? m : -m);
    const year = date.getFullYear() + (mode === 'add' ? y : -y);

    return new Date(year, month, day).toISOString();
  } catch (error) {
    //
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.getDay = getDay;
exports.getMonth = getMonth;
exports.calculateDate = calculateDate;
exports.getRandom = getRandom;