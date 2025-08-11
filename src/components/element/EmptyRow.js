import React from 'react';

export default function EmptyRow({ colSpan = 1, message = '데이터가  로딩 중 또는 데이터 없음' }) {
    return (
        <tr>
            {/* CSS정의가 필요한 항목_LSC_20250728 */}
            <td colSpan={colSpan} style={{ textAlign: 'center', padding: '1rem' }}>
                {message}
            </td>
        </tr>
    );
}
