// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export function LocationCheck() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname.indexOf('/wiki') == -1) {
//       localStorage.removeItem('wiki-list');
//     }

//     if (location.pathname.indexOf('aply/task') == -1) {
//       localStorage.removeItem('aply-task');
//     }
//     if (location.pathname.indexOf('aply/prcs') == -1) {
//       localStorage.removeItem('aply-prcs');
//     }

//     if (location.pathname.indexOf('ondt/std/') == -1) {
//       localStorage.removeItem('ondt-std');
//     }

//     if (location.pathname.indexOf('ondt/stdRpt/') == -1) {
//       localStorage.removeItem('ondt-stdRpt');
//     }

//     if (location.pathname.indexOf('ondt/stdAtrz/') == -1) {
//       localStorage.removeItem('ondt-stdAtrz');
//     }

//     if (location.pathname.indexOf('evnt/list') == -1 && location.pathname.indexOf('evnt/testList') == -1 && location.pathname.indexOf('evnt/insert') == -1 && location.pathname.indexOf('evnt/info') == -1 && location.pathname.indexOf('evnt/update') == -1 && location.pathname.indexOf('evnt/Addr') == -1) {
//       localStorage.removeItem('evnt-list');
//       localStorage.removeItem('evnt-testList');
//     }

//     if (location.pathname.indexOf('evnt/atndState') == -1) {
//       localStorage.removeItem('evnt-atndState');
//     }
//   }, [location]);
// }

