import { useForm } from 'react-hook-form';
import { useState, useEffect, useCallback } from 'react';
import {
  Input,
  Button,
  Select,
  Textarea,
  DatePicker,
  Radio,
  Check,
} from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';

export default function QuestionTarget ({}) {
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>질의대상 조회</h2>
      </div>
      <div class='contents_area'>
        <div class='tit_area'>
          <div class='right_items'>
            <Button as='a' color='4' text='질의대상 추가'>
              <i class='ri-add-line'></i>
            </Button>
          </div>
        </div>

        <ul class='question_target'>
          <li>
            <strong class='tit'>행사관리</strong>
            <p class='desc1'>행사관리에 대한 질문을 등록합니다.</p>
            <div class='right_items'>
              <Select
                name='sel1'
                id='sel1'
                class='size_msm'
                data={[
                  { id: 1, name: '공개' },
                  { id: 2, name: '비공개' },
                ]}
              />
              <Button as='a' color='2' class='type2' text='삭제' />
              <Button as='a' color='4' class='type2' text='수정' />
            </div>
          </li>
          <li>
            <strong class='tit'>당직관리</strong>
            <p class='desc1'>
              당직관리에 대한 질문을 등록합니다.당직관리에 대한 질문을
              등록합니다.당직관리에 대한 질문을 등록합니다.당직관리에 대한
              질문을 등록합니다.당직관리에 대한 질문을 등록합니다.당직관리에
              대한 질문을 등록합니다.당직관리에 대한 질문을 등록합니다.
            </p>
            <div class='right_items'>
              <Select
                name='sel2'
                id='sel2'
                class='size_msm'
                data={[
                  { id: 1, name: '공개' },
                  { id: 2, name: '비공개' },
                ]}
              />
              <Button as='a' color='2' class='type2' text='삭제' />
              <Button as='a' color='4' class='type2' text='수정' />
            </div>
          </li>
          <li>
            <strong class='tit'>신청관리</strong>
            <p class='desc1'>신청관리에 대한 질문을 등록합니다.</p>
            <div class='right_items'>
              <Select
                name='sel3'
                id='sel3'
                class='size_msm'
                data={[
                  { id: 1, name: '공개' },
                  { id: 2, name: '비공개' },
                ]}
              />
              <Button as='a' color='2' class='type2' text='삭제' />
              <Button as='a' color='4' class='type2' text='수정' />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
