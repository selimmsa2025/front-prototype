import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import { QRCodeSVG } from 'qrcode.react';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Tab,
} from '../../Components/Element';

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600);
  const [qrcodeData, setQrcodeData] = useState('qrcodeDataHere');
  const recreateQrCode = () => {
    //test random qrcode data
    const qrcode = Math.floor(Math.random() * 1000000000) + '';

    setQrcodeData(qrcode);
    setTimeLeft(600);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <div id='login' class='login'>
        <span class='qr_img'>
          <QRCodeSVG value={qrcodeData} size={100} />
        </span>
        <h3 class='h-tit2'>모바일 공무원증 로그인</h3>
        <div class='text_area'>
          <p>
            {timeLeft == 0 ? (
              '인증시간이 만료되었습니다'
            ) : (
              <>
                인증 완료까지 <b class='point_color1'>{formatTime(timeLeft)}</b>
                초 남았습니다.
              </>
            )}
          </p>
          <div class='full_btn_box'>
            <button
              type='submit'
              class='btn1 type5 w100p'
              onClick={() => {
                recreateQrCode();
              }}
            >
              QR코드 재생성
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
