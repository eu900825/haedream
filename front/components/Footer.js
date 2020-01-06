import React from 'react';

const Footer = () => {
    return (
        <>
            <div style={{backgroundColor: 'black', padding: 30}}>
                <p style={{color: 'white'}}>대출금리 연24%이내(등급에 따라 차등적용) | 연체이율 : 연24%이내 | 상환기간 : 최단 6개월이상, 최대 60개월이하(업체별 상이)
                대출예시 : 100만원, 12개월, 24%, 원리금균등상환 시 총1,134,715원</p>
                <p style={{color: 'orange'}}> 대출중개 수수료 : 없음 | 조기상환 수수료 및 조건 : 없음</p>
                <p style={{color: 'red'}}>중개 수수료를 요구하거나 받는 것은 불법입니다. 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 귀하의 신용등급이 하락할 수 있습니다.</p>
            </div>
        </>
    )
}

export default Footer;