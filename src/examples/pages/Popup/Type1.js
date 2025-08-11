import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Router,
	Link,
	useNavigate,
	json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
	Input,
	Textarea,
	Select,
	DatePicker,
	Check,
	Radio,
} from '../../Components/Element';
import { Button, Tab, Popup } from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [showPopup, setShowPopup] = useState(true);
	return (
		<>
			{/* <!-- 팝업 보여질 경우 .active 추가 --> */}
			<CommonPopup
				draggable={true}
				showPopup={showPopup}
				onClose={() => {
					setShowPopup(false);
				}}
				saveButtonTitle={'저장'}
				closeButtonTitle={'취소'}
				additionalButtonTitle={''}
				saveButtonOnClick={(e) => {
					setShowPopup(false);
				}}
				closeButtonOnClick={(e) => {
					setShowPopup(false);
				}}
				additionalButtonOnClick={(e) => {
					setShowPopup(false);
				}}
				title={'참석 취소'}
			>
				<h3 className="txt_center">취소사유</h3>
				<Textarea
					name='textarea1'
					id='seltextarea1'
					class={'textarea h250 mt_15'}
					rows={3}
				/>
			</CommonPopup>
			<Breadcrumb />
			<div className='page-title-wrap' data-type='responsive'>
				<h2 className='h-tit'>page title</h2>
			</div>
			<div className='contents_area'>
				<Button
					text={'팝업 열기'}
					onClick={() => {
						setShowPopup(!showPopup);
					}}
				/>
			</div>
		</>
	);
}

export default App;
