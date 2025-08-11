import { useState, useEffect } from 'react';
import CommentList from '../CommentList';
import axios from 'axios';

export default function Comment (params) {
  const [commentList, setCommentList] = useState([]);
  const getCommentList = async () => {
    const response = await axios.get('/mockupServer/getCommentList.json');
    setCommentList(response.data);
  };
  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <>
      <h2 class='h-tit'>H2 Title (댓글 or 답변)</h2>

      <article class='comment_bx'>
        <h3 class='title'>
          댓글<span>(3)</span>
        </h3>

        <div class='form'>
          <form name='cmtForm' method='post' action=''>
            <fieldset>
              <legend class='blind'>등록</legend>
              <textarea
                title='댓글 내용'
                class='textarea'
                name=''
                rows='4'
                cols='76'
                placeholder='내용을 입력해 주세요.'
              ></textarea>
              <button type='button' class='btn1'>
                등록
              </button>
            </fieldset>
          </form>
        </div>

        <CommentList commentList={commentList} />
      </article>
    </>
  );
}
