import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function TopTen() {
  const [topTenList, setTopTenList] = useState([]);

  const getTopTenList = async () => {
    const response = await axios.get('/mockupServer/getTopTenList.json', {});
    setTopTenList(response.data);
  };
  useEffect(() => {
    getTopTenList();
  }, []);

  return (
    <div class="box1 type1">
      <h3 class="title">인기 Top10</h3>
      <ol class="popularity">
        {topTenList?.map((topTen) => {
          return (
            <li>
              <a href="javascript:void(0)">
                <p class="txt">{topTen.text}</p>
                <span class="date">{topTen.date}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <a href="javascript:void(0)" class="more_view">
        더보기
      </a>
    </div>
  );
}
