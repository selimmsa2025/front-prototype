import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Recent() {
  const [communityRecentList, setCommunityRecentList] = useState([]);

  const getCommunityRecentList = async () => {
    const response = await axios.get(
      '/mockupServer/getCommunityRecentList.json',
      {},
    );
    setCommunityRecentList(response.data);
  };
  useEffect(() => {
    getCommunityRecentList();
  }, []);

  return (
    <div class="box1">
      <h3 class="title">최근게시글</h3>
      <ul class="list">
        {communityRecentList?.map((communityRecent) => {
          return (
            <li>
              <span class={`tag ${communityRecent.tagType}`}>
                {communityRecent.tag}
              </span>
              <strong class="tit">
                <a href="javascript:void(0)">{communityRecent.title}</a>
              </strong>
              <span class="date">{communityRecent.date}</span>
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
