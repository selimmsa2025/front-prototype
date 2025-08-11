export default function WorkWikiList ({ dataList }) {
  return (
    <>
      <ul className='borderitem_list'>
        {dataList?.map((v, i) => {
          return (
            <>
              <li key={v.id}>
                <a href='javascript:void(0)'>
                  <div className='item'>
                    <p className='tit'>
                      <span className={`tag${v.badge}`}>배지{v.badge}</span>
                      <strong>{v.title}</strong>
                    </p>
                    <p className='text'>{v.contents}</p>
                    <p className='desc1'>
                      <span>
                        {v.createUser} {v.createDate}
                      </span>
                      <span>{v.depart}</span>
                      <span>{v.institution}</span>
                    </p>
                  </div>
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
