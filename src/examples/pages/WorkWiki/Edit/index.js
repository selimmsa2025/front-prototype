import Breadcrumb from '../../../Components/Breadcrumb';
import {
  Input,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
} from '../../../Components/Element';
import DateRangePicker from '../../../Components/DateRangePicker';
import { useState, useEffect } from 'react';
import TreeWithTab from '../../../Components/TreeWithTab';
import axios from 'axios';
import WorkWikiEdit from '../../../Components/WikiWork/Edit';
export default function App ({}) {
  const [openMenu, setOpenMenu] = useState(true);
  const [treeData, setTreeData] = useState([]);

  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>Page Title</h2>
      </div>
      <div class='contents_area'>
        <div class='contents'>
          <WorkWikiEdit />
        </div>
      </div>
    </>
  );
}
