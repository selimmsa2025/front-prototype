import _ from 'lodash';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ko';
export default function CardTypeEventList({ dataList }) {
  dayjs.extend(localeData);
  dayjs.extend(localizedFormat);

  const getLocaleDateWithTime = (date) => {
    const localizedDate = dayjs(date).locale('ko');
    return localizedDate.format('YYYY-MM-DD(ddd) HH:mm');
  };
  const getLocaleDateOnlyDate = (date) => {
    const localizedDate = dayjs(date).locale('ko');
    return localizedDate.format('YYYY-MM-DD(ddd)');
  };

  return (
    <>
      <div class='board_list'>
        <ul class='event_list'>
          {dataList?.map((v, i) => {
            return (
              <>
                <li>
                  <a href='javascript:void(0)'>
                    <span
                      class={`tag${v.status == '행사종료'
                        ? '4'
                        : v.status == '등록대기'
                          ? '3'
                          : v.status == '등록마감'
                            ? '2'
                            : v.status == '등록중'
                              ? '1'
                              : ''
                        }`}
                    >
                      {v.status}
                    </span>
                    <span>{v.institution}</span>
                    <strong class='tit'>{v.eventTitle}</strong>
                    <ul class='info_list'>
                      <li>
                        <span>행사일</span>
                        <p>
                          {getLocaleDateWithTime(v.eventStartDate)} ~{' '}
                          {getLocaleDateOnlyDate(v.eventEndDate)}
                        </p>
                      </li>
                      <li>
                        <span>참석대상</span>
                        <p>{v.target}</p>
                      </li>
                      <li>
                        <span>행사장소</span>
                        <p>{v.place}</p>
                      </li>
                      <li>
                        <span>신청기간</span>
                        <p>
                          {getLocaleDateWithTime(v.appStartDate)} ~{' '}
                          {getLocaleDateOnlyDate(v.appEndDate)}
                        </p>
                      </li>
                    </ul>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
