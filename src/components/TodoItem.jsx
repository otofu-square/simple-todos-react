import React from 'react';
import { destroy } from '../api';

class TodoItem extends React.Component {
  render() {
    const id = this.props.id;
    const title = this.props.title;
    const text = this.props.text;
    const createdAt = this.props.createdAt;
    return (
      <tr>
        <td>{title}</td>
        <td>{text}</td>
        <td>{createdAt}</td>
        <td>
          {/* 削除APIを呼んだあとに画面を更新する（超邪道） */}
          <button onClick={() => destroy(id).then(() => window.history.go())}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;
