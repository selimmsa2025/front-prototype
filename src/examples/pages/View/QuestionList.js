import { useForm } from 'react-hook-form';
import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import {
  Input,
  Button,
  Select,
  Textarea,
  DatePicker,
  Radio,
  Check,
  Tab,
} from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';

const comments = [
  {
    id: '1',
    text: '댓글이 들어갑니다.1',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '1',
    replies: [],
  },
  {
    id: '2',
    text: '댓글이 들어갑니다.2',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '1',
    replies: [],
  },
  {
    id: '3',
    text: '댓글이 들어갑니다.3',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '1',
    replies: [],
  },
  {
    id: '4',
    text: '댓글이 들어갑니다.2',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '2',
    replies: [],
  },
  {
    id: '5',
    text: '댓글이 들어갑니다.3',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '2',
    replies: [],
  },
  {
    id: '6',
    text: '댓글이 들어갑니다.1',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '3',
    replies: [],
  },
  {
    id: '7',
    text: '댓글이 들어갑니다.2',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '3',
    replies: [],
  },
  {
    id: '8',
    text: '댓글이 들어갑니다.3',
    userId: '작성자',
    createDate: '2024.01.16',
    questionType: '3',
    replies: [],
  },
];

export default function QuestionList({ }) {
  const [tab, setTab] = useState(0);
  const [commentList, setCommentList] = useState(comments);
  const [openAnswerPop, setOpenAnswerPop] = useState(null);
  const tabData = {
    1: '행사관리',
    2: '당직관리',
    3: '신청관리',
  };

  const onHeartClick = (id) => {
    const updatedComments = commentList.map((comment, idx) =>
      comment.id === id ? { ...comment, heart: !comment.heart } : comment,
    );
    setCommentList(updatedComments);
  };

  const changeOpenAnswer = useCallback((id) => {
    setOpenAnswerPop((prev) => (prev === id ? null : id));
  }, []);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>질의목록 조회</h2>
      </div>
      <div class='contents_area'>
        <div class='tit_area'>
          <div class='right_items'>
            <Button as='a' color='4' text='질의QR' />
            <Button
              as='a'
              color='4'
              type='download'
              title='다운로드'
              text='질의항목 다운로드'
            />
            <Button
              as='a'
              color='4'
              type='download'
              title='다운로드'
              text='질의응답결과 다운로드'
            />
          </div>
        </div>

        <Tab
          type={1}
          data={[
            { index: 0, title: '전체' },
            { index: 1, title: '행사관리' },
            { index: 2, title: '당직관리' },
            { index: 3, title: '신청관리' },
          ]}
          currentIndex={tab}
          onChange={(index) => {
            setTab(index);
          }}
        />

        <article class='comment_bx'>
          <div class='list not_img' id=''>
            <ul>
              {(tab != 0
                ? _.filter(
                  commentList,
                  (comment) => comment.questionType == tab,
                )
                : commentList
              )?.map((comment) => {
                return (
                  <>
                    <li id='cmt1'>
                      <div class='comment'>
                        <span class='name'>
                          {tabData[comment.questionType] || '질의'}
                        </span>
                        <span class='text'>{comment.userId}</span>
                        <p id='' class='txt'>
                          {comment.text}
                        </p>
                        <div class='right'>
                          <a
                            href='javascript:void(0)'
                            class='icon_txt1 window'
                            title='새창열림'
                            target='_blank'
                          >
                            새창
                          </a>{' '}
                          <a
                            href='javascript:void(0)'
                            class={`icon_txt1 heart ${comment.heart ? 'on' : ''
                              }`}
                            onClick={() => {
                              onHeartClick(comment.id);
                            }}
                          >
                            공감 <b>2</b>
                          </a>{' '}
                          <Button as='a' color='2' class='type2' text='삭제' />
                          <Button
                            as='a'
                            color='1'
                            class='type2'
                            text='답변'
                            onClick={() => {
                              changeOpenAnswer(comment.id);
                            }}
                          />
                          <Button
                            as='a'
                            color='4'
                            class='type2'
                            text='완료처리'
                          />
                        </div>
                      </div>
                      {openAnswerPop == comment.id && (
                        <div class='form' id=''>
                          <form name='cmtForm' method='post' action=''>
                            <fieldset>
                              <legend class='blind'>대댓글</legend>
                              <div
                                class='textarea'
                                title='댓글내용'
                                contenteditable='true'
                                tabindex='0'
                              ></div>
                              <Textarea
                                class='hidden'
                                name=''
                                rows='4'
                                cols='76'
                                placeholder='답변 내용이 들어가는 자리입니다.'
                              />
                              <Button as='a' color='1' text='등록' />
                            </fieldset>
                          </form>
                        </div>
                      )}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </>
  );
}
