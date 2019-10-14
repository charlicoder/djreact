import React from 'react';
import { Form, Input} from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class ArticleForm extends React.Component {
    render () {
        
        return (
            <div width='400'>
                <form>
                    <FormItem>
                        <Input placeholder="Basic usage" />
                    </FormItem>
                    <FormItem>
                        <TextArea
                            placeholder="Autosize height with minimum and maximum number of lines"
                            autosize={{ minRows: 2, maxRows: 6 }}
                        />
                    </FormItem>
                    <FormItem>
                        <TextArea placeholder="Controlled autosize" autosize={{ minRows: 3, maxRows: 5 }} />
                    </FormItem>
                </form>
            </div>
            
        )
    }
}

export default ArticleForm;