import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from './Breadcrumb';
import { Button, Tab } from './Element';
import Draggable from 'react-draggable';
function App({
  showPopup = false,
  size,
  title,
  onClose,
  saveButtonTitle = '',
  deleteButtonTitle = '',
  closeButtonTitle = '',
  additionalButtonTitle = '',
  saveButtonOnClick,
  deleteButtonOnClick,
  closeButtonOnClick,
  additionalButtonOnClick,
  children,
  showTitle = true,
  showSubTitle = false,
  subTitle = '',
  draggable = false
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const popupCloseRef = useRef(null);
  const [prevFocus, setPrevFocus] = useState();
  useEffect(() => {
    const wrap = document.getElementById('wrap');
    wrap.addEventListener('focusin', (event) => {
      setPrevFocus(event.target);
    });
    if (showPopup) {
      popupRef?.current?.focus();
    } else {
      if (prevFocus) {
        prevFocus.focus();
      }
    }
  }, [showPopup]);

  if (showPopup) {
    return createPortal(
      <>
        <div className='popup active'>
          <div
            tabindex='0'
            onKeyDown={(event) => {
              if (event.key === 'Tab' && event.shiftKey) {
                popupCloseRef.current.focus();
              }
            }}
          ></div>
          {
            draggable ? (
              <>
                <Draggable >
                  <article
                    className={
                      size == 'large' ? 'size_lg' : size == 'middle' ? 'size_md' : ''
                    }
                    ref={popupRef}
                    tabindex='0'
                  >
                    {showSubTitle && <h2 class='point_color1'>{subTitle}</h2>}
                    {showTitle && title ? (
                      <>
                        {typeof title == 'string' && <h3>{title}</h3>}
                        {typeof title == 'function' && title()}
                      </>
                    ) : null}
                    <div className='pop_content'>
                      {children}
                      {saveButtonTitle || closeButtonTitle || additionalButtonTitle ? (
                        <>
                          <div className='sm_btn_box fl'>
                            {deleteButtonTitle ? (
                              <Button
                                as='a'
                                color='4'
                                class='type3'
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteButtonOnClick?.();
                                }}
                                text={deleteButtonTitle}
                              ></Button>
                            ) : null}{' '}
                          </div>
                          <div className='sm_btn_box fr'>
                            {closeButtonTitle ? (
                              <Button
                                as='a'
                                color={closeButtonTitle && deleteButtonTitle ? 3 : 4}
                                class='type1'
                                onClick={(e) => {
                                  e.preventDefault();
                                  closeButtonOnClick?.();
                                }}
                                text={closeButtonTitle}
                              ></Button>
                            ) : null}
                            {saveButtonTitle ? (
                              <Button
                                as='a'
                                color='1'
                                class='type3'
                                onClick={(e) => {
                                  e.preventDefault();
                                  saveButtonOnClick?.();
                                }}
                                text={saveButtonTitle}
                              ></Button>
                            ) : null}{' '}
                            {additionalButtonTitle ? (
                              <Button
                                as='a'
                                color='2'
                                class='type3'
                                onClick={(e) => {
                                  e.preventDefault();
                                  additionalButtonOnClick?.();
                                }}
                                text={additionalButtonTitle}
                              ></Button>
                            ) : null}
                          </div>
                        </>
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
                      <span className='sr-only' ref={popupCloseRef} tabindex='0'>
                        팝업 닫기
                      </span>
                    </a>
                  </article>
                </Draggable>
              </>
            ) : (
              <>
                <article
                  className={
                    size == 'large' ? 'size_lg' : size == 'middle' ? 'size_md' : ''
                  }
                  ref={popupRef}
                  tabindex='0'
                >
                  {showSubTitle && <h2 class='point_color1'>{subTitle}</h2>}
                  {showTitle && title ? (
                    <>
                      {typeof title == 'string' && <h3>{title}</h3>}
                      {typeof title == 'function' && title()}
                    </>
                  ) : null}
                  <div className='pop_content'>
                    {children}
                    {saveButtonTitle || closeButtonTitle || additionalButtonTitle ? (
                      <>
                        <div className='sm_btn_box fl'>
                          {deleteButtonTitle ? (
                            <Button
                              as='a'
                              color='4'
                              class='type3'
                              onClick={(e) => {
                                e.preventDefault();
                                deleteButtonOnClick?.();
                              }}
                              text={deleteButtonTitle}
                            ></Button>
                          ) : null}{' '}
                        </div>
                        <div className='sm_btn_box fr'>
                          {closeButtonTitle ? (
                            <Button
                              as='a'
                              color={closeButtonTitle && deleteButtonTitle ? 3 : 4}
                              class='type1'
                              onClick={(e) => {
                                e.preventDefault();
                                closeButtonOnClick?.();
                              }}
                              text={closeButtonTitle}
                            ></Button>
                          ) : null}
                          {saveButtonTitle ? (
                            <Button
                              as='a'
                              color='1'
                              class='type3'
                              onClick={(e) => {
                                e.preventDefault();
                                saveButtonOnClick?.();
                              }}
                              text={saveButtonTitle}
                            ></Button>
                          ) : null}{' '}
                          {additionalButtonTitle ? (
                            <Button
                              as='a'
                              color='2'
                              class='type3'
                              onClick={(e) => {
                                e.preventDefault();
                                additionalButtonOnClick?.();
                              }}
                              text={additionalButtonTitle}
                            ></Button>
                          ) : null}
                        </div>
                      </>
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
                    <span className='sr-only' ref={popupCloseRef} tabindex='0'>
                      팝업 닫기
                    </span>
                  </a>
                </article>
              </>
            )
          }
          <div
            tabindex='0'
            onKeyDown={(event) => {
              if (event.key === 'Tab') {
                popupRef.current.focus();
              }
            }}
          ></div>
        </div>
      </>,
      document.body,
    );
  }
}

export default App;
