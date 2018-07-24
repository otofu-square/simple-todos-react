import React from 'react';
import { destroy } from '../api';

class TodoItem extends React.Component {
  render() {
    const id = this.props.id;
    const title = this.props.title;
    const text = this.props.text;
    const createdAt = this.props.createdAt;
    const todosUpdater = this.props.todosUpdater;
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{createdAt}</td>
        <td>
          <button onClick={() => destroy(id).then(() => todosUpdater())}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
