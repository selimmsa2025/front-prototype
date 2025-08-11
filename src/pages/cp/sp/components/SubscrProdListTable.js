import React from "react";

const FILE_BASE_URL = "http://localhost:8000/saas-be-catalog/v1/file";

const SubscrProdListTable = ({ title, groupedData, emptyLabel }) => {
  return (
    <div className="board_list">
      <h3 className="title">{title}</h3>
      <table className="tstyle_write">
        <colgroup>
          <col className="w20p" />  
          <col className="w80p" />  
        </colgroup>
        <tbody>
          {Object.values(groupedData).length > 0 ? (
            Object.values(groupedData).map((group, idx) => (
              <tr key={idx}>
                <th>{group.typeNm}</th>
                <td>
                  <div className="bx dp_flx">
                    {group.items.map((item) => (
                      <div key={item.gdsId} className="box_st1 mr_10 dp_flx">
                        <a href="#" className="thumb" aria-hidden="true">
                          <img src={`${FILE_BASE_URL}/${item.atchFileSn}/view`} alt="썸네일" />
                        </a>
                        <div className="txt_box ml_10">
                          <strong className="title">
                            <a href="#">{item.gdsNm}</a>
                          </strong>
                          <p className="text">
                            <span className="point">{item.gdsSmryCn}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th>{emptyLabel}</th>
              <td className="desc1">구독중인 상품이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubscrProdListTable;