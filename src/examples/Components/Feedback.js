import { useState, useEffect } from 'react';
import { Button, Textarea } from './Element';
import _ from 'lodash';
export default function Feedback ({ text }) {
  const totalStar = 5;
  const [star, setStar] = useState(0);
  const [checkList, setCheckList] = useState([]);
  const [radio, setRadio] = useState(0);
  const [suggestion, setSuggestion] = useState('');
  const check = (index) => {
    if (_.includes(checkList, index)) {
      setCheckList((prev) => {
        return [..._.filter(prev, (v) => v != index)];
      });
    } else {
      setCheckList((prev) => {
        return [...prev, index];
      });
    }
  };

  const questionList1 = ['선택 1', '선택 2', '선택 3'];
  const questionList2 = ['선택 1', '선택 2', '선택 3'];

  const makeStar = () => {
    return Array(totalStar)
      .fill(null)
      .map((_, index) => {
        index = index + 1;
        return (
          <li>
            <input
              type='checkbox'
              name='star'
              title={`star${index}`}
              id={`star${index}`}
              checked={star >= index}
            />
            <label
              for={`star${index}`}
              onClick={() => {
                setStar(index);
              }}
            >
              <span class='sr-only'>별점{index}점</span>
            </label>
          </li>
        );
      });
  };

  return (
    <>
      <article class='box_st3 feedback'>
        <div class='clear'>
          <h3 class='title'>이 페이지가 도움이 되었나요?</h3>
          <ul class='star_list'>{makeStar()}</ul>
        </div>
        <fieldset class={`opinion clear ${star != 0 ? 'active' : ''}`}>
          {/* <!-- 별점 선택시 class="active" 추가 --> */}
          <legend>콘텐츠 만족도 조사</legend>
          <p class='text1'>
            감사합니다! 이 페이지의 개선을 위해 추가적으로 의견을
            남기시겠습니까?
          </p>
          <ul class='list'>
            <li>
              <p class='desc'>
                이 페이지의 어떤 점에 만족하셨나요? (선택 입력)
              </p>
              <ul class='chk_list'>
                {questionList1.map((question, index) => {
                  index = index + 1;
                  return (
                    <li>
                      <div class='form_chk'>
                        <input
                          type='checkbox'
                          name={`chk_1`}
                          id={`chk_1-${index}`}
                          checked={checkList.includes(index)}
                        />
                        <label
                          for={`chk_1-${index}`}
                          onClick={() => {
                            check(index);
                          }}
                        >
                          {question}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <p class='desc'>
                이 페이지의 어떤 점에 만족하셨나요? (선택 입력)
              </p>
              <ul class='chk_list'>
                {questionList2.map((question, index) => {
                  index = index + 1;
                  return (
                    <li>
                      <div class='form_chk'>
                        <input
                          type='radio'
                          name='rdo_1'
                          id={`rdo_1-${index}`}
                          checked={radio == index}
                        />
                        <label
                          for={`rdo_1-${index}`}
                          onClick={() => {
                            setRadio(index);
                          }}
                        >
                          {question}
                        </label>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <p class='desc'>
                기타 제안 사항이 있다면 작성해주세요. (선택 입력)
              </p>
              <Textarea
                name='etc_textarea'
                title='etc_textarea'
                id='etc'
                class='textarea'
                placeholder='입력가능한 영역'
                value={suggestion}
                onChange={(e) => {
                  setSuggestion(e.target.value);
                }}
              />
            </li>
          </ul>
          <div class='fr'>
            <Button as={'a'} color={4} text={`취소`} />{' '}
            <Button as={'a'} color={1} text={`평가완료`} />
          </div>
          <div class='grade'>
            <div>
              <strong class='label'>내 평점</strong>
              <div class='txt'>
                <ul class='star_list view'>{makeStar()}</ul>
                <span>
                  총점<b>{totalStar}</b>
                </span>
              </div>
            </div>
            <div>
              <strong class='label'>전체 평점</strong>
              <p class='txt'>
                <span>
                  참여<b>{star}</b>
                </span>
                <span>
                  총점<b>{totalStar}</b>
                </span>
              </p>
            </div>
          </div>
        </fieldset>
      </article>

      <article class='box_st3 feedback'>
        <h3 class='title'>
          <i class='ri-checkbox-circle-fill'></i> 의견을 남겨주셔서 감사합니다.
        </h3>
        <p class='text2'>보내주신 소중한 의견은 페이지 개선에 도움이 됩니다.</p>
      </article>
    </>
  );
}
