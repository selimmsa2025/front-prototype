import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Button, Select, Check } from '../../Components/Element';
import { useForm } from 'react-hook-form';
import FullCalendar from './FullCalendar';

function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>Page Title</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='contents_area'>
          <div class='calendar_area'>
            <div class='assi'>
              <div class='top'>
                <h3 class='tit'>캘린더</h3>
                <Button
                  href='javascipt:void(0)'
                  color='1'
                  size='2'
                  class='icon_lf'
                  text=''
                >
                  <i class='ri-add-line'></i>추가
                </Button>
              </div>
              <Check
                name='chk_1'
                data={[
                  {
                    value: 1,
                    title: '개인',
                    liChild: (
                      <>
                        {' '}
                        <Button
                          as='a'
                          color='4'
                          size='2'
                          href='javascript:void(0)'
                          text='설정'
                        />
                      </>
                    ),
                  },
                  {
                    value: 2,
                    title: '부서',
                    liChild: (
                      <>
                        {' '}
                        <Button
                          as='a'
                          color='4'
                          size='2'
                          href='javascript:void(0)'
                          text='설정'
                        />
                      </>
                    ),
                  },
                  {
                    value: 3,
                    title: '기관',
                    liChild: (
                      <>
                        {' '}
                        <Button
                          as='a'
                          color='4'
                          size='2'
                          href='javascript:void(0)'
                          text='설정'
                        />
                      </>
                    ),
                  },
                  {
                    value: 4,
                    title: '전체',
                    liChild: (
                      <>
                        {' '}
                        <Button
                          as='a'
                          color='4'
                          size='2'
                          href='javascript:void(0)'
                          text='설정'
                        />
                      </>
                    ),
                  },
                  {
                    value: 5,
                    title: '기타',
                    liChild: (
                      <>
                        {' '}
                        <Button
                          as='a'
                          color='4'
                          size='2'
                          href='javascript:void(0)'
                          text='설정'
                        />
                      </>
                    ),
                  },
                ]}
              />
            </div>
            <div class='con'>
              <div class='box_st1 sch_top_wrap'>
                <div class='form_wrap twin'>
                  <div class='form_group'>
                    <strong class='form_label lg'>제목</strong>
                    <Input
                      type='text'
                      class='form_text'
                      name='frm1'
                      id='frm1'
                      title='제목을 입력해주세요.'
                      placeholder='검색어를 입력해주세요.'
                      register={register('search', {})}
                    />
                  </div>
                  <div class='form_group'>
                    <strong class='form_label lg'>등록자</strong>
                    <Input
                      type='text'
                      class='form_text'
                      name='frm2'
                      id='frm2'
                      title='등록자를 입력해주세요.'
                      placeholder='검색어를 입력해주세요.'
                      register={register('submit', {})}
                    />
                    <Button
                      as='button'
                      type='submit'
                      color='2'
                      class='sch'
                      text='검색'
                    />
                  </div>
                </div>
              </div>
              <div class='calendar'>
                <FullCalendar />
              </div>
            </div>
          </div>

          <div class='bet_btn_area'>
            <div class='bottom_right_area'>
              <Button color='3' size='3' text='인쇄' />
              <Button color='1' size='3' text='등록' />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
