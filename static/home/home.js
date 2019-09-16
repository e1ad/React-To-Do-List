import React from 'react';
import autobind from 'autobind-decorator';

import ToDo from './../toDo/toDo';


class Home extends React.Component {

    constructor(props) {
        super();

        this.state = {
            data: []
        }
    }

    @autobind
    onToDoChange(change) {
        this.setState({ "data": [...change(this.state.data)] })
    }


    render() {
        return <div>
            <ToDo data={this.state.data} onChange={this.onToDoChange} />
        </div>
    }

}

export default Home;