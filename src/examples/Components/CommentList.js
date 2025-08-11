import { useState, useEffect, useMemo, useCallback } from 'react';
import _ from 'lodash';
import { Button, Textarea } from './Element';

const App = (params) => {
  const { commentList } = params;
  const [openStickerPop, setOpenStickerPop] = useState(null);
  const [openCommentPop, setOpenCommentPop] = useState(null);
  const [openAnswerPop, setOpenAnswerPop] = useState(null);

  const changeOpenSticker = useCallback((id) => {
    setOpenStickerPop((prev) => (prev === id ? null : id));
  }, []);

  const changeOpenComment = useCallback((id) => {
    setOpenCommentPop((prev) => (prev === id ? null : id));
  }, []);

  const changeOpenAnswer = useCallback((id) => {
    setOpenAnswerPop((prev) => (prev === id ? null : id));
  }, []);

  const CommentList = ({ commentList, index }) => {
    return (
      <div className='list' id=''>
        <ul>
          {commentList.map((comment, i) => (
            <Comment
              key={comment.id}
              comment={comment}
              index={index == undefined ? `${i}` : `${index}-${i}`}
            />
          ))}
        </ul>
      </div>
    );
  };

  const Comment = ({ comment, index }) => {
    const indexLen = index.split('-').length;
    return (
      <>
        <li className={indexLen != 1 ? `re type${indexLen - 1}` : ''}>
          <div className='comment'>
            <i className='img'>
              <img src='' alt='' />
            </i>
            <span className='name'>{comment.userId}</span>
            <span className='text'>{comment.depart}</span>
            <span className='text date'>{comment.createDate}</span>
            <p id='' className='txt'>
              {comment.text}
            </p>

            <div class='stick'>
              {openAnswerPop == comment.id || openCommentPop == comment.id ? (
                <Button
                  className='type2'
                  color='4'
                  text='스티커'
                  onClick={() => {
                    changeOpenSticker(comment.id);
                  }}
                />
              ) : null}
              {/* <!-- 클릭시 하단 .sticker_ch에 class="active" toggle됨 --> */}
              <div
                class={`sticker_ch ${
                  openStickerPop == comment.id ? 'active' : ''
                }`}
              >
                <strong class='sr-only'>스티커 선택창</strong>
                <ul class='tabs'>
                  <li class='active'>
                    <a href='#'>캐릭터</a>
                  </li>
                  {/* <!-- 클릭시 class="active" 추가 --> */}
                  <li>
                    <a href='#'>표정</a>
                  </li>
                  <li>
                    <a href='#'>기타</a>
                  </li>
                </ul>
                <div class='bx'>
                  <ul class='on'>
                    {/* <!-- class="on" 추가 시 해당 내용 보여짐 --> */}
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                  </ul>
                  <ul>
                    {/* <!-- class="on" 추가 시 해당 내용 보여짐 --> */}
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                  </ul>
                  <ul>
                    {/* <!-- class="on" 추가 시 해당 내용 보여짐 --> */}
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='/img/sub/editor_emoticon.png' alt='' />
                      </a>
                    </li>
                  </ul>
                </div>

                <a
                  href='javascript:void(0)'
                  onClick={() => {
                    changeOpenSticker(comment.id);
                  }}
                  class='close'
                >
                  <span class='sr-only'>스티커 선택창 닫기</span>
                </a>
                {/* <!-- 클릭시 분모 .sticker_ch에 class="active" 삭제 됨 --> */}
              </div>
            </div>

            {index == 0 ? (
              <div class='right'>
                <Button class='type2 icon_lf' color='7' as='a' text=''>
                  <i class='ri-bookmark-line'></i>기권
                </Button>
                <Button class='type2 icon_lf' color='8' as='a' text=''>
                  <i class='ri-thumb-down-line'></i>반대
                </Button>
                <Button class='type2 icon_lf' color='3' as='a' text=''>
                  <i class='ri-thumb-up-line'></i>찬성
                </Button>
              </div>
            ) : (
              <div className='right'>
                <Button
                  as={'a'}
                  color={4}
                  class='type2'
                  text={`답변`}
                  onClick={() => {
                    changeOpenAnswer(comment.id);
                  }}
                />
                <Button
                  as={'a'}
                  color={4}
                  class='type2'
                  text={`댓글`}
                  onClick={() => {
                    changeOpenComment(comment.id);
                  }}
                />
              </div>
            )}

            {openCommentPop == comment.id ? (
              <>
                <div className='form' id=''>
                  <form name='cmtForm' method='post' action=''>
                    <fieldset>
                      <legend className='blind'>댓글 수정</legend>
                      <div
                        className='textarea'
                        title='댓글내용'
                        contentEditable='true'
                        tabIndex='0'
                      >
                        댓글 내용이 들어가는 자리입니다.
                      </div>
                      <Textarea
                        class='hidden'
                        name=''
                        rows='4'
                        cols='76'
                        placeholder='내용을 입력해 주세요.'
                      ></Textarea>
                      <button type='button' className='btn1'>
                        저장
                      </button>
                    </fieldset>
                  </form>
                </div>
              </>
            ) : null}
          </div>
          {openAnswerPop == comment.id ? (
            <>
              <div className='form' id=''>
                <form name='cmtForm' method='post' action=''>
                  <fieldset>
                    <legend className='blind'>댓글 수정</legend>
                    <div
                      className='textarea'
                      title='댓글내용'
                      contentEditable='true'
                      tabIndex='0'
                    >
                      답변 내용이 들어가는 자리입니다.
                    </div>
                    <Textarea
                      class='hidden'
                      name=''
                      rows='4'
                      cols='76'
                      placeholder='내용을 입력해 주세요.'
                    ></Textarea>
                    <button type='button' className='btn1'>
                      저장
                    </button>
                  </fieldset>
                </form>
              </div>
            </>
          ) : null}
        </li>
        <CommentList commentList={comment.replies} index={index} />
      </>
    );
  };

  return (
    <>
      <CommentList commentList={commentList} />
    </>
  );
};

export default App;
const CommentList = ({ commentList, index }) => {
  return (
    <div className='list' id=''>
      <ul>
        {commentList.map((comment, i) => (
          <Comment
            key={comment.id}
            comment={comment}
            index={index == undefined ? `${i}` : `${index}-${i}`}
          />
        ))}
      </ul>
    </div>
  );
};
