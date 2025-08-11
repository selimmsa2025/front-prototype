import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
} from 'react-router-dom';

import Main from '../examples/pages/Main';
import Guide from '../examples/pages/Guide';
import ButtonGuide from '../examples/pages/Guide/ButtonGuide';
import Board from '../examples/pages/Board';
import LeftTreeLayout from '../layout/LeftTreeLayout';
import DefaultLayout from '../layout/DefaultLayout_ex';
import KnowledgeLayout from '../layout/KnowledgeLayout';
import NewWindowLayout from '../layout/NewWindowLayout';
import SearchLayout from '../layout/SearchLayout';
import ComunityLayout from '../layout/ComunityLayout';
import MainPageLayout from '../layout/MainPageLayout';
import View from '../examples/pages/Board/View';
import Edit from '../examples/pages/Board/Edit';
import Calendar from '../examples/pages/Calendar';
import Calendar2 from '../examples/pages/Calendar/Calendar2';
import Tree from '../examples/pages/Tree';
import Form from '../examples/pages/Form';
import Datepicker from '../examples/pages/Datepicker';
import Tab from '../examples/pages/Tab';
import Popup from '../examples/pages/Popup';
import Tooltip from '../examples/pages/Tooltip';
import CommunityBasic from '../examples/pages/Board/CommunityDefault';
import CommunityThumbnail from '../examples/pages/Board/CommunityThumbnail';
import CommunityGallery from '../examples/pages/Board/CommunityGallery';
import EditableBoard from '../examples/pages/Board/Editable';
import WithTreeBoard from '../examples/pages/Board/WithTree';
import SortableBoard from '../examples/pages/Board/Sortable';
import FileUpload from '../examples/pages/Board/Edit/FileUpload';
import Comment from '../examples/pages/Board/View/Comment';
import Feedback from '../examples/pages/Board/View/Feedback';
import ColumnScroll from '../examples/pages/Board/ManyColumns';
import Notice from '../examples/pages/Notice';
import QnA from '../examples/pages/QnA';
import Event from '../examples/pages/Event';
import RegistUser from '../examples/pages/Regist/RegistUser';
import RegistDutyJournal from '../examples/pages/Regist/RegistDutyJournal';
import ModifyDutyJournal from '../examples/pages/Regist/ModifyDutyJournal';
import CautionEditor from '../examples/pages/View/CautionEditor';
import FAQ from '../examples/pages/View/FAQ';
import DutyJournal from '../examples/pages/View/DutyJournal';
import CooperationPoint from '../examples/pages/CooperationPoint';
import CooperationPointState from '../examples/pages/CooperationPoint/CooperationPointState';
import TotalStatus from '../examples/pages/CooperationPoint/TotalStatus';
import Blog from '../examples/pages/Blog';
import NoteBook from '../examples/pages/Blog/NoteBook';
import WorkWiki from '../examples/pages/WorkWiki';
import WorkWikiView from '../examples/pages/WorkWiki/View';
import WorkWikiEdit from '../examples/pages/WorkWiki/Edit';
import PopupType1 from '../examples/pages/Popup/Type1';
import PopupType2 from '../examples/pages/Popup/Type2';
import PopupType3 from '../examples/pages/Popup/Type3';
import PopupType4 from '../examples/pages/Popup/Type4';
import PopupType5 from '../examples/pages/Popup/Type5';
import PopupType6 from '../examples/pages/Popup/Type6';
import PopupType7 from '../examples/pages/Popup/Type7';
import PopupType8 from '../examples/pages/Popup/Type8';
import PopupType9 from '../examples/pages/Popup/Type9';
import PopupType10 from '../examples/pages/Popup/Type10';
import PopupType11 from '../examples/pages/Popup/Type11';
import PopupType12 from '../examples/pages/Popup/Type12';
import PopupType13 from '../examples/pages/Popup/Type13';
import PopupType14 from '../examples/pages/Popup/Type14';
import PopupType15 from '../examples/pages/Popup/Type15';
import PopupType16 from '../examples/pages/Popup/Type16';
import PopupType17 from '../examples/pages/Popup/Type17';
import PopupType18 from '../examples/pages/Popup/Type18';
import PopupType19 from '../examples/pages/Popup/Type19';
import PopupType20 from '../examples/pages/Popup/Type20';
import PopupType21 from '../examples/pages/Popup/Type21';
import PopupType22 from '../examples/pages/Popup/Type22';
import PopupType23 from '../examples/pages/Popup/Type23';
import PopupType24 from '../examples/pages/Popup/Type24';
import PopupType25 from '../examples/pages/Popup/Type25';
import PopupType26 from '../examples/pages/Popup/Type26';
import PopupType27 from '../examples/pages/Popup/Type27';
import PopupType28 from '../examples/pages/Popup/Type28';
import PopupType29 from '../examples/pages/Popup/Type29';
import PopupType30 from '../examples/pages/Popup/Type30';
import PopupType31 from '../examples/pages/Popup/Type31';
import PopupType32 from '../examples/pages/Popup/Type32';
import PopupType33 from '../examples/pages/Popup/Type33';
import PopupType34 from '../examples/pages/Popup/Type34';
import PopupType35 from '../examples/pages/Popup/Type35';
import PopupType36 from '../examples/pages/Popup/Type36';
import PopupType37 from '../examples/pages/Popup/Type37';
import PopupType38 from '../examples/pages/Popup/Type38';
import PopupType39 from '../examples/pages/Popup/Type39';
import PopupType40 from '../examples/pages/Popup/Type40';
import Knowledge from '../examples/pages/Knowledge';
import NewWindow from '../examples/pages/NewWindow';
import NewWindowType1 from '../examples/pages/NewWindow/Type1';
import NewWindowType2 from '../examples/pages/NewWindow/Type2';
import NewWindowType3 from '../examples/pages/NewWindow/Type3';
import NewWindowType4 from '../examples/pages/NewWindow/Type4';
import NewWindowType5 from '../examples/pages/NewWindow/Type5';
import NewWindowType6 from '../examples/pages/NewWindow/Type6';
import NewWindowType7 from '../examples/pages/NewWindow/Type7';
import NewWindowType8 from '../examples/pages/NewWindow/Type8';
import IntegratedSearch from '../examples/pages/IntegratedSearch';
import NotFound from '../examples/Components/NotFound';
import AjaxLoading from '../examples/pages/Loading';
import Login from '../examples/pages/Login';
import ModifyDutyJournal2 from '../examples/pages/Regist/ModifyDutyJournal2';
import DutyJournal2 from '../examples/pages/View/DutyJournal2';
import SurveyList from '../examples/pages/Survey/SurveyList';
import SurveyRegist from '../examples/pages/Survey/SurveyRegist';
import SurveyDetail from '../examples/pages/Survey/SurveyDetail';
import SurveyResult from '../examples/pages/Survey/SurveyResult';
import DutyPeriodList from '../examples/pages/View/DutyPeriodList';
import AttendRegist from '../examples/pages/Regist/AttendRegist';
import RegistExpositionInfo from '../examples/pages/Regist/RegistExpositionInfo';
import ExpositionInfo from '../examples/pages/View/ExpositionInfo';
import JudgePointStatus from '../examples/pages/View/JudgePointStatus';
import InstituteJudgeResult from '../examples/pages/View/InstituteJudgeResult';
import QuestionTarget from '../examples/pages/View/QuestionTarget';
import QuestionList from '../examples/pages/View/QuestionList';
import AttendQuestionList from '../examples/pages/View/AttendQuestionList';
import KnowledgeRegist from '../examples/pages/Regist/KnowledgeRegist';
import Comunity from '../examples/pages/Comunity';
import Ansewer from '../examples/pages/QnA/Answer';
import DiscussionType from '../examples/pages/DiscussionType';
import LeftTree from '../examples/pages/LeftTree/LeftTree';
import CommentPage from '../examples/pages/View/CommentPage';
import EventManage from '../examples/pages/View/EventManage';
import AttendRegistView from '../examples/pages/View/AttendRegistView';
import AssignmentSelectionStandard from '../examples/pages/AssignmentSelectionStandard';
import SmallAmountBusinessPlan from '../examples/pages/AssignmentSelectionSmallAmount/BusinessPlan';
import SmallAmountResearchReport from '../examples/pages/AssignmentSelectionSmallAmount/ResearchReport';
import SmallAmountResultApplication from '../examples/pages/AssignmentSelectionSmallAmount/ResultApplication';
import AssignmentRegistration from '../examples/pages/AssignmentRegistration';
import IntelPrototype from '../examples/pages/Intel/prototype';
import UserLogin from '../pages/comn/UserLogin';
import IntelPortal from '../examples/pages/Intel/portal';
import IntelManage from '../examples/pages/Intel/manage';
import Index from '../examples/pages/index';

