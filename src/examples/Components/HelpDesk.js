import { useState } from 'react';

export default function HelpDesk () {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className={`helpdesk ${open ? 'active' : ''}`}>
        {/* <!-- 스크립트로 footer에 닿지않도록 sticky 효과 필요합니다. --> 무슨뜻*/}
        <h2 className='sr-only'>헬프데스크</h2>
        <a
          href="/"
          className='icon'
          onClick={() => setOpen(!open)}
        >
          <span className='sr-only'>헬프데스크 정보 보기</span>
        </a>
        <div className='dobble'>
          <ul className='list'>
            <li>
              <strong>헬프데스크</strong>
              <p>02-6006-5005</p>
            </li>
            <li>
              <strong>통합계정관리(계정 오류시)</strong>
              <p>02-6954-2720</p>
            </li>
          </ul>
          <a
            href="/"
            className='close'
            onClick={() => setOpen(!open)}
          >
            <span className='sr-only'>닫기</span>
          </a>
        </div>
      </article>
    </>
  );
}
