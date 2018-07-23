const ENDPOINT = 'http://localhost:3000';

export const index = () =>
  fetch(`${ENDPOINT}/todos`).then(response => response.json());

export const create = (title, text) =>
  fetch(`${ENDPOINT}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, title }),
  }).then(response => response.json());

export const destroy = (
  todoId, // 削除する todo の id を引数で受け取る
) =>
  fetch(`${ENDPOINT}/todos/${todoId}`, {
    method: 'DELETE',
  }).then(response => response.json());
