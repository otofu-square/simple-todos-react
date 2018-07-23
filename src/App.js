import React from 'react';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoItem
          title="Todo1のタイトル"
          text="Todo1のテキスト"
          createdAt="Todo1の作成日時"
        />
      </div>
    );
  }
}

export default App;
