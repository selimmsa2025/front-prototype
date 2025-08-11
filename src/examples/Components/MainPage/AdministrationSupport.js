import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function AdministrationSupport() {
  const [administrationSupportList, setAdministrationSupportList] = useState(
    [],
  );

  const getAdministrationSupportList = async () => {
    const response = await axios.get(
      '/mockupServer/getAdministrationSupportList.json',
      {},
    );
    setAdministrationSupportList(response.data);
  };
  useEffect(() => {
    getAdministrationSupportList();
  }, []);

  return (
    <section class="section section6">
      <div class="box1">
        <h3 class="title">
          온 행정지원<span class="text">더 편리한 업무를 원한다면?</span>
        </h3>

        <ul class="list">
          {administrationSupportList?.map((administrationSupport) => {
            return (
              <li>
                <a href="javascript:void(0)">
                  <i class="icon">
                    <img src={administrationSupport.img} alt="" />
                  </i>
                  <strong class="tit">{administrationSupport.title}</strong>
                  <span class="txt">{administrationSupport.txt}</span>
                  <p class="desc">{administrationSupport.desc}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
