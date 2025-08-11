import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import LeftMenu from '../components/menu/LeftMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../store/modules/user';
import { createPortal } from 'react-dom';
import { HashLink } from 'react-router-hash-link';
import Footer from '../examples/Components/Footer';
import HelpDesk from '../examples/Components/HelpDesk';
import Breadcrumb from 'components/menu/Breadcrumb';

const DefaultLayout = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.user);

    useEffect(() => {
        if (!userInfo) {
            dispatch(fetchUser());
    }
    }, [dispatch, userInfo]);

    return (
        <>
            {createPortal(
                <>
                    <HashLink to='#gnb1'>메뉴 바로가기</HashLink>
                    <HashLink to='#container'>본문 바로가기</HashLink>
                </>,
                document.querySelector('div#skip-nav'),
            )}

            <Header />
            <main id='container'>
                <div className='inner in-between'>
                    <LeftMenu />
                    <div className='contents'>
                        <Breadcrumb />
                        <Outlet />
                    </div>
                </div>
                <HelpDesk />
            </main>

            <Footer />

            <div className='move_top'>
                <a href='#wrap' className='btn_top' title='상단으로 이동하기'>
                    <span className='sr_only'>상단으로 이동</span>
                </a>
            </div>
        </>
    )
}

export default DefaultLayout;
