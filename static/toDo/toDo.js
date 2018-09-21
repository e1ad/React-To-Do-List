
import React from 'react';
import autobind from 'autobind-decorator'


import './toDo.scss';

class ToDo extends React.Component {

  constructor(props) {
    super();

    this.state = {
      allCheck: false,
      value: "",
      data: []
    }


  }

  toggleCheck(item) {
    item.check = !item.check;
    this.setState({ "data": this.state.data });
  }


  deleteTask(index) {
    this.state.data.splice(index, 1);
    this.setState({ "data": this.state.data });
  }


  renderList() {
    return this.state.data.map((item, index) => {
      return <li key={index}>
        <input type="checkbox" checked={item.check} onChange={event => this.toggleCheck(item)} />
        <span>{item.value}</span>
        <button onClick={() => this.deleteTask(index)}>X</button>
      </li>
    });
  }


  @autobind
  onSubmit() {
    this.state.data.push({ "value": this.state.value, check: false });
    this.setState({ "data": this.state.data, "value": "" });
  }


  toggleAllCheck(event) {
    this.state.data.forEach(item => {
      item.check = event.target.checked;
    });
    this.setState({ "data": this.state.data, "allCheck": event.target.checked });
  }


  header() {
    return <form onSubmit={this.onSubmit}>
      <input type="checkbox" checked={this.state.allCheck} onChange={event => this.toggleAllCheck(event)} />
      <input type="text" value={this.state.value} onChange={event => this.setState({ "value": event.target.value })} />
      <button className="btn btn-success">Add Task</button>
    </form>
  }


  render() {
    return (
      <div className="comp to-do">
        {this.header()}
        <ul>{this.renderList()}</ul>


      </div>
    )
  }
}


export default ToDo;