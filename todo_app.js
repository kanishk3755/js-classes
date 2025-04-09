document.addEventListener('DOMContentLoaded', () => {
  // === Add Styling Dynamically ===
  const style = document.createElement('style');
  style.textContent = `
    body {
      font-family: sans-serif;
      padding: 20px;
      background: #f0f0f0;
    }
    .todo-app {
      background: white;
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .task {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 8px;
      background: #f9f9f9;
      border-radius: 4px;
      cursor: pointer;
    }
    .task.done {
      background-color: #c8f7c5;
      text-decoration: line-through;
    }
    .add-section {
      display: flex;
      gap: 8px;
      margin-top: 15px;
    }
    .add-section input {
      flex: 1;
      padding: 6px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .add-section button {
      padding: 6px 12px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  // === Create Main App Container ===
  const app = document.createElement('div');
  app.className = 'todo-app';
  document.body.appendChild(app); // << Append to body!

  // === Title ===
  const title = document.createElement('h2');
  title.textContent = '📝 To-Do List';
  app.appendChild(title);

  // === Task List Container ===
  const taskList = document.createElement('div');
  app.appendChild(taskList);

  // === Initial Tasks ===
  const tasks = [
    { name: 'Sing', done: false },
    { name: 'Dance', done: false },
    { name: 'Read', done: false },
    { name: 'Learn', done: false },
    { name: 'Run', done: false },
  ];

  // === Render a Task ===
  function renderTask(task) {
    const taskEl = document.createElement('div');
    taskEl.className = 'task';
    if (task.done) taskEl.classList.add('done');

    const nameEl = document.createElement('span');
    nameEl.textContent = task.name;

    const statusEl = document.createElement('span');
    statusEl.textContent = task.done ? 'yes' : 'no';

    taskEl.appendChild(nameEl);
    taskEl.appendChild(statusEl);
    taskList.appendChild(taskEl);

    // Toggle task status on click
    taskEl.addEventListener('click', () => {
      task.done = !task.done;
      statusEl.textContent = task.done ? 'yes' : 'no';
      taskEl.classList.toggle('done');
    });
  }

  // === Render All Initial Tasks ===
  tasks.forEach(renderTask);

  // === Add New Task Section ===
  const addSection = document.createElement('div');
  addSection.className = 'add-section';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'New task...';

  const button = document.createElement('button');
  button.textContent = 'Add';

  addSection.appendChild(input);
  addSection.appendChild(button);
  app.appendChild(addSection);

  // === Handle New Task Addition ===
  button.addEventListener('click', () => {
    const taskName = input.value.trim();
    if (taskName === '') return;
    const newTask = { name: taskName, done: false };
    tasks.push(newTask);
    renderTask(newTask);
    input.value = '';
  });
});
