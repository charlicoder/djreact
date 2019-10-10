import React from 'react';
import axios from 'axios';
import { Card, Icon, Avatar } from 'antd';

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
                // console.log(res.data);
            })
    }

    render () {
        return (
            <Card title={this.state.article.title}>
                <h3>{this.state.article.description}</h3>
                <hr />
                <p>
                    {this.state.article.content}
                </p>
            </Card>
        )
    }
}

export default ArticleDetail;