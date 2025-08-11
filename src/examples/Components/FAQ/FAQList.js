import { useState, useEffect } from 'react';
import { Button } from '../Element';

export default function FAQList ({ dataList }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <div class='board_list'>
        <ul class='faq'>
          {dataList?.map((v, i) => {
            return (
              <>
                <li key={v.id} class={`${openItem == i ? 'active' : ''}`}>
                  <button
                    type='button'
                    class='question'
                    onClick={() => {
                      setOpenItem(openItem == i ? null : i);
                    }}
                  >
                    {v.question}
                  </button>
                  {/* !-- 클릭시 분모 <li>에 class="active" 추가 --> */}
                  <div class='box clear'>
                    <p class='answer'>{v.answer}</p>
                    <div class='fr'>
                      <Button as='a' color='4' class='type2' text='수정하기' />
                      <Button as='a' color='4' class='type2' text='삭제하기' />
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
