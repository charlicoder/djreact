import React from 'react';
import axios from 'axios';
import { Button, Card, Row, Col } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.id;
        axios.get(`http://localhost:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.id;
        axios.delete(`http://localhost:8000/api/${articleID}`);
        this.props.history.push('/');
        // this.forceUpdate()
    }

    render () {
        return (
            <Row gutter={16}>
                <Col lg={16} md={24}>
                    <h2>Article Details</h2>
                    <Card title={this.state.article.title}>
                        <h3>{this.state.article.description}</h3>
                        <hr />
                        <p>
                            {this.state.article.content}
                        </p>
                    </Card>
                    <br />
                    <form onSubmit={this.handleDelete} align='right'>
                        <Button type='danger' htmlType='submit'>Delete</Button>
                    </form>
                </Col>
                <Col lg={8} md={24}>
                    <h2>Create a article</h2>
                    <hr/>
                    <CustomForm btnText='Update' requestType='put' articleID={this.props.match.params.id} />
                </Col>
                
            </Row>
        )
    }
}

export default ArticleDetail;