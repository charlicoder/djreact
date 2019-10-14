import React from 'react';
import WrappedNormalLoginForm from '../components/LoginForm';
import { Row, Col, Card } from 'antd';
import '../components/LoginForm.css';

class LoginPage extends React.Component {

    render () {
        return (
            <div id='components-form-demo-normal-login'>
                
                <Row gutter={16} align='middle'>
                    <Col lg={{span: 8, offset: 8}} md={{span: 12, offset: 6}} xs={24} style={{ background: '#ECECEC', padding: '30px' }}>
                        <Card title='Login Form'>
                            <WrappedNormalLoginForm />
                        </Card>
                    </Col>
                </Row>
                

            </div>
        )
    }
}

export default LoginPage;