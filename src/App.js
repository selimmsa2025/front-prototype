import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from 'store';
import ExamplesRoute from './routes/ExamplesRoute';
import IntelPrototype from 'examples/pages/Intel/prototype';
import ApiTest from 'pages/cm/at/ApiTest';
import ApiTestDetail from 'pages/cm/at/ApiTestDetail';
import SpsList from 'pages/cp/sps/SpsList';
import FaqList from 'pages/cp/faq/FaqList';
import ApiList from 'pages/cm/am/ApiList';
import ApiDetail from 'pages/cm/am/ApiDetail';
import Apiupdate from 'pages/cm/am/ApiUpdate';
import ApiReg from 'pages/cm/am/ApiReg';

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
            
                {/* 카탈로그 프로토 타입 */}
                <Route path="/" element={<IntelPrototype />} />
                
                <Route path="/intel/prototype" element={<IntelPrototype />} />

                {/* SaaS 상품 구독현황 */}
                <Route path="/sps/list" element={<SpsList />}/>
                {/* 카탈로그 상품 FAQ 목록 */}
                <Route path="/cm/faq/list-faq" element={<FaqList />}/>
                


                {/* API 테스트 */}
                <Route path="/cm/at/api-test" element={<ApiTest />} />
                <Route path="/cm/at/api-test/:gdsId/:srvrSeCd" element={<ApiTestDetail />} /> 

                 {/* API 관리 */}
                <Route path="/am/api/list" element={<ApiList />} />
                <Route path="/am/api/detail" element={<ApiDetail />} />       
                <Route path="/am/api/update" element={<Apiupdate />} />
                <Route path="/am/api/reg" element={<ApiReg />} />
                
            </Route>
            {ExamplesRoute()}
          </Routes>
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
