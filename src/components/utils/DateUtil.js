import moment from 'moment';

export function getDay(date, type) {
  let result = '';
  let value = '';

  if (date == null || date == '') {
    value = moment().day();
  } else {
    value = moment(date, 'YYYY-MM-DD HH:mm:ss').day();
  }

  //0: 일, 1: 월, 2: 화. 3: 수, 4: 목, 5: 금, 6: 토
  switch (value) {
    case 0:
      result = '일';
      break;
    case 1:
      result = '월';
      break;
    case 2:
      result = '화';
      break;
    case 3:
      result = '수';
      break;
    case 4:
      result = '목';
      break;
    case 5:
      result = '금';
      break;
    case 6:
      result = '토';
      break;
    default:
      '';
  }

  if (type == '1') {
    return result + '요일';
  } else {
    return result;
  }
}

export function getRangeDateExpression(bgngDate, endDate, datePatturn) {
  const bgngYmd = moment(bgngDate, 'YYYY-MM-DD HH:mm:ss').format(datePatturn);
  const bgngHm = moment(bgngDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
  const endYmd = moment(endDate, 'YYYY-MM-DD HH:mm:ss').format(datePatturn);
  const endHm = moment(endDate, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
  const daysDiff = moment(endYmd, 'YYYY-MM-DD HH:mm:ss').diff(
    moment(bgngYmd, 'YYYY-MM-DD HH:mm:ss'),
    'days',
  );

  if (daysDiff == 0) {
    return (
      bgngYmd + '(' + getDay(bgngYmd, 0) + ')' + ' ' + bgngHm + ' ~ ' + endHm
    );
  } else {
    return (
      bgngYmd +
      '(' +
      getDay(bgngYmd, 0) +
      ')' +
      ' ' +
      bgngHm +
      ' ~ ' +
      endYmd +
      '(' +
      getDay(endYmd, 0) +
      ')' +
      ' ' +
      endHm
    );
  }
  return '';
}

export function checkDate(bgngDate, endDate, datePatturn) {
  const bgng = moment(bgngDate, datePatturn).format(datePatturn);
  const end = moment(endDate, datePatturn).format(datePatturn);
  const diff = moment(bgng, datePatturn).diff(
    moment(end, datePatturn)
  );

  if (diff > 0) {
    return false;
  }else{
    return true;
  }
}
