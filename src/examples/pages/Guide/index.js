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
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
} from '../../Components/Element';

function App () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb />

      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>가이드</h2>
      </div>

      <div class='contents_area'>
        <div class='box_st2 mt_0'>
          <h4 class='h-tit3'>가이드 인덱스</h4>
          <ol class='guide_list'>
            <li>
              <a href='#guide1' title='하단으로 이동'>
                텍스트
              </a>
            </li>
            <li>
              <a href='#guide2' title='하단으로 이동'>
                버튼
              </a>
            </li>
            <li>
              <a href='#guide3' title='하단으로 이동'>
                정렬
              </a>
            </li>
            <li>
              <a href='#guide4' title='하단으로 이동'>
                select 최대 너비
              </a>
            </li>
            <li>
              <a href='#guide5' title='하단으로 이동'>
                input 최대 너비
              </a>
            </li>
            <li>
              <a href='#guide6' title='하단으로 이동'>
                textarea 높이
              </a>
            </li>
            <li>
              <a href='#guide7' title='하단으로 이동'>
                margin 지정값
              </a>
            </li>
            <li>
              <a href='#guide8' title='하단으로 이동'>
                padding 지정값
              </a>
            </li>
            <li>
              <a href='#guide9' title='하단으로 이동'>
                width 지정값(%)
              </a>
            </li>
            <li>
              <a href='#guide10' title='하단으로 이동'>
                display 지정값
              </a>
            </li>
          </ol>
        </div>

        <div class='pt_40' id='guide1'>
          <h2 class='h-tit2'>텍스트</h2>
          <h4 class='h-tit4 mt_20'>기본 텍스트</h4>
          <div class='board_list'>
            <table class='tstyle_view'>
              <caption>텍스트 리스트</caption>
              <colgroup>
                <col style={{ width: '40%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col'>Style</th>
                  <th scope='col'>클래스명</th>
                  <th scope='col'>사이즈</th>
                  <th scope='col'>컬러</th>
                  <th scope='col'>굵기</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h2 class='h-tit2'>상단 타이틀입니다.</h2>
                  </td>
                  <td>class="h-tit2"</td>
                  <td>24px</td>
                  <td>#1D1D1D</td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>
                    <h3 class='h-tit3'>테이블 타이틀입니다.</h3>
                  </td>
                  <td>class="h-tit3"</td>
                  <td>20px</td>
                  <td>#1D1D1D</td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>
                    <h3 class='h-tit4'>기본 타이틀입니다.</h3>
                  </td>
                  <td>class="h-tit4"</td>
                  <td>17px</td>
                  <td>#1D1D1D</td>
                  <td>Bold</td>
                </tr>
                <tr>
                  <td>
                    <p class='desc1'>기본 설명글입니다.</p>
                  </td>
                  <td>class="desc1"</td>
                  <td>14px</td>
                  <td>#555</td>
                  <td>Bold/Regular</td>
                </tr>
                <tr>
                  <td>
                    <p class='desc2'>기본 설명글입니다.</p>
                  </td>
                  <td>class="desc2"</td>
                  <td>16px</td>
                  <td>#555</td>
                  <td>Bold/Regular</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 class='h-tit4 mt_20'>font-size 지정값</h4>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>font-size 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>font-size:10px</th>
                  <td>class="fs10"</td>
                  <th scope='row'>font-size:11px</th>
                  <td>class="fs11"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:12px</th>
                  <td>class="fs12"</td>
                  <th scope='row'>font-size:13px</th>
                  <td>class="fs13"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:14px</th>
                  <td>class="fs14"</td>
                  <th scope='row'>font-size:15px</th>
                  <td>class="fs15"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:16px</th>
                  <td>class="fs16"</td>
                  <th scope='row'>font-size:17px</th>
                  <td>class="fs17"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:18px</th>
                  <td>class="fs18"</td>
                  <th scope='row'>font-size:19px</th>
                  <td>class="fs19"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:20px</th>
                  <td>class="fs20"</td>
                  <th scope='row'>font-size:21px</th>
                  <td>class="fs21"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:22px</th>
                  <td>class="fs22"</td>
                  <th scope='row'>font-size:23px</th>
                  <td>class="fs23"</td>
                </tr>
                <tr>
                  <th scope='row'>font-size:24px</th>
                  <td>class="fs24"</td>
                  <th scope='row'>font-size:25px</th>
                  <td>class="fs25"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 class='h-tit4 mt_20'>font-color 지정값</h4>
          <ul class='blist_area item3'>
            <li>
              <div class='object'>
                <p class='point_color1'>color:#246BEB</p>
              </div>
              <p class='txt'>class="point_color1"</p>
            </li>
            <li>
              <div class='object'>
                <p class='point_color2'>color:#003675</p>
              </div>
              <p class='txt'>class="point_color2"</p>
            </li>
            <li>
              <div class='object'>
                <p class='point_color3'>color:#FFB724</p>
              </div>
              <p class='txt'>class="point_color3"</p>
            </li>
            <li>
              <div class='object'>
                <p class='point_color4'>color:#008A1E</p>
              </div>
              <p class='txt'>class="point_color4"</p>
            </li>
            <li>
              <div class='object'>
                <p class='point_color5'>color:#EB003B</p>
              </div>
              <p class='txt'>class="point_color5"</p>
            </li>
          </ul>
        </div>

        <div class='pt_40' id='guide2'>
          <h2 class='h-tit2'>버튼</h2>

          <ul class='blist_area item4'>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1 type1'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn1 type1"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2 type1'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn2 type1"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3 type1'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn3 type1"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4 type1'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn4 type1"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1 type5'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn1 type5"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2 type5'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn2 type5"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3 type5'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn3 type5"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4 type5'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn4 type5"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1 type4'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn1 type4"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2 type4'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn2 type4"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3 type4'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn3 type4"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4 type4'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn4 type4"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn1"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn2"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn3"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn4"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1 type2'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn1 type2"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2 type2'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn2 type2"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3 type2'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn3 type2"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4 type2'>
                  버튼
                </a>
              </div>
              <p class='txt'>class="btn4 type2"</p>
            </li>

            <li>
              <div class='object'>
                <button type='button' class='btn2 sch'>
                  검색
                </button>
              </div>
              <p class='txt'>class="btn2 sch"</p>
            </li>
            <li>
              <div class='object'>
                <button type='button' class='btn2 sch size_md'>
                  검색
                </button>
              </div>
              <p class='txt'>class="btn2 sch size_md"</p>
            </li>
            <li>
              <div class='object'>
                <button type='button' class='btn4 sch'>
                  초기화
                </button>
              </div>
              <p class='txt'>class="btn4 sch"</p>
            </li>
            <li>
              <div class='object'>
                <button type='button' class='btn4 sch size_md'>
                  초기화
                </button>
              </div>
              <p class='txt'>class="btn4 sch size_md"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1' title='다운로드'>
                  다운로드
                </a>
              </div>
              <p class='txt'>class="btn1" title="다운로드"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2' title='다운로드'>
                  다운로드
                </a>
              </div>
              <p class='txt'>class="btn2" title="다운로드"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3' title='다운로드'>
                  다운로드
                </a>
              </div>
              <p class='txt'>class="btn3" title="다운로드"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4' title='다운로드'>
                  다운로드
                </a>
              </div>
              <p class='txt'>class="btn4" title="다운로드"</p>
            </li>

            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn1' title='새창열림'>
                  새창열림
                </a>
              </div>
              <p class='txt'>class="btn1" title="새창열림"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn2' title='새창열림'>
                  새창열림
                </a>
              </div>
              <p class='txt'>class="btn2" title="새창열림"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn3' title='새창열림'>
                  새창열림
                </a>
              </div>
              <p class='txt'>class="btn3" title="새창열림"</p>
            </li>
            <li>
              <div class='object'>
                <a href='javascript:void(0)' class='btn4' title='새창열림'>
                  새창열림
                </a>
              </div>
              <p class='txt'>class="btn4" title="새창열림"</p>
            </li>

            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 mail'>
                  메일
                </a>
              </div>
              <p class='txt'>class="icon_txt1 mail"</p>
            </li>
            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 print'>
                  프린트
                </a>
              </div>
              <p class='txt'>class="icon_txt1 print"</p>
            </li>
            <li>
              <div class='object'>
                <a
                  href='#'
                  class='icon_txt1 download'
                  download='download'
                  title='다운로드'
                >
                  다운로드
                </a>
              </div>
              <p class='txt'>class="icon_txt1 download" title="다운로드"</p>
            </li>
            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 bookmark'>
                  북마크 추가
                </a>
              </div>
              <p class='txt'>class="icon_txt1 bookmark"</p>
            </li>

            <li>
              <div class='object'>
                <a
                  href='#'
                  class='icon_txt1 window'
                  title='새창열림'
                  target='_blank'
                >
                  새창
                </a>
              </div>
              <p class='txt'>class="icon_txt1 window" title="새창열림"</p>
            </li>
            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 heart'>
                  공감 <b>2</b>
                </a>
              </div>
              <p class='txt'>class="icon_txt1 heart"</p>
            </li>
            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 heart on'>
                  공감 (클릭시) <b>2</b>
                </a>
              </div>
              <p class='txt'>class="icon_txt1 heart on"</p>
            </li>
            <li>
              <div class='object'>
                <a href='#' class='icon_txt1 share'>
                  공유하기
                </a>
              </div>
              <p class='txt'>class="icon_txt1 share"</p>
            </li>
          </ul>
        </div>

        <div class='pt_40' id='guide3'>
          <h2 class='h-tit2'>정렬</h2>
          <h4 class='h-tit4 mt_20'>정렬 지정값</h4>

          <ul class='blist_area item3'>
            <li>
              <div class='object'>
                <p class='txt_left'>텍스트 좌측 정렬</p>
              </div>
              <p class='txt'>class="txt_left"</p>
            </li>
            <li>
              <div class='object'>
                <p class='txt_center'>텍스트 가운데 정렬</p>
              </div>
              <p class='txt'>class="txt_center"</p>
            </li>
            <li>
              <div class='object'>
                <p class='txt_right'>텍스트 우측 정렬</p>
              </div>
              <p class='txt'>class="txt_right"</p>
            </li>
          </ul>

          <h4 class='h-tit4 mt_20'>float 지정값</h4>
          <ul class='blist_area item2'>
            <li>
              <div class='object clear'>
                <div class='fl'>
                  <a href='javascript:void(0)' class='btn4 type1'>
                    float 좌측정렬
                  </a>
                </div>
              </div>
              <p class='txt'>class="fl"</p>
            </li>
            <li>
              <div class='object clear'>
                <div class='fr'>
                  <a href='javascript:void(0)' class='btn4 type1'>
                    float 우측정렬
                  </a>
                </div>
              </div>
              <p class='txt'>class="fr"</p>
            </li>
          </ul>
          <p class='desc3'>
            * float 정렬시 분모에 class="clear" 추가 되어야합니다.
          </p>
        </div>

        <div class='pt_40' id='guide4'>
          <h2 class='h-tit2'>select 최대 너비</h2>

          <ul class='blist_area item2'>
            <li>
              <div class='object'>
                <select
                  name='sel0'
                  id='sel0'
                  class='form_sel size_msm'
                  title='조건을 선택하세요.'
                >
                  <option value='all'>100px</option>
                  <option value='1'>조건1</option>
                  <option value='2'>조건2</option>
                </select>
              </div>
              <p class='txt'>class="form_sel size_msm"</p>
            </li>
            <li>
              <div class='object'>
                <select
                  name='sel1'
                  id='sel1'
                  class='form_sel size_sm'
                  title='조건을 선택하세요.'
                >
                  <option value='all'>150px</option>
                  <option value='1'>조건1</option>
                  <option value='2'>조건2</option>
                </select>
              </div>
              <p class='txt'>class="form_sel size_sm"</p>
            </li>
            <li>
              <div class='object'>
                <select
                  name='sel2'
                  id='sel2'
                  class='form_sel size_xmd'
                  title='조건을 선택하세요.'
                >
                  <option value='all'>240px</option>
                  <option value='1'>조건1</option>
                  <option value='2'>조건2</option>
                </select>
              </div>
              <p class='txt'>class="form_sel size_xmd"</p>
            </li>
            <li>
              <div class='object'>
                <select
                  name='sel3'
                  id='sel3'
                  class='form_sel size_md'
                  title='조건을 선택하세요.'
                >
                  <option value='all'>560px</option>
                  <option value='1'>조건1</option>
                  <option value='2'>조건2</option>
                </select>
              </div>
              <p class='txt'>class="form_sel size_md"</p>
            </li>
          </ul>
        </div>

        <div class='pt_40' id='guide5'>
          <h2 class='h-tit2'>input 최대 너비</h2>

          <ul class='blist_area item2'>
            <li>
              <div class='object'>
                <input
                  type='text'
                  class='form_text size_xsm'
                  name='frm0_0'
                  id='frm0_0'
                  title='텍스트를 입력해주세요.'
                  placeholder='입력해주세요.'
                  value='60px'
                />
              </div>
              <p class='txt'>class="form_sel size_xsm"</p>
            </li>
            <li>
              <div class='object'>
                <input
                  type='text'
                  class='form_text size_msm'
                  name='frm0_1'
                  id='frm0_1'
                  title='텍스트를 입력해주세요.'
                  placeholder='입력해주세요.'
                  value='100px'
                />
              </div>
              <p class='txt'>class="form_sel size_msm"</p>
            </li>
            <li>
              <div class='object'>
                <input
                  type='text'
                  class='form_text size_sm'
                  name='frm0_2'
                  id='frm0_2'
                  title='텍스트를 입력해주세요.'
                  placeholder='입력해주세요.'
                  value='150px'
                />
              </div>
              <p class='txt'>class="form_sel size_sm"</p>
            </li>
            <li>
              <div class='object'>
                <input
                  type='text'
                  class='form_text size_xmd'
                  name='frm0_3'
                  id='frm0_3'
                  title='텍스트를 입력해주세요.'
                  placeholder='입력해주세요.'
                  value='240px'
                />
              </div>
              <p class='txt'>class="form_sel size_xmd"</p>
            </li>
            <li>
              <div class='object'>
                <input
                  type='text'
                  class='form_text size_md'
                  name='frm0_4'
                  id='frm0_4'
                  title='텍스트를 입력해주세요.'
                  placeholder='입력해주세요.'
                  value='560px'
                />
              </div>
              <p class='txt'>class="form_sel size_md"</p>
            </li>
          </ul>
        </div>

        <div class='pt_40' id='guide6'>
          <h2 class='h-tit2'>textarea 높이</h2>
          <ul class='blist_area item3'>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h50'>
                  높이 50px
                </textarea>
              </div>
              <p class='txt'>class="textarea h50"</p>
            </li>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h78'>
                  높이 78px
                </textarea>
              </div>
              <p class='txt'>class="textarea h78"</p>
            </li>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h100'>
                  높이 100px
                </textarea>
              </div>
              <p class='txt'>class="textarea h100"</p>
            </li>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h150'>
                  높이 150px
                </textarea>
              </div>
              <p class='txt'>class="textarea h150"</p>
            </li>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h250'>
                  높이 250px
                </textarea>
              </div>
              <p class='txt'>class="textarea h250"</p>
            </li>
            <li>
              <div class='object'>
                <textarea name='' id='' class='textarea h300'>
                  높이 300px
                </textarea>
              </div>
              <p class='txt'>class="textarea h300"</p>
            </li>
          </ul>
        </div>

        <div class='pt_40' id='guide7'>
          <h2 class='h-tit2'>margin 지정값</h2>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>margin 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>margin 초기화</th>
                  <td colspan='3'>class="m0"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-right:auto</th>
                  <td>class="mr_auto"</td>
                  <th scope='row'>margin-left:auto</th>
                  <td>class="ml_auto"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>margin top 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>margin-top:0px</th>
                  <td>class="mt_0"</td>
                  <th scope='row'>margin-top:5px</th>
                  <td>class="mt_5"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-top:10px</th>
                  <td>class="mt_10"</td>
                  <th scope='row'>margin-top:15px</th>
                  <td>class="mt_15"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-top:20px</th>
                  <td>class="mt_20"</td>
                  <th scope='row'>margin-top:25px</th>
                  <td>class="mt_25"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-top:30px</th>
                  <td>class="mt_30"</td>
                  <th scope='row'>margin-top:35px</th>
                  <td>class="mt_35"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-top:40px</th>
                  <td colspan='3'>class="mt_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>margin bottom 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>margin-bottom:0px</th>
                  <td>class="mb_0"</td>
                  <th scope='row'>margin-bottom:5px</th>
                  <td>class="mb_5"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-bottom:10px</th>
                  <td>class="mb_10"</td>
                  <th scope='row'>margin-bottom:15px</th>
                  <td>class="mb_15"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-bottom:20px</th>
                  <td>class="mb_20"</td>
                  <th scope='row'>margin-bottom:25px</th>
                  <td>class="mb_25"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-bottom:30px</th>
                  <td>class="mb_30"</td>
                  <th scope='row'>margin-bottom:35px</th>
                  <td>class="mb_35"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-bottom:40px</th>
                  <td colspan='3'>class="mb_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>margin left 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>margin-left:0px</th>
                  <td>class="ml_0"</td>
                  <th scope='row'>margin-left:5px</th>
                  <td>class="ml_5"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-left:10px</th>
                  <td>class="ml_10"</td>
                  <th scope='row'>margin-left:15px</th>
                  <td>class="ml_15"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-left:20px</th>
                  <td>class="ml_20"</td>
                  <th scope='row'>margin-left:25px</th>
                  <td>class="ml_25"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-left:30px</th>
                  <td>class="ml_30"</td>
                  <th scope='row'>margin-left:35px</th>
                  <td>class="ml_35"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-left:40px</th>
                  <td colspan='3'>class="ml_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>margin right 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>margin-right:0px</th>
                  <td>class="mr_0"</td>
                  <th scope='row'>margin-right:5px</th>
                  <td>class="mr_5"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-right:10px</th>
                  <td>class="mr_10"</td>
                  <th scope='row'>margin-right:15px</th>
                  <td>class="mr_15"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-right:20px</th>
                  <td>class="mr_20"</td>
                  <th scope='row'>margin-right:25px</th>
                  <td>class="mr_25"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-right:30px</th>
                  <td>class="mr_30"</td>
                  <th scope='row'>margin-right:35px</th>
                  <td>class="mr_35"</td>
                </tr>
                <tr>
                  <th scope='row'>margin-right:30px</th>
                  <td colspan='3'>class="mr_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class='pt_40' id='guide8'>
          <h2 class='h-tit2'>padding 지정값</h2>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>padding 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>padding 초기화</th>
                  <td>class="p0"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>padding top 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>padding-top:5px</th>
                  <td>class="pt_5"</td>
                  <th scope='row'>padding-top:10px</th>
                  <td>class="pt_10"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-top:15px</th>
                  <td>class="pt_15"</td>
                  <th scope='row'>padding-top:20px</th>
                  <td>class="pt_20"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-top:25px</th>
                  <td>class="pt_25"</td>
                  <th scope='row'>padding-top:30px</th>
                  <td>class="pt_30"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-top:35px</th>
                  <td>class="pt_35"</td>
                  <th scope='row'>padding-top:40px</th>
                  <td>class="pt_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>padding bottom 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>padding-bottom:5px</th>
                  <td>class="pb_5"</td>
                  <th scope='row'>padding-bottom:10px</th>
                  <td>class="pb_10"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-bottom:15px</th>
                  <td>class="pb_15"</td>
                  <th scope='row'>padding-bottom:20px</th>
                  <td>class="pb_20"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-bottom:25px</th>
                  <td>class="pb_25"</td>
                  <th scope='row'>padding-bottom:30px</th>
                  <td>class="pb_30"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-bottom:35px</th>
                  <td>class="pb_35"</td>
                  <th scope='row'>padding-bottom:40px</th>
                  <td>class="pb_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>padding left 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>padding-left:5px</th>
                  <td>class="pl_5"</td>
                  <th scope='row'>padding-left:10px</th>
                  <td>class="pl_10"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-left:15px</th>
                  <td>class="pl_15"</td>
                  <th scope='row'>padding-left:20px</th>
                  <td>class="pl_20"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-left:25px</th>
                  <td>class="pl_25"</td>
                  <th scope='row'>padding-left:30px</th>
                  <td>class="pl_30"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-left:35px</th>
                  <td>class="pl_35"</td>
                  <th scope='row'>padding-left:40px</th>
                  <td>class="pl_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>padding right 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>padding-right:5px</th>
                  <td>class="pr_5"</td>
                  <th scope='row'>padding-right:10px</th>
                  <td>class="pr_10"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-right:15px</th>
                  <td>class="pr_15"</td>
                  <th scope='row'>padding-right:20px</th>
                  <td>class="pr_20"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-right:25px</th>
                  <td>class="pr_25"</td>
                  <th scope='row'>padding-right:30px</th>
                  <td>class="pr_30"</td>
                </tr>
                <tr>
                  <th scope='row'>padding-right:35px</th>
                  <td>class="pr_35"</td>
                  <th scope='row'>padding-right:40px</th>
                  <td>class="pr_40"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class='pt_40' id='guide9'>
          <h2 class='h-tit2'>width 지정값(%)</h2>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>width 지정값</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>width:10%</th>
                  <td>class="w10p"</td>
                  <th scope='row'>width:15%</th>
                  <td>class="w15p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:20%</th>
                  <td>class="w20p"</td>
                  <th scope='row'>width:25%</th>
                  <td>class="w25p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:30%</th>
                  <td>class="w30p"</td>
                  <th scope='row'>width:35%</th>
                  <td>class="w35p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:40%</th>
                  <td>class="w40p"</td>
                  <th scope='row'>width:45%</th>
                  <td>class="w45p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:50%</th>
                  <td>class="w50p"</td>
                  <th scope='row'>width:55%</th>
                  <td>class="w55p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:60%</th>
                  <td>class="w60p"</td>
                  <th scope='row'>width:65%</th>
                  <td>class="w65p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:70%</th>
                  <td>class="w70p"</td>
                  <th scope='row'>width:75%</th>
                  <td>class="w75p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:80%</th>
                  <td>class="w80p"</td>
                  <th scope='row'>width:85%</th>
                  <td>class="w85p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:90%</th>
                  <td>class="w90p"</td>
                  <th scope='row'>width:95%</th>
                  <td>class="w95p"</td>
                </tr>
                <tr>
                  <th scope='row'>width:100%</th>
                  <td colspan='3'>class="w100p"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class='pt_40' id='guide10'>
          <h2 class='h-tit2'>display 지정값</h2>
          <div class='board_list'>
            <table class='tstyle_write'>
              <caption>display</caption>
              <colgroup>
                <col style={{ width: '18%;' }} />
                <col />
                <col style={{ width: '18%;' }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                  <th scope='col' class='txt_center'>
                    비고
                  </th>
                  <th scope='col' class='txt_center'>
                    클래스명
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>display:none</th>
                  <td colspan='3'>class="dp_none"</td>
                </tr>
                <tr>
                  <th scope='row'>display:block</th>
                  <td>class="dp_blck"</td>
                  <th scope='row'>display:inline-block</th>
                  <td>class="dp_in_blck"</td>
                </tr>
                <tr>
                  <th scope='row'>display:flex</th>
                  <td>class="dp_flx"</td>
                  <th scope='row'>display:inline-flex</th>
                  <td>class="dp_in_flx"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
