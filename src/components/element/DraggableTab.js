import React, { useEffect, useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import TabItem from './DraggableTabItem';
function DraggableTab (params) {
  const { type = 1, currentIndex = 1, data } = params;

  const [tabList, setTabList] = useState(data);

  const moveTab = (targetIndex) => {
    if (targetIndex <= 0) {
      return;
    }
    if (targetIndex > data.length) {
      return;
    }
    params.onChange(targetIndex);
  };

  const dragTab = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = tabList[dragIndex];

      setTabList(
        update(tabList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [tabList],
  );

  if (type == 1) {
    return (
      <>
        <DndProvider backend={HTML5Backend}>
          <div className='tab_depth4'>
            <ul>
              {tabList?.map((tabData, index) => {
                return (
                  <>
                    <TabItem
                      tabItem={tabData}
                      index={index}
                      currentIndex={currentIndex}
                      onClick={params.onChange}
                      moveTab={dragTab}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </DndProvider>
      </>
    );
  } else if (type == 2) {
    return (
      <>
        <DndProvider backend={HTML5Backend}>
          <div className='tab_depth5'>
            {/* 요소가 6개 이상일 경우 .arr 버튼이 생성.
                              .arr 버튼 클릭시 하나씩 옆으로 슬라이드 되는 탭 입니다.  */}

            <div className='slide'>
              <ul>
                {tabList?.map((tabData, index) => {
                  return (
                    <TabItem
                      tabItem={tabData}
                      index={index}
                      currentIndex={currentIndex}
                      onClick={params.onChange}
                      moveTab={dragTab}
                    />
                  );
                })}
              </ul>
            </div>
            <a
              href='#'
              className='arr next'
              onClick={(e) => {
                e.preventDefault();
                moveTab(currentIndex + 1);
              }}
            >
              <span className='sr-only'>다음탭으로</span>
            </a>
            <a
              href='#'
              className='arr prev'
              onClick={(e) => {
                e.preventDefault();
                moveTab(currentIndex - 1);
              }}
            >
              <span className='sr-only'>이전탭으로</span>
            </a>
          </div>
        </DndProvider>
      </>
    );
  } else {
    return null;
  }
}

export default DraggableTab;
