import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        // event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const content = event.target.elements.content.value;
        const articleData = {
            title: title,
            description: description,
            content: content
        }

        switch ( requestType ) {
            case 'post':
                return axios.post('http://localhost:8000/api/', articleData)
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
            case 'put':
                return axios.put(`http://localhost:8000/api/${articleID}/`, articleData)
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
                // console.log(`http://localhost:8000/api/${articleID}/`, articleData)
            default:
                return axios.get(`http://localhost:8000/api/${articleID}/`)
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
        }
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID
                )}>
                    <Form.Item label="Title">
                        <Input name='title' placeholder="Put a title here.." />
                    </Form.Item>
                    <Form.Item label="Description">
                        <TextArea name='description' placeholder="Enter a short descriotion here..." rows={2} />
                    </Form.Item>
                    <Form.Item label="Content">
                        <TextArea name='content' placeholder="Enter some content here.." rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
                
            </div>
        );
    }
}

export default CustomForm;