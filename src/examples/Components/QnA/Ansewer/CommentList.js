import { useState, useEffect, useMemo, useCallback } from 'react';
import _ from 'lodash';
import { Button, Textarea } from '../../Element';

const App = ({ commentList }) => {
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
        <div class='list' id=''>
          <ul>
            <li
              className={indexLen != 1 ? `re type${indexLen - 1}` : ''}
              id={`cmt${comment.id}`}
            >
              <div class='comment'>
                <i class='img'>
                  <img src='' alt='' />
                </i>
                <span class='name'>{comment.userId}</span>
                <span class='text'>{comment.depart}</span>
                <span class='text date'>{comment.createDate}</span>
                <p id='' class='txt'>
                  {comment.text}
                </p>
                <div class='right'>
                  <Button
                    as='button'
                    text='버튼'
                    color='4'
                    class='type2'
                    size=''
                  />
                  <Button
                    as='button'
                    text='버튼'
                    color='4'
                    class='type2'
                    size=''
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
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
