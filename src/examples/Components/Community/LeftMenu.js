import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../Breadcrumb';
import { Input, Select, DatePicker, Check, Radio, Button } from '../Element';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Home from './Home';

export default function LeftMenu({ }) {
  const [noticeList, setNoticeList] = useState([]);
  const [newCommunityList, setNewCommunityList] = useState([]);
  const [manyMemberList, setManyMemberList] = useState([]);
  const [deleteRequestList, setDeleteRequestList] = useState([]);

  const getCommunityData = async () => {
    const response = await axios.get('/mockupServer/getCommunityData.json');
    setNoticeList(response.data.communityNotice || []);
    setNewCommunityList(response.data.newCommunity || []);
    setManyMemberList(response.data.manyMemberCommunity || []);
    setDeleteRequestList(response.data.deleteCommunityRequest || []);
  };

  useEffect(() => {
    getCommunityData();
  }, []);

  return (
    <>
      <div class='left-item'>
        <div class='item'>
          <h3 class='title'>커뮤니티 공지</h3>
          <ul class='list'>
            {noticeList.map((notice) => {
              return (
                <>
                  <li>
                    <Link href='javascript:void(0)'>
                      <p class='text'>{notice.title}</p>
                      <span class='date'>{notice.createdDate}</span>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <a href='javascript:void(0)' class='more'>
            더보기
          </a>
        </div>

        <div class='item'>
          <h3 class='title'>신규 커뮤니티</h3>
          <ul class='gallery'>
            {newCommunityList.map((data, index) => {
              return (
                <>
                  <li>
                    <Link href='javascript:void(0)'>
                      <i class='img'>
                        <img
                          src={`${!_.isEmpty(data.thumbnail)
                              ? data.thumbnail
                              : '../img/common/noimage_2.jpg'
                            }`}
                          alt=''
                        />
                      </i>
                      <div class='txt_bx'>
                        <strong class='tit'>{data.title}</strong>
                        <p class='text'>{data.contents}</p>
                        <div class='txt_object'>
                          <span class='txt'>
                            <b>리더</b> {data.leader}
                          </span>
                          <span class='txt'>
                            <b>멤버 수</b> {data.memberCnt}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <a href='javascript:void(0)' class='more'>
            더보기
          </a>
        </div>

        <div class='item'>
          <h3 class='title'>멤버가 많은 커뮤니티</h3>
          <ul class='gallery'>
            {manyMemberList.map((data) => {
              return (
                <>
                  <li>
                    <Link href='javascript:void(0)'>
                      <i class='img'>
                        <img
                          src={`${!_.isEmpty(data.thumbnail)
                              ? data.thumbnail
                              : '../img/common/noimage_2.jpg'
                            }`}
                          alt=''
                        />
                      </i>
                      <div class='txt_bx'>
                        <strong class='tit'>{data.title}</strong>
                        <p class='text'>{data.contents}</p>
                        <div class='txt_object'>
                          <span class='txt'>
                            <b>리더</b> {data.leader}
                          </span>
                          <span class='txt'>
                            <b>멤버 수</b> {data.memberCnt}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <a href='javascript:void(0)' class='more'>
            더보기
          </a>
        </div>

        <div class='item'>
          <h3 class='title'>커뮤니티 삭제 요청</h3>
          <ul class='list'>
            {deleteRequestList.map((req) => {
              return (
                <>
                  <li>
                    <Link href='javascript:void(0)'>
                      <p class='text'>{req.title}</p>
                      <span class='date'>{req.createdDate}</span>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <a href='javascript:void(0)' class='more'>
            더보기
          </a>
        </div>
      </div>
    </>
  );
}
