import React from 'react';
import { List, Card } from 'antd';

const Content01 = () => {
    const data = [
        {
            title: '무직',
            content: '무직, 학생, 취업준비생, 아르바이트생 등',
            limitStart: 100,
            limitEnd: 1500
        },
        {
            title: '주부',
            content: "등초본상 'OOO의 처",
            limitStart: 100,
            limitEnd: 3000
        },
        {
            title: '사업자',
            content: '사업장 운영중인 사장님들',
            limitStart: 100,
            limitEnd: 20000
        },
        {
            title: '직장인',
            content: '1개월이상 재직중인 4대가입직장인(프리랜서가능)',
            limitStart: 100,
            limitEnd: 1500
        },
    ]
          
    return (
        <>
        <div style={{width: '100%', padding: 50, alignItems: "center", justfiContent: 'center'}}>
            <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>간편하게 보는 대출상품</h2>
        </div>
        <List
            grid={{
            gutter: 16,
            column: 2,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 3,
            }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={<h3 style={{fontWeight: 'bold'}}>{item.title}</h3>} size={'small'}><h5>{item.content}</h5> <br/> <h5 style={{backgroundColor: '#0000FF', color: 'white', width:300}}>한도: {item.limitStart} 만원 ~ {item.limitEnd} 만원</h5></Card>
            </List.Item>
        )}
        />
        </>
    )
}

export default Content01;