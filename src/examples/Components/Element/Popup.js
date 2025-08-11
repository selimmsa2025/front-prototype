import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import { Button, Tab } from '../../Components/Element';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (showPopup) {
    return createPortal(
      <>
        <div class='popup active'>
          <article>
            <h2>{title}</h2>
            <div class='pop_content'>
              {subTitle ? <h3>{subTitle}</h3> : null}
              <p class='desc2'>{contents}</p>
              <div class='sm_btn_box fr'>
                {leftButtonTitle ? (
                  <Button
                    as='a'
                    color='4'
                    class='type3'
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
                    class='type3'
                    onClick={(e) => {
                      e.preventDefault();
                      rightButtonOnClick?.();
                    }}
                    text='확인'
                  ></Button>
                ) : null}
              </div>
            </div>
            <a
              href='javascript:void(0)'
              class='close_btn'
              onClick={(e) => {
                e.preventDefault();
                onClose?.();
              }}
            >
              <span class='sr-only'>팝업 닫기</span>
            </a>
          </article>
        </div>
      </>,
      document.body,
    );
  }
}

export default App;
