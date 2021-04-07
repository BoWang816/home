import styles from './index.less';
import React, { Component } from 'react';
import { Input, message } from 'antd';

const { Search } = Input;

export default class SearchComponent extends Component {
    onSearch = (value: any) => {
        if (!value) {
            message.error('空的！不想给你搜！');
            return;
        }
        window.open(`https://www.google.com/search?q=${value}`);
    };

    render() {
        return (
            <div className={styles.search}>
                <Search placeholder="Google" enterButton loading={false} onSearch={this.onSearch} style={{ width: '40%' }} />
            </div>
        );
    }
}
