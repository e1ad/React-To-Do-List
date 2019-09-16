import React from 'react';
import autobind from 'autobind-decorator';

import './toDo.scss';


class ToDo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allCheck: false,
      value: "",
    }

  }

  toggleCheck(index) {
    this.props.onChange(data => {
      const check = data[index].check;
      data[index].check = !check;
      return data;
    });
  }


  deleteTask(index) {
    this.props.onChange(data => {
      data.splice(index, 1);
      return data;
    });
  }


  renderList() {
    return this.props.data.map((item, index) => {
      return (
        <li key={index}>
          <input type="checkbox" checked={item.check} onChange={() => this.toggleCheck(index)} />
          <div className="task-body" title={item.value}>{item.value}</div>
          <button className="remove-task-btn" onClick={() => this.deleteTask(index)}>
            <span>X</span>
          </button>
        </li>)
    });
  }


  @autobind
  onSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      this.props.onChange(data => {
        data.push({ "value": this.state.value, check: false });
        this.setState({ value: "" });
        return data;
      });
    }
  }


  @autobind
  toggleAllCheck(event) {
    const { checked } = event.target;
    this.props.onChange(data => {
      data.forEach(item => {
        item.check = checked;
      });
      this.setState({ "allCheck": checked });
      return data;
    });
  }


  header() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="checkbox" checked={this.state.allCheck} onChange={this.toggleAllCheck} />
        <input type="text" value={this.state.value} onChange={event => this.setState({ "value": event.target.value })} />
        <button type="submit" className="btn btn-success">Add Task</button>
      </form>
    )
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