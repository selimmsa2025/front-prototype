import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'components/element';
function App ({
  showPopup = false,
  title,
  subTitle,
  contents,
  onClose,
  leftButtonTitle = '취소',
  rightButtonTitle = '확인',
  leftButtonOnClick,
  rightButtonOnClick,
}) {

  if (showPopup) {
    return createPortal(
      <>
        <div className='popup active'>
          <article>
            <h2>{title}</h2>
            <div className='pop_content'>
              {subTitle ? <h3>{subTitle}</h3> : null}
              <p className='desc2'>{contents}</p>
            </div>
              <div className='sm_btn_box fr'>
                {leftButtonTitle ? (
                  <Button
                    as='a'
                    color='4'
                    className='type3'
                    onClick={(e) => {
                      e.preventDefault();
                      leftButtonOnClick?.();
                    }}
                    text='취소'
                  ></Button>
                ) : null}{' '}
                {rightButtonTitle ? (
                  <Button
                    as='a'
                    color='2'
                    className='type3'
                    onClick={(e) => {
                      e.preventDefault();
                      rightButtonOnClick?.();
                    }}
                    text='확인'
                  ></Button>
                ) : null}
              </div>
            <a
              href='javascript:void(0)'
              className='close_btn'
              onClick={(e) => {
                e.preventDefault();
                onClose?.();
              }}
            >
              <span className='sr-only'>팝업 닫기</span>
            </a>
          </article>
        </div>
      </>,
      document.body,
    );
  }
}

export default App;
