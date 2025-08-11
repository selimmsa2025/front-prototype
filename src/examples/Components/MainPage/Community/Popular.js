import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Popular() {
  const [communityPopularList, setCommunityPopularList] = useState([]);

  const getCommunityPopularList = async () => {
    const response = await axios.get(
      '/mockupServer/getCommunityPopularList.json',
      {},
    );
    setCommunityPopularList(response.data);
  };
  useEffect(() => {
    getCommunityPopularList();
  }, []);

  return (
    <div class="box1">
      <h3 class="title">인기 커뮤니티</h3>
      <ul class="main_commu">
        {communityPopularList?.map((communityPopular, idx) => {
          return (
            <li>
              <a href="javascript:void(0)">
                <i class="img">
                  <img
                    src={communityPopular.img}
                    alt={`인기커뮤니티 제목${idx}`}
                  />
                </i>
                <div class="text">
                  <div class="tit">
                    <strong>{communityPopular.title}</strong>
                  </div>
                  <span class="view">
                    조회수 <span>{communityPopular.view}</span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      <a href="javascript:void(0)" class="more_view">
        더보기
      </a>
    </div>
  );
}
