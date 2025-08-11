import MonthlyRank from './MonthlyRank';
import { Link, useNavigate } from 'react-router-dom';
import { Tab } from '../Element';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '../Board/Pagination';

export default function MyCommunity ({}) {
  const navigate = useNavigate();
  const [myCommunityList, setMyCommunityList] = useState([]);
  const [currentCommunity, setCurrentCommunity] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const getMyCommunityList = async () => {
    const response = await axios.get('/mockupServer/getMyCommunityList.json');
    setMyCommunityList(response.data.communityList || []);
    if (response.data.communityList?.length > 0) {
      setCurrentCommunity(response.data.communityList[0]);
      setTotalCount(response.data.communityList[0].updatedList?.length);
    }
  };

  const getUpdatedList = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const updatedList =
      currentCommunity.updatedList?.slice(startIndex, endIndex) || [];
    return updatedList;
  };

  useEffect(() => {
    getMyCommunityList();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCommunity]);

  return (
    <>
      <div className='box_st2 commu_update'>
        <div className='tab_depth5 type_sm'>
          <div className='slide'>
            <ul>
              <li className='active'>
                <a href='javascript:;'>내 커뮤니티 업데이트</a>
              </li>
              <li
                onClick={() => {
                  navigate('/community/instCommunity');
                }}
              >
                <a href='javascript:;'>우리기관 커뮤니티</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='update_list'>
          <div className='items_li'>
            <ul>
              {myCommunityList.map((comm) => {
                return (
                  <>
                    <li
                      className={`${
                        comm.id == currentCommunity.id ? 'active' : ''
                      }`}
                      onClick={() => {
                        setCurrentCommunity(comm);
                      }}
                    >
                      <Link href='javascript:void(0)'>
                        {comm.title}({comm.updatedList.length})
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className='bulletin'>
            <h3 className='title'>최신글</h3>
            <div className='board_list'>
              <table className='tstyle_list type2'>
                <caption>최신글 - 제목, 등록일로 이루어짐</caption>
                <colgroup>
                  <col style={{ width: '80%' }} />
                  <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th scope='col'>제목</th>
                    <th scope='col'>등록일</th>
                  </tr>
                </thead>
                <tbody>
                  {getUpdatedList().map((v) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <p>
                              <a href='javascript:void(0)' className='ellipsis'>
                                {v.title}
                              </a>
                            </p>
                          </td>
                          <td>{v.createdDate}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Pagination
              totalCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
              useMoveButton={false}
            />
            <a href='javascript:void(0)' className='more'>
              더보기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
