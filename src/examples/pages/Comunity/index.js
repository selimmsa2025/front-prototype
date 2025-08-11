import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb';
import { Tooltip } from 'react-tooltip';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../Components/Element';
import LeftMenu from '../../Components/Community/LeftMenu';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import MonthlyRank from '../../Components/Community/MonthlyRank';
import Home from '../../Components/Community/Home';
import MyCommunity from '../../Components/Community/MyCommunity';
import InstCommunity from '../../Components/Community/InstCommunity';

const Component = {
  home: <Home />,
  instCommunity: <InstCommunity />,
  myCommunity: <MyCommunity />,
};

export default function Comunity ({}) {
  const location = useLocation();
  const CurrentComponent = Component[location.pathname.split('community/')[1]];
  const navigate = useNavigate();
  useEffect(() => {
    if (CurrentComponent == undefined) {
      navigate('/fjdsivniwod');
    }
  });

  /**
   * 레이아웃에서 작성되야하는 비즈니스로직때문에 ex) 커뮤니티 찾기 등의 검색창. 왼쪽 메뉴 등.
   * 인덱스에서 레이아웃 분리함.
   */
  return (
    <>
      <div class='top_sch_total top'>
        <strong class='form_label'>커뮤니티 찾기</strong>
        <div class='bx'>
          <Input
            name='frm2'
            id='frm2'
            title='커뮤니티 이름을 입력해 주세요.'
            placeholder='커뮤니티 이름을 입력해 주세요.'
          />
          <Button
            id='communityHome'
            color='1'
            class='icon_lf'
            as='button'
            text=''
            onClick={() => {
              navigate('/community/home');
            }}
          >
            <i class='ri-search-line'></i>
            <span class='sr-only'>검색</span>
          </Button>
        </div>
      </div>

      <div class='inner in-between type_side type2'>
        {/* 왼쪽 메뉴 */}
        <LeftMenu />
        <div class='contents'>
          <div class='contents_area'>
            <div class='box_st4 commu_top clear'>
              <Select
                name='sel3'
                id='sel3'
                class='size_xmd'
                data={[
                  { id: 'all', name: '나의 커뮤니티 바로가기' },
                  { id: '1', name: '조건1' },
                  { id: '2', name: '조건2' },
                ]}
              />
              <div class='fr'>
                <Button
                  id='myCommunity'
                  as='a'
                  color='3'
                  text='커뮤니티 개설하기'
                  onClick={() => {
                    navigate('/community/myCommunity');
                  }}
                />
                <Button
                  id='instCommunity'
                  as='a'
                  color='3'
                  text='운영정책 바로가기'
                  onClick={() => {
                    navigate('/community/instCommunity');
                  }}
                />
              </div>
              <Tooltip
                anchorSelect='#myCommunity'
                content='나의커뮤니티'
                place='top'
                isOpen={true}
              />
              <Tooltip
                anchorSelect='#instCommunity'
                content='우리기관 커뮤니티'
                place='top'
                isOpen={true}
              />
              <Tooltip
                anchorSelect='#communityHome'
                content='커뮤니티 홈'
                place='top'
                isOpen={true}
              />
            </div>
            {/* url 경로에 따라 Home, MyCommunity, InstCommunity  */}
            {CurrentComponent}
          </div>
        </div>
      </div>
    </>
  );
}
