import dayjs from 'dayjs';

//랜덤값 구하기
export const secureRandom = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] * Math.pow(2, -32);
}

//날짜 유효성 체크
export const checkValidDate = (value) => {
    try {
        return /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/.test(value.replace("-", "").replace(".", ""));
    } catch (err) {
        return false;
    }
};

//날짜 형식에 맞춰 리턴
export const changeDateFormat = (value, format) => {
    return dayjs(value).format(format || 'YYYY-MM-DD');
}

//전화번호 하이픈 처리
export const changePhoneFormat = (value) => {
    if(value.length == 8) {
        return value.replace(/(\d{4})(\d{4})/, '$1-$2');

    } else if(value.length == 11) {
        return value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

    } else if(value.indexOf('02') == 0) {
        return value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');

    } else {
        return value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
}
