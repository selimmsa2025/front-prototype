import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Button,
  Tree,
  Textarea,
  Select,
} from '../../Components/Element';

import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
export default function NoteBook () {
  const [openMenu, setOpenMenu] = useState(true);
  const [noteBook, setNoteBook] = useState({});
  const [comments, setComments] = useState([]);

  const getBlogNoteBookData = async () => {
    const response = await axios.get('/mockupServer/getBlogNoteBookData.json');
    setNoteBook(response.data.noteBook);
    setComments(response.data.comments);
  };

  useEffect(() => {
    getBlogNoteBookData();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>내 블로그 관리</h2>
      </div>
      <div class='contents_area'>
        <div class='in-between type_blog'>
          <div class={`blog_left ${openMenu ? 'active' : ''}`}>
            <Button
              as='button'
              color='0'
              class='bg_btn close'
              text=''
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <span class='sr-only'></span>
            </Button>
            {/* <!-- 클릭시 분모 .blog_left에 class="active" 제거 --> */}
            <div class='blog'>
              <div class='bg_head'>
                <span class='profile'>
                  <img src='/img/common/noimage.jpg' alt='' />
                </span>
                <p class='txt'>울트라기관 울트라부서</p>
                <strong class='name'>홍길동 수석연구원</strong>
                <p class='desc'>
                  <i class='ri-user-smile-line'></i> 가난한 모든이들에게 나눔을
                </p>
              </div>
              <div class='bg_body'>
                <ul class='acco-list lnb-list'>
                  <li class='plus'>
                    <a href='#'>카테고리</a>
                    <ul>
                      <li class='active'>
                        <a href='#'>낙서장</a>
                      </li>
                      <li>
                        <a href='#'>부동산 경매정보</a>
                      </li>
                      <li>
                        <a href='#'>산업 동향</a>
                      </li>
                      <li>
                        <a href='#'>경제 동향</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <Button
              as='button'
              color='0'
              class='bg_btn open'
              text=''
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <span class='sr-only'></span>
            </Button>
          </div>
          <div class='contents'>
            <div class='tit_area'>
              <h3 class='h-tit2 mb_10'>낙서장</h3>
            </div>

            <div class='board_content'>
              <h4 class='title'>타이틀이 들어갈 자리입니다</h4>
              <p class='text'>
                <strong>작성 일시</strong>2024.05.29
              </p>
              <div class='content_bx'>컨텐츠 내용이 들어갈 자리입니다.</div>
            </div>

            <div class='bet_btn_area'>
              <div class='bottom_left_area'>
                <Button as='a' color='3' class=' type1' text='목록' />
              </div>
            </div>

            <article class='comment_bx type2'>
              <div class='form'>
                <form name='cmtForm' method='post' action=''>
                  <fieldset>
                    <legend class='blind'>등록</legend>
                    <div class='assi'>
                      <Select
                        name=''
                        id=''
                        class='size_sm'
                        title='댓글 달기'
                        data={[
                          { id: '0', name: '댓글 달기' },
                          { id: '1', name: '댓글 달기' },
                        ]}
                      />
                      <Button as='a' color='2' text='관심등록' />
                    </div>
                    <Textarea
                      class='textarea'
                      name=''
                      rows='4'
                      cols='76'
                      placeholder='내용을 입력해 주세요.'
                    />
                    <Button as='button' text='등록' />
                  </fieldset>
                </form>
              </div>

              <div class='list not_img' id=''>
                <ul>
                  {comments.map((comment, i) => {
                    return (
                      <li id='cmt1'>
                        <div class='comment'>
                          <span class='name'>{comment.userName}</span>
                          <span class='text'>{comment.depart}</span>
                          <span class='text date'>{comment.createdDate}</span>
                          <p id='' class='txt'>
                            {comment.comment}
                          </p>
                          <div class='right'>
                            {i == 0 && (
                              <>
                                <span class='communt_num'>댓글 5</span>
                                <Button as='a' color='4' class='type2' />
                                <Button as='a' color='4' class='type2' />
                              </>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
