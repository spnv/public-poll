import React, {
    Component
} from 'react';

import UnvoteItem from '../components/unvote-item'

class PollBoard extends Component {
    render() {
        return (
            <div>
                <UnvoteItem/>
                <UnvoteItem/>
                <UnvoteItem/>
                <UnvoteItem/>
            </div>
        )
    }
}

export default PollBoard;