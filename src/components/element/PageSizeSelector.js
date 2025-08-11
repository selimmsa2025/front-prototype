import React from 'react';

function PageSizeSelector({ pageSize, setPageSize, showPopup, setShowPopup, optionType = 1 }) {
    const changePageSize = (e, size) => {
        e.preventDefault();
        setPageSize(size);
        setShowPopup(false);
    };

    //추가 하고싶은 내용은 case를 추가하고 원하시는 표시개수 배열을 만들어 optionType으로 인자를 받아오시면 사용가능합니다.
    const getPageSizeOptions = (type) => {
        switch (type) {
            case 1:
                return [20, 15, 10];
            case 2:
                return [10, 5, 3];
            case 3:
                return [6, 2];
            default:
                return [20, 15, 10];
        }
    };

    const pageSizeOptions = getPageSizeOptions(optionType);

    return (
        <div className='item'>
            <span className='label'>목록 표시 개수</span>
            <div className={`select_list ${showPopup ? 'active' : ''}`}>
                <a
                    href='javascript:void(0)'
                    onClick={(e) => {
                        e.preventDefault();
                        setShowPopup(!showPopup);
                    }}
                >
                    <span className='sr_only'>선택된 옵션</span>
                    {pageSize}개
                </a>
                <ul className='list'>
                    {pageSizeOptions.map((size) => (
                        <li key={size}>
                            <a
                                href='javascript:void(0)'
                                className={pageSize === size ? 'on' : ''}
                                onClick={(e) => changePageSize(e, size)}
                            >
                                {size}개
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PageSizeSelector;
