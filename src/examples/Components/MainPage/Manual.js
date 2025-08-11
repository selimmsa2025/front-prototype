import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Manual() {
  const [manualList, setmanualList] = useState([]);

  const getManualList = async () => {
    const response = await axios.get('/mockupServer/getManualList.json', {});
    setmanualList(response.data);
  };
  useEffect(() => {
    getManualList();
  }, []);

  return (
    <section class="section section3">
      <div class="box1 type2">
        <h3 class="title">지침/편람/매뉴얼</h3>
        <ul class="main_bx_list">
          {manualList?.map((manual) => {
            return (
              <li>
                <a href="javascript:void(0)">
                  <strong class="tit">{manual.title}</strong>
                  <span class="date">{manual.date}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a href="javascript:void(0)" class="more_view">
          더보기
        </a>
      </div>

      <div class="box1 type2">
        <h3 class="title">지침/편람/매뉴얼</h3>
        <ul class="main_bx_list">
          {manualList?.map((manual) => {
            return (
              <li>
                <a href="javascript:void(0)">
                  <strong class="tit">{manual.title}</strong>
                  <span class="date">{manual.date}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a href="javascript:void(0)" class="more_view">
          더보기
        </a>
      </div>
    </section>
  );
}
