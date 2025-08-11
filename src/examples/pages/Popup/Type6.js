import { createPortal } from 'react-dom';
import React, { useEffect, useState, useMemo } from 'react';
import _ from 'lodash';
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
	Button,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [showPopup, setShowPopup] = useState(true);
	const [point, setPoint] = useState([]);

	const changeInputValue = ({ e, key }) => {
		e.preventDefault();
		const value = e.target.value;
		const index = _.findIndex(point, { id: key });
		if (index !== -1) {
			// 객체가 존재하면 수정
			const pointObject = _.find(point, { id: key })
			pointObject['value'] = value;
		} else {
			setPoint([...point, { id: key, value: value }])
		}
	}

	return (
		<>
			<CommonPopup
				showPopup={showPopup}
				onClose={() => {
					setShowPopup(false);
				}}
				saveButtonTitle={'이전화면'}
				closeButtonTitle={'전체저장'}
				additionalButtonTitle={''}
				saveButtonOnClick={(e) => {
					setShowPopup(false);
				}}
				closeButtonOnClick={(e) => {
					setShowPopup(false);
					console.log(point)
				}}
				additionalButtonOnClick={(e) => {
					setShowPopup(false);
				}}
				title={'심사위원 심사'}
			>
				<h3>행정안전부 실제행사</h3>
				<ul className="info_list type1">
					<li><span>심사결과 입력시간</span><p>15시 00분 ~ 16시 55분</p></li>
				</ul>

				<div className="board_list">
					<table className="tstyle_view not_line">
						<caption>심사위원 심사 상세 - 기관명, 점수, 저장버튼으로 구성</caption>
						<thead>
							<tr>
								<th scope="col">기관명</th>
								<th scope="col">점수</th>
								<th scope="col">-</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td aria-label="기관명">A기관(A)</td>
								<td aria-label="점수">
									<Input
										name='frm1'
										id='frm1'
										title='기관명을 입력해주세요.'
										placeholder=''
										onChange={(e) => {
											changeInputValue({ e, key: 'frm1' })
										}}
									/>
								</td>
								<td aria-label="-">
									<a href="#" className="btn4 type2" onClick={(e) => {
										e.preventDefault()
										console.log(_.find(point, { id: 'frm1' }))
									}}>저장</a>
								</td>
							</tr>
							<tr>
								<td aria-label="기관명">B기관(B)</td>
								<td aria-label="점수">
									<Input
										name='frm2'
										id='frm2'
										title='기관명을 입력해주세요.'
										placeholder=''
										onChange={(e) => {
											changeInputValue({ e, key: 'frm2' })
										}}
									/>
								</td>
								<td aria-label="-">
									<a href="#" className="btn4 type2" onClick={(e) => {
										e.preventDefault()
										console.log(_.find(point, { id: 'frm2' }))
									}}>저장</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</CommonPopup>
			<Breadcrumb />
			<div className='page-title-wrap' data-type='responsive'>
				<h2 className='h-tit'>page title</h2>
			</div>
			<div class='contents_area'>
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
