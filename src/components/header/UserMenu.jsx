import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../store/modules/user';

const UserMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeTogle = () => setIsActive(!isActive);


  const handleLogout = () => {
    dispatch(clearUser());
    navigate('/login');
  };

  return (
    <div className="drop-wrap my-drop">
      <button
        type="button"
        onClick={activeTogle}
        className={isActive ? "btn-navi navi-row my drop-btn active" : "btn-navi navi-row my drop-btn"}
      >
        <span>나의 서비스</span>
        <span className="sr-only">열기</span>
      </button>
      <div className="drop-menu" style={{ display: isActive ? 'block' : 'none' }}>
        <div className="drop-in">
          <div className="drop-top-info">
            <p className="my-name">{userInfo?.USER_NM || '사용자'}님</p>
            <p className="my-info">
              {userInfo?.INST_NM && <span>기관: {userInfo.INST_NM}</span>}<br />
              {userInfo?.DEPT_NM && <span>부서: {userInfo.DEPT_NM}</span>}
            </p>
            <dl className="my-time">
              <dt>로그아웃까지 남은 시간</dt>
              <dd>
                <span className="time">12:00</span>
                <button type="button" className="btn sm btn-txt">
                  시간 연장
                </button>
              </dd>
            </dl>
          </div>
          <ul className="drop-list">
            <li>
              <a href="#" className="item-link">
                나의 서비스 홈
              </a>
            </li>
          </ul>
          <div className="drop-btm-btn">
            <button
              type="button"
              className="btn sm btn-txt ico-log ico-before"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default UserMenu; 