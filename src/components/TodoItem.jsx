import React from 'react';

class TodoItem extends React.Component {
  render() {
    // this.props から TodoItem に渡ってきた Props を取り出す
    const title = this.props.title;
    const text = this.props.text;
    const createdAt = this.props.createdAt;
    return (
      <tr>
        {/* `{...}` で JSX 内に変数を展開する */}
        <td>{title}</td>
        <td>{text}</td>
        <td>{createdAt}</td>
      </tr>
    );
  }
}

export default TodoItem;
