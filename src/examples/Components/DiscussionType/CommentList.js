import { useState, useEffect, useMemo, useCallback } from 'react';
import _ from 'lodash';
import { Button, Textarea } from '../Element';

const App = ({ commentList }) => {
  const [isLike, setIsLike] = useState(Array(commentList.length).fill(false));

  const clickHeart = (i) => {
    const newIsLike = [...isLike];
    newIsLike[i] = !newIsLike[i];
    setIsLike(newIsLike);
  };
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
        <li
          className={indexLen != 1 ? `re type${indexLen - 1}` : ''}
          id={`cmt${comment.id}`}
        >
          <div className='comment'>
            <i className='img'>
              <img src='' alt='' />
            </i>
            <span class={comment.tag}>
              {comment.tag == 'tag1'
                ? '찬성의견'
                : comment.tag == 'tag2'
                ? '반대의견'
                : '기권의견'}
            </span>
            <span className='name'>{comment.userId}</span>
            <span className='text'>{comment.depart}</span>
            <span className='text date'>{comment.createDate}</span>
            <p id='' className='txt'>
              {comment.text}
            </p>

            <div class='right'>
              <a
                href='#'
                class={
                  isLike[comment.id] == true
                    ? ' icon_txt1 heart on'
                    : 'icon_txt1 heart'
                }
                onClick={(event) => {
                  event.preventDefault();
                  clickHeart(comment.id);
                }}
              >
                좋아요 <b>{comment.heart}</b>
              </a>
              <Button color='4' text='수정' class='type2' as='button' size='' />
              <Button color='4' text='삭제' class='type2' as='button' size='' />
            </div>
          </div>
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
