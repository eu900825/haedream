import React, {useState} from 'react';
import Link from "next/link";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Loans = () => {
    const [name, setName] = useState('');
    const [phone01, setPhone01] = useState('');
    const [phone02, setPhone02] = useState('');
    const [phone03, setPhone03] = useState('');
    const [term01, setTerm01] = useState(false);
    const [term02, setTerm02] = useState(false);

    const onSubmit = () => {
        e.preventDefault();
        console.log({
            name,
            phone01,
            phone02,
            phone03,       
        });
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangePhone01 = (e) => {
        setPhone01(e.target.value);
    };

    const onChangePhone02 = (e) => {
        setPhone02(e.target.value);
    };

    const onChangePhone03 = (e) => {
        setPhone03(e.target.value);
    };

    const onChangeTerm01 = (e) => {
        setTerm01(e.target.value);
    };
    
    const onChangeTerm02 = (e) => {
        setTerm02(e.target.value);
    };
    return (
        <Form layout="inline" onSubmit={onSubmit} style={{textAlign: 'center', backgroundColor: 'silver', paddingTop: 20}}>
            <Form.Item>
                <label htmlFor="user-name"></label>
                <Input name="user-name" value={name} required onChange={onChangeName} style={{width: 100}} placeholder="이름"></Input>
            </Form.Item>
            <Form.Item>
                <label htmlFor="user-phone01"></label>
                <Input name="user-phone01" value={phone01} required onChange={onChangePhone01} style={{width: 100}} placeholder="010" ></Input>
            </Form.Item>
            <Form.Item>
                <label htmlFor="user-phone02"></label>
                <Input name="user-phone02" value={phone02} required onChange={onChangePhone02} style={{width: 100}} placeholder="1234"></Input>
            </Form.Item>
            <Form.Item>
                <label htmlFor="user-phone03"></label>
                <Input name="user-phone03" value={phone03} required onChange={onChangePhone03} style={{width: 100}} placeholder="5678"></Input>
            </Form.Item>
            {/*<div>
                <p style={{marginBottom: -1}}>[필수] 개인정보 취급방침</p>
                <Checkbox name="user-term01" checked={term01} onChange={onChangeTerm01}>동의합니다.</Checkbox>
            </div>
            <Form.Item>
                <p style={{marginBottom: -20}}>[필수] 개인(신용)정보 수집,이용 동의</p>
                <Checkbox name="user-term01" checked={term02} onChange={onChangeTerm02}>동의합니다.</Checkbox>
            </Form.Item>*/}

            <h5>상담신청만으로는 신용도에 영향을 끼치지 않습니다.</h5>
            <br />
            <div>
                <Button type="primary" htmlType="submit">빠른 상담신청하기</Button>
            </div>
            <br />
        </Form>
    )
}

export default Loans;