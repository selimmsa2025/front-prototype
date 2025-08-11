import Pagination from '../../Board/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import _ from 'lodash';
import { Button } from '../../Element';
export default function Answer ({ answerData }) {
  const [isSelection, setIsSelection] = useState(false);
  useEffect(() => {
    console.log(answerData);
  }, []);
  return (
    <>
      <div class='box_st4 answer_box'>
        <div
          class={
            answerData.isAdopted || isSelection
              ? 'regis_answer check'
              : 'regis_answer'
          }
        >
          <div class='top'>
            {answerData.isAdopted && <span class='sr-only'>채택된 답변</span>}

            <strong class='tit'>{answerData.answerTitle}</strong>
            {!answerData.isAdopted && (
              <Button
                as='button'
                text='채택 '
                color='3'
                class={isSelection ? 'type2 hidden' : 'type2'}
                size=''
                onClick={() => {
                  setIsSelection(!isSelection);
                }}
              >
                <i class='ri-check-line'></i>
              </Button>
            )}
          </div>
          <p class='text'>{answerData.answerContent}</p>
        </div>
        <article class='comment_bx'>
          <h3 class='title'>
            댓글<span>(2)</span>
          </h3>

          <div class='form'>
            <form name='cmtForm' method='post' action=''>
              <fieldset>
                <legend class='blind'>등록</legend>
                <textarea
                  class='textarea'
                  name=''
                  rows='4'
                  cols='76'
                  placeholder='내용을 입력해 주세요.'
                ></textarea>
                <Button as='button' color='1' size='' text='등록' />
              </fieldset>
            </form>
          </div>

          <div class='list' id=''>
            <ul>
              <CommentList commentList={answerData.replies} />
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
