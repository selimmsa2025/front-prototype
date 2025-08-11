import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import { Button, Tab, Popup } from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);

  const [contents, setContents] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  const getInitData = async () => {
    const response = await axios.get('/mockupServer/getType10Data.json', {});
    const { contents, favoriteCount, isFavorite } = response.data;

    setContents(contents);
    setFavoriteCount(favoriteCount);
    setIsFavorite(isFavorite);
  };
  const setFavorite = async () => {
    const response = await axios.get('/mockupServer/setFavorite.json', {});
    const { favoriteCount, isFavorite } = response.data;

    setFavoriteCount(favoriteCount);
    setIsFavorite(isFavorite);
  };

  useEffect(() => {
    getInitData();
  }, []);
  const toggleFavorite = () => {
    console.log('init', isFavorite);
    setFavorite();
  };

  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={''}
        closeButtonTitle={''}
        additionalButtonTitle={''}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        additionalButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'질의조회'}
      >
        <div class='box_st2 inquiry_view'>
          <strong class='tit'>행사관리</strong>
          <a
            href='#'
            class={`icon_txt1 heart ${isFavorite ? 'on' : ''} fr`}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(!isFavorite);
            }}
          >
            공감 <b>{favoriteCount}</b>
          </a>
          <div class='txt'>{contents}</div>
        </div>
      </CommonPopup>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <Button
          text={'팝업 열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
    </>
  );
}

export default App;
