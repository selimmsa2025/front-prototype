import Breadcrumb from '../../Components/Breadcrumb';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from '../../Components/CommentList';
import { Input, Textarea, Button } from '../../Components/Element';
export default function CommentPage() {
  const [commentList, setCommentList] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const getCommentList = async () => {
    const response = await axios.get('/mockupServer/getCommentList.json');
    setCommentList(response.data);
  };
  useEffect(() => {
    getCommentList();
  }, []);
  return (
    <>
      <Breadcrumb />
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">Page Title</h2>
        <div class="title-drop-wrap h-tit-drop">
          {/* <!--
                      .h-drop-btn 클릭시 class="active" toggle.
                      sr-only의 텍스트도 열기/닫기로 변경 됨
                        --> */}
          <button
            type="button"
            class={`h-tit h-drop-btn ${mobileMenu && 'active'}`}
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            커뮤니티 멤버 관리<span class="sr-only">닫기</span>
          </button>
          <div class="drop-menu">
            <div class="drop-in">
              <ul class="drop-list">
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴1
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴2
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="item-link">
                    서브메뉴3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="contents_area">
          <h2 class="h-tit">H2 Title (댓글 or 답변)</h2>

          <div class="box_st4 answer_box">
            <article class="comment_bx">
              <h3 class="title">
                답변<span>{commentList?.length}</span>
              </h3>

              <div class="form">
                <form name="cmtForm" method="post" action="">
                  <fieldset>
                    <legend class="blind">등록</legend>
                    <ul class="assi">
                      <li>
                        <label for="frm1">닉네임</label>
                        <Input
                          name="frm1"
                          id="frm1"
                          title="닉네임을 입력해주세요."
                          placeholder="닉네임"
                        />
                      </li>
                      <li>
                        <label for="frm2">비밀번호</label>
                        <Input
                          name="frm2"
                          id="frm2"
                          title="비밀번호를 입력해주세요."
                          placeholder="비밀번호"
                        />
                      </li>
                    </ul>
                    <Textarea
                      class="textarea"
                      name=""
                      rows="4"
                      cols="76"
                      placeholder="내용을 입력해 주세요."
                    ></Textarea>
                    <Button as="button" color="1" text="등록" />
                  </fieldset>
                </form>
              </div>
            </article>
          </div>
          <article class="comment_bx mt_0">
            <CommentList commentList={commentList} />
          </article>
        </div>
      </div>
    </>
  );
}