const ExamplesRoute = () => {
    return (
        <>
            <Route element={<DefaultLayout />}>
                <Route path="/examples" element={<Main />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/buttonGuide" element={<ButtonGuide />} />
                <Route path="/board" element={<Board />} />
                <Route path="/board/view" element={<View />} />
                <Route path="/board/edit" element={<Edit />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar/calendar2" element={<Calendar2 />} />
                <Route path="/tree" element={<Tree />} />
                <Route path="/form" element={<Form />} />
                <Route path="/datePicker" element={<Datepicker />} />
                <Route path="/tab" element={<Tab />} />
                <Route path="/popup" element={<Popup />} />
                <Route path="/tooltip" element={<Tooltip />} />
                <Route path="/board/community" element={<CommunityBasic />} />
                <Route
                    path="/board/community/thumbnail"
                    element={<CommunityThumbnail />}
                />
                <Route
                    path="/board/community/gallery"
                    element={<CommunityGallery />}
                />
                <Route path="/board/editableBoard" element={<EditableBoard />} />
                <Route path="/board/withTreeBoard" element={<WithTreeBoard />} />
                <Route path="/board/sortableBoard" element={<SortableBoard />} />
                <Route path="/board/edit/fileUpload" element={<FileUpload />} />
                <Route path="/board/edit/comment" element={<Comment />} />
                <Route path="/board/edit/feedback" element={<Feedback />} />
                <Route path="/board/columnScroll" element={<ColumnScroll />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/qna" element={<QnA />} />
                <Route path="/discussionType" element={<DiscussionType />} />
                <Route path="/eventCard" element={<Event />} />
                <Route path="/registUser" element={<RegistUser />} />
                <Route path="/registDutyJournal" element={<RegistDutyJournal />} />
                <Route path="/modifyDutyJournal" element={<ModifyDutyJournal />} />
                <Route
                    path="/modifyDutyJournal2"
                    element={<ModifyDutyJournal2 />}
                />
                <Route path="/dutyJournal2" element={<DutyJournal2 />} />

                <Route path="/cautionEditor" element={<CautionEditor />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/QnA/answer" element={<Ansewer />} />
                <Route path="/dutyJournal" element={<DutyJournal />} />
                <Route path="/cooperationPoint" element={<CooperationPoint />} />
                <Route
                    path="/cooperationPoint/pointState"
                    element={<CooperationPointState />}
                />
                <Route
                    path="/cooperationPoint/totalStatus"
                    element={<TotalStatus />}
                />
                <Route path="/survey/Surveylist" element={<SurveyList />} />
                <Route path="/survey/SurveyRegist" element={<SurveyRegist />} />
                <Route path="/survey/SurveyDetail" element={<SurveyDetail />} />
                <Route path="/survey/SurveyResult" element={<SurveyResult />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/noteBook" element={<NoteBook />} />
                <Route path="/workWiki" element={<WorkWiki />} />
                <Route path="/workWiki/view" element={<WorkWikiView />} />
                <Route path="/workWiki/edit" element={<WorkWikiEdit />} />
                <Route path="/popup/type1" element={<PopupType1 />} />
                <Route path="/popup/type2" element={<PopupType2 />} />
                <Route path="/popup/type3" element={<PopupType3 />} />
                <Route path="/popup/type4" element={<PopupType4 />} />
                <Route path="/popup/type5" element={<PopupType5 />} />
                <Route path="/popup/type6" element={<PopupType6 />} />
                <Route path="/popup/type7" element={<PopupType7 />} />
                <Route path="/popup/type8" element={<PopupType8 />} />
                <Route path="/popup/type9" element={<PopupType9 />} />
                <Route path="/popup/type10" element={<PopupType10 />} />
                <Route path="/popup/type11" element={<PopupType11 />} />
                <Route path="/popup/type12" element={<PopupType12 />} />
                <Route path="/popup/type13" element={<PopupType13 />} />
                <Route path="/popup/type14" element={<PopupType14 />} />
                <Route path="/popup/type15" element={<PopupType15 />} />
                <Route path="/popup/type16" element={<PopupType16 />} />
                <Route path="/popup/type17" element={<PopupType17 />} />
                <Route path="/popup/type18" element={<PopupType18 />} />
                <Route path="/popup/type19" element={<PopupType19 />} />
                <Route path="/popup/type20" element={<PopupType20 />} />
                <Route path="/popup/type21" element={<PopupType21 />} />
                <Route path="/popup/type22" element={<PopupType22 />} />
                <Route path="/popup/type23" element={<PopupType23 />} />
                <Route path="/popup/type24" element={<PopupType24 />} />
                <Route path="/popup/type25" element={<PopupType25 />} />
                <Route path="/popup/type26" element={<PopupType26 />} />
                <Route path="/popup/type27" element={<PopupType27 />} />
                <Route path="/popup/type28" element={<PopupType28 />} />
                <Route path="/popup/type29" element={<PopupType29 />} />
                <Route path="/popup/type30" element={<PopupType30 />} />
                <Route path="/popup/type31" element={<PopupType31 />} />
                <Route path="/popup/type32" element={<PopupType32 />} />
                <Route path="/popup/type33" element={<PopupType33 />} />
                <Route path="/popup/type34" element={<PopupType34 />} />
                <Route path="/popup/type35" element={<PopupType35 />} />
                <Route path="/popup/type36" element={<PopupType36 />} />
                <Route path="/popup/type37" element={<PopupType37 />} />
                <Route path="/popup/type38" element={<PopupType38 />} />
                <Route path="/popup/type39" element={<PopupType39 />} />
                <Route path="/popup/type40" element={<PopupType40 />} />
                <Route path="/newWindow" element={<NewWindow />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dutyPeriodList" element={<DutyPeriodList />} />
                <Route path="/attendRegist" element={<AttendRegist />} />
                <Route path="/commentPage" element={<CommentPage />} />
                <Route
                    path="/registExpositionInfo"
                    element={<RegistExpositionInfo />}
                />
                <Route path="/expositionInfo" element={<ExpositionInfo />} />
                <Route path="/judgePointStatus" element={<JudgePointStatus />} />
                <Route
                    path="/instituteJudgeResult"
                    element={<InstituteJudgeResult />}
                />
                <Route path="/questionTarget" element={<QuestionTarget />} />
                <Route path="/questionList" element={<QuestionList />} />
                <Route
                    path="/attendQuestionList"
                    element={<AttendQuestionList />}
                />
                <Route path="/knowledgeRegist" element={<KnowledgeRegist />} />
                <Route path="/attendRegistView" element={<AttendRegistView />} />
                <Route path="/eventManage" element={<EventManage />} />
                <Route
                    path="/assignmentSelection/standard"
                    element={<AssignmentSelectionStandard />}
                />
                <Route
                    path="/assignmentSelection/smallAmount/businessPlan"
                    element={<SmallAmountBusinessPlan />}
                />
                <Route
                    path="/assignmentSelection/smallAmount/researchReport"
                    element={<SmallAmountResearchReport />}
                />
                <Route
                    path="/assignmentSelection/smallAmount/resultApplication"
                    element={<SmallAmountResultApplication />}
                />
                <Route
                    path="/assignmentRegistration"
                    element={<AssignmentRegistration />}
                />
                <Route path="/intel/prototype" element={<IntelPrototype />} />
                <Route path="/comn/userLogin" element={<UserLogin />} /> 
                <Route path="/intel/portal" element={<IntelPortal />} />
                <Route path="/intel/manage" element={<IntelManage />} />
            </Route>

            <Route element={<KnowledgeLayout />}>
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/ajaxLoading" element={<AjaxLoading />} />
            </Route>

            <Route element={<MainPageLayout />}>
                <Route path="/index" element={<Index />} />
            </Route>

            <Route element={<SearchLayout />}>
                <Route path="/integratedSearch" element={<IntegratedSearch />} />
            </Route>

            <Route element={<NewWindowLayout />}>
                <Route path="/newWindow/type1" element={<NewWindowType1 />} />
                <Route path="/newWindow/type2" element={<NewWindowType2 />} />
                <Route path="/newWindow/type3" element={<NewWindowType3 />} />
                <Route path="/newWindow/type4" element={<NewWindowType4 />} />
                <Route path="/newWindow/type5" element={<NewWindowType5 />} />
                <Route path="/newWindow/type6" element={<NewWindowType6 />} />
                <Route path="/newWindow/type7" element={<NewWindowType7 />} />
                <Route path="/newWindow/type8" element={<NewWindowType8 />} />
            </Route>

            <Route element={<ComunityLayout />}>
                <Route path="/community/*" element={<Comunity />} />
            </Route>
            <Route element={<LeftTreeLayout />}>
                <Route path="/leftTree/leftTree" element={<LeftTree />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </>
    );
};

export default ExamplesRoute; 