import MonthlyRank from './MonthlyRank';
import { Link } from 'react-router-dom';
import { Tab } from '../Element';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const communityList = [
  {
    id: 1,
    thumbnail: '',
    rank: 1,
    title: '국민취업지원제도 - 취업이룸',
    contents:
      '21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다. ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다',
    leader: '홍길동',
    memberCnt: '13,533',
    createdDate: '2023.11.01',
    mileage: '26,124',
  },
  {
    id: 2,
    thumbnail: '',
    rank: 2,
    title: '국민취업지원제도 - 취업이룸',
    contents:
      '21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다. ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다',
    leader: '홍길동',
    memberCnt: '13,533',
    createdDate: '2023.11.01',
    mileage: '26,124',
  },
  {
    id: 3,
    thumbnail: '',
    rank: 3,
    title: '국민취업지원제도 - 취업이룸',
    contents:
      '21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다. ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다 ‘21. 1. 한국형 실업부조인 “국민취업지원제도"가 “취업이룸"으로 시작되어 직원 여러분들의 협조와 참여로 지속되어 작업되고 있습니다',
    leader: '홍길동',
    memberCnt: '13,533',
    createdDate: '2023.11.01',
    mileage: '26,124',
  },
];
export default function InstCommunity({ }) {
  const navigate = useNavigate();

  return (
    <>
      <div class='box_st2 commu_update'>
        <div class='tab_depth5 type_sm'>
          <div class='slide'>
            <ul>
              <li
                onClick={() => {
                  navigate('/community/myCommunity');
                }}
              >
                <a href='javascript:;'>내 커뮤니티 업데이트</a>
              </li>
              <li className='active'>
                <a href='javascript:;'>우리기관 커뮤니티</a>
              </li>
            </ul>
          </div>
        </div>

        <ul class='gallery_list item3'>
          {communityList.map((community) => {
            return (
              <>
                <li>
                  <Link
                    href='javascript:void(0)'
                    class='thumb'
                    aria-hidden='true'
                  >
                    <img
                      src={`${!_.isEmpty(community.thumbnail)
                          ? community.thumbnail
                          : '../img/common/noimage.jpg'
                        }`}
                      alt=''
                    />
                  </Link>
                  <div class='desc'>
                    <strong class='title'>
                      <Link href='javascript:void(0)'>{community.title}</Link>
                    </strong>
                    <div class='txt_object'>
                      <span class='txt'>
                        <b>리더</b>
                        {community.leader}
                      </span>
                      <span class='txt'>
                        <b>멤버 수</b>
                        {community.memberCnt}
                      </span>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
        <Link href='javascript:void(0)' class='more'>
          더보기
        </Link>
      </div>
      <MonthlyRank />
    </>
  );
}
