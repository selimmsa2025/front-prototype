import React from 'react';
import { Input, Select, Button } from 'components/element';

const SearchFilters = ({
    searchText,
    onInputChange,
    onSearch,
    onReset,
    showDetailSch,
    onToggleDetail,
    rspnsList,
    httpList,
    pvsnList,
    versionOptions,
}) => {


    return (
        <div className={`board_sch_wrap ${showDetailSch ? 'active' : ''}`}>
            <div className="sch_top_def">
                <div className="form_group">
                    <strong className="form_label">API명 검색</strong>
                    <div className="sch_kwd_box">
                        <Input
                            type="text"
                            name="apiNm"
                            className="form_text sch_kwd"
                            placeholder="검색어를 입력해주세요."
                            value={searchText.apiNm}
                            onChange={onInputChange}
                        />
                        <button type="button" className="sch_kwd_btn" onClick={onSearch}>
                            <span className="sr_only">검색하기</span>
                        </button>
                    </div>
                    <button type="button" className="sch_detail_btn" onClick={onToggleDetail}>
                        상세검색
                    </button>
                </div>
            </div>

            <div className="box_st1 sch_top_wrap">
                <div className="form_wrap width_half">
                    <div className="form_group">
                        <strong className="form_label">구 분</strong>
                        <Select
                            name="apiDmndRspnsSeCd"
                            value={searchText.apiDmndRspnsSeCd}
                            onChange={onInputChange}
                            data={rspnsList}
                        />
                    </div>

                    <div className="form_group">
                        <strong className="form_label">통신 방식</strong>
                        <Select
                            name="httpCommSeCd"
                            value={searchText.httpCommSeCd}
                            onChange={onInputChange}
                            data={httpList}
                        />
                    </div>

                    <div className="form_group">
                        <strong className="form_label">버 전</strong>
                        <Select
                            name="apiVerSn"
                            value={searchText.apiVerSn}
                            onChange={onInputChange}
                            data={versionOptions}
                        />
                    </div>

                    <div className="form_group">
                        <strong className="form_label">유 형</strong>
                        <Select
                            name="apiPvsnShpCd"
                            value={searchText.apiPvsnShpCd}
                            onChange={onInputChange}
                            data={pvsnList}
                        />
                    </div>

                    <div className="sch_btn_area">
                        <Button className="sch" title="초기화" color={4} onClick={onReset}>
                            초기화
                        </Button>
                        <Button className="sch" title="검색" color={2} onClick={onSearch}>
                            검색
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilters;
