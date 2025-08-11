import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../element';

export default function Error({
  title = "현재 찾을 수 없는 페이지를 요청하셨습니다.",
  message = "존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경 및 삭제되어 찾을 수 없습니다.",
  buttons = [
    { text: "메인으로 이동", color: '4', href: '/' },
    { text: "이전 페이지", color: '1', href: -1 },
  ]
}) {
  const navigate = useNavigate();

  return (
    <div className="error_wrap">
      <div className="error_page">
        <i>
          <img src='../img/common/error_page.png' alt="에러 페이지 이미지" />
        </i>
        <h2 className="tit">
          {title}
        </h2>
        <p className="text">
          {message}
        </p>
        <div className="center_btn_area">
          {buttons.map((button, index) => (
            <Button
              key={index}
              as="a"
              color={button.color}
              text={button.text}
              onClick={(e) => navigate(button.href)}
              className="type1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Error.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  )
};
