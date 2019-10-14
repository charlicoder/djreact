import React from 'react';
import axios from 'axios';
import Articles from '../components/Article';
import CustomForm from '../components/Form';
import { Row, Col } from 'antd';


class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render () {
        return (
            <div>
                <Row gutter={32}>
                    <Col lg={16} md={24}>
                        <h2>Article List</h2>
                        <hr/>
                        <Articles data={this.state.articles} />
                    </Col>
                    <Col lg={8} md={24}>
                        <h2>Create a article</h2>
                        <hr/>
                        <CustomForm btnText='Create' requestType='post' articleID={null}></CustomForm>
                    </Col>
                </Row>
                
                
            </div>
        )
    }
}

export default ArticleList;