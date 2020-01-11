import React from 'react';
import autobind from 'autobind-decorator';
import ToDo from './../toDo/toDo';

const TO_DOS_LOCAL_STORAGE = 'to-do-list';

class Home extends React.Component {

    constructor(props) {
        super(props);

        const toDos = localStorage.getItem(TO_DOS_LOCAL_STORAGE);

        this.state = {
            data: toDos ? JSON.parse(toDos) : []
        }

    }

    @autobind
    onToDoChange(change) {
        this.setState({ data: [...change(this.state.data)] }, () => {
            localStorage.setItem(TO_DOS_LOCAL_STORAGE, JSON.stringify(this.state.data));
        });
    }


    render() {
        return (
            <div>
                <ToDo data={this.state.data} onChange={this.onToDoChange} />
            </div>
        )
    }

}

export default Home;