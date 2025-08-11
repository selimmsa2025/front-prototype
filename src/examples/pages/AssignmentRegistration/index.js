import React, { useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import ResearcherSelection from '../../Components/AssignmentRegistration/ResearcherSelection';
import IntermediateInfo from '../../Components/AssignmentRegistration/IntermediateInfo';
import ResultEvaluation from '../../Components/AssignmentRegistration/ResultEvaluation';
import ResultApplication from '../../Components/AssignmentRegistration/ResultApplication';
import { Tab } from '../../Components/Element';
function App() {
  const [tab, setTab] = useState(2);
  return (
    <>
      <Breadcrumb />
      <div className="page-title-wrap" data-type="responsive">
        <h2 className="h-tit">과제등록</h2>
      </div>
      <div class="contents_area">
        <div className="duty_area">
          <Tab
            type={1}
            data={[
              { index: 1, title: '과제선정' },
              { index: 2, title: '연구자선정' },
              { index: 3, title: '중간점검' },
              { index: 4, title: '결과평가' },
              { index: 5, title: '연구활용' },
            ]}
            currentIndex={tab}
            onChange={(index) => {
              setTab(index);
            }}
          />
        </div>
        {tab == 1 && <></>}
        {tab == 2 && <ResearcherSelection />}
        {tab == 3 && <IntermediateInfo />}
        {tab == 4 && <ResultEvaluation />}
        {tab == 5 && <ResultApplication />}
      </div>
    </>
  );
}

export default App;
