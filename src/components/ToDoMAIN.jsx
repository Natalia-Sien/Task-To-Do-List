import React from 'react'

export default function ToDoMAIN({ todos_completed, total_todos }) {
    return (
        <section className="todo_main">
          <div>
            <p>Task Done</p>
            <p>Keep it up</p>
          </div>
          <div>
            {todos_completed}/{total_todos}
          </div>
        </section>
      );
}
