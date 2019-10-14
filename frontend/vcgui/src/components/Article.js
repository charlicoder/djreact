import React from 'react';
import { List, Icon } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


const Articles = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                        <IconText type="message" text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.0-9/68886812_10217720229951092_5682366703271411712_n.jpg?_nc_cat=102&_nc_eui2=AeGf-uzUP-khsGLUAp4o6n8CFVfxgwhn16SwLtPwCZz9Yj3cC1rHGO6l16Lt4_buWiLKNgaRWe-ue8hK3nWCXZsaUz_uFl5cQ_JSPxs1BTrCkg&_nc_oc=AQkWT4GUyHiPni1a0xKe_wKg851iTEsFPBH6SQpx07cmD2nLiBLJg7aN8078dJTQ-s0&_nc_ht=scontent.fzyl1-1.fna&oh=a6b13f17ed4a80b8f106284b3690f1db&oe=5E2546EB"
                        />
                    }
                >
                    <List.Item.Meta
                        
                        title={<a href={`/${item.id}`}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}

export default Articles;