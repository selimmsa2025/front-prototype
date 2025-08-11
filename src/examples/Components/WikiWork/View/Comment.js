import { Button, Textarea } from '../../Element';

export default function Comment ({ commentList }) {
  return (
    <>
      <article class='comment_bx'>
        <h3 class='title'>
          댓글<span>(2)</span>
        </h3>

        <div class='form'>
          <form name='cmtForm' method='post' action=''>
            <fieldset>
              <legend class='blind'>등록</legend>
              <Textarea
                class='textarea'
                name=''
                rows='4'
                cols='76'
                placeholder='내용을 입력해 주세요.'
              />
              <Button as='button' color='1' text='등록' />
            </fieldset>
          </form>
        </div>

        <div class='list' id=''>
          <ul>
            {commentList?.map((v, i) => {
              return (
                <>
                  <li id={`cmt${i}`}>
                    <div class='comment'>
                      <i class='img'>
                        <img src='' alt='' />
                      </i>
                      <span class='name'>{v.userId}</span>
                      <span class='text'>{v.depart}</span>
                      <span class='text date'>{v.createDate}</span>
                      <p id='' class='txt'>
                        {v.text}
                      </p>
                      <div class='right'>
                        <Button as='a' color='2' class='type2' text='삭제' />
                        <Button as='a' color='4' class='type2' text='수정' />
                        <Button as='a' color='4' class='type2' text='답변' />
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </article>
    </>
  );
}
