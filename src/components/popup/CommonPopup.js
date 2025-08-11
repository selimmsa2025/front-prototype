import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Draggable from 'react-draggable';
import { Button, Tab } from '../element';
function App ({
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
  popupWdthLen,
  popupVrtcLen,
  draggable = false,
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

  useEffect(() => {
    if (popupRef.current && size === 'write') {
      popupRef.current.style.setProperty('max-width', `${popupWdthLen}rem`, 'important');
      popupRef.current.style.setProperty('width', `${popupWdthLen}rem`, 'important');
      popupRef.current.style.setProperty('max-height', `${popupVrtcLen}rem`, 'important');
      popupRef.current.style.setProperty('height', `${popupVrtcLen}rem`, 'important');
    }
  }, [size, popupWdthLen, popupVrtcLen]);

  if (showPopup) {
    return createPortal(
      <>
        <div className='popup active'>
          <div
            tabIndex='0'
            onKeyDown={(event) => {
              if (event.key === 'Tab' && event.shiftKey) {
                popupCloseRef.current.focus();
              }
            }}
          ></div>
        {
          draggable? (
        <>
          <Draggable >                
          <article
            className={
              size == 'large' ? 'size_lg' : size == 'middle' ? 'size_md' : size == 'xlarge' ? 'size_xlg' : ''
            }
            ref={popupRef}
            style={size==='write'?{}:{}} 
            tabIndex='0'
          >
            {showSubTitle && <h2 className='point_color1'>{subTitle}</h2>}
            {showTitle && title ? (
              <>
                {typeof title == 'string' && <h2>{title}</h2>}
                {typeof title == 'function' && title()}
              </>
            ) : null}
            <div className='pop_content'>
              {children}
            </div>
            {saveButtonTitle || closeButtonTitle || additionalButtonTitle ? (
                <>
                  <div className='sm_btn_box fl'>
                    {deleteButtonTitle ? (
                      <Button
                        as='a'
                        color='4'
                        className='type3'
                        onClick={(e) => {
                          e.preventDefault();
                          deleteButtonOnClick?.();
                        }}
                      >{deleteButtonTitle}</Button>
                    ) : null}{' '}
                  </div>
                  <div className='sm_btn_box fr'>
                    {closeButtonTitle ? (
                      <Button
                        as='a'
                        color={closeButtonTitle && deleteButtonTitle ? 3 : 4}
                        className='type1'
                        onClick={(e) => {
                          e.preventDefault();
                          closeButtonOnClick?.();
                        }}
                      >{closeButtonTitle}</Button>
                    ) : null}
                    {additionalButtonTitle ? (
                      <Button
                        as='a'
                        color='3'
                        className='type3'
                        onClick={(e) => {
                          e.preventDefault();
                          additionalButtonOnClick?.();
                        }}
                      >{additionalButtonTitle}</Button>
                    ) : null}
                    {saveButtonTitle ? (
                      <Button
                        as='a'
                        color='1'
                        className='type3'
                        onClick={(e) => {
                          e.preventDefault();
                          saveButtonOnClick?.();
                        }}
                      >{saveButtonTitle}</Button>
                    ) : null}
                  </div>
                </>
              ) : null}
            <a
              href="/"
              className='close_btn'
              onClick={(e) => {
                e.preventDefault();
                onClose?.();
              }}
            >
              <span className='sr-only' ref={popupCloseRef}>
                팝업 닫기
              </span>
            </a>
          </article>
          </Draggable>
        </>

      ):(
        <article
          className={
            size == 'large' ? 'size_lg' : size == 'middle' ? 'size_md' : size == 'xlarge' ? 'size_xlg' : ''
          }
          ref={popupRef}
          style={size==='write'?{}:{}} 
          tabIndex='0'
        >
          {showSubTitle && <h2 className='point_color1'>{subTitle}</h2>}
          {showTitle && title ? (
            <>
              {typeof title == 'string' && <h2>{title}</h2>}
              {typeof title == 'function' && title()}
            </>
          ) : null}
          <div className='pop_content'>
            {children}
          </div>
          {saveButtonTitle || closeButtonTitle || additionalButtonTitle ? (
              <>
                <div className='sm_btn_box fl'>
                  {deleteButtonTitle ? (
                    <Button
                      as='a'
                      color='4'
                      className='type3'
                      onClick={(e) => {
                        e.preventDefault();
                        deleteButtonOnClick?.();
                      }}
                    >{deleteButtonTitle}</Button>
                  ) : null}{' '}
                </div>
                <div className='sm_btn_box fr'>
                  {closeButtonTitle ? (
                    <Button
                      as='a'
                      color={closeButtonTitle && deleteButtonTitle ? 3 : 4}
                      className='type1'
                      onClick={(e) => {
                        e.preventDefault();
                        closeButtonOnClick?.();
                      }}
                    >{closeButtonTitle}</Button>
                  ) : null}
                  {additionalButtonTitle ? (
                    <Button
                      as='a'
                      color='3'
                      className='type3'
                      onClick={(e) => {
                        e.preventDefault();
                        additionalButtonOnClick?.();
                      }}
                    >{additionalButtonTitle}</Button>
                  ) : null}
                  {saveButtonTitle ? (
                    <Button
                      as='a'
                      color='1'
                      className='type3'
                      onClick={(e) => {
                        e.preventDefault();
                        saveButtonOnClick?.();
                      }}
                    >{saveButtonTitle}</Button>
                  ) : null}
                </div>
              </>
            ) : null}
          <a
            href="/"
            className='close_btn'
            onClick={(e) => {
              e.preventDefault();
              onClose?.();
            }}
          >
            <span className='sr-only' ref={popupCloseRef}>
              팝업 닫기
            </span>
          </a>
        </article>
        )
        }
          <div
            tabIndex='0'
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
