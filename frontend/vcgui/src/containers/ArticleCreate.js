import React from 'react';
import ArticleForm from '../components/ArticleForm';

class ArticleCreate extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
    }

    render () {
        return (
            <ArticleForm></ArticleForm>
        )
    }
}

export default ArticleCreate;