import React, {Component} from 'react';

import 'react-flexible';
import '../../static/scss/pull/share.scss'

class ShareIndex extends Component {
    componentDidMount() {
        document.title = "邀请有奖";
    }
    
    // static onEnter = () => {
    //     document.title = "share";
    //    
    // };
    render() {
        return (
            <div className='shareMain'>
                邀请有奖
                <img src="../../static/images/pull/banner_share.jpg" alt='123' />
            </div>
        );
    }
}

export default ShareIndex;