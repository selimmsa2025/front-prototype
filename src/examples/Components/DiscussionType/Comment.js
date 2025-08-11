import { React, useState, useEffect } from 'react';
import CommentList from './CommentList';
import axios from 'axios';
import { Button } from '../Element';

export default function Comment () {
  const [commentList, setCommentList] = useState([]);
  const getCommentList = async () => {
    const response = await axios.get('/mockupServer/getCommentList2.json');
    setCommentList(response.data);
  };
  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <article class='comment_bx'>
      <h3 class='title'>
        댓글<span>(3)</span>
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
            <div class='btn_area'>
              <Button color='7' class='type2 icon_lf' text=''>
                <i class='ri-bookmark-line'></i>기권
              </Button>

              <Button color='8' class='type2 icon_lf' text=''>
                <i class='ri-thumb-down-line'></i>반대
              </Button>

              <Button color='3' class='type2 icon_lf' text=''>
                <i class='ri-thumb-up-line'></i>찬성
              </Button>
            </div>
          </fieldset>
        </form>
      </div>

      <CommentList commentList={commentList} />
    </article>
  );
}
