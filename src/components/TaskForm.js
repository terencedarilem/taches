import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      description,
      completed: false
    };
    addTask(newTask);
    setName('');
    setDescription('');
  };

  return (
    <div className="task-form">
      <h2>Ajouter une tâche</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la tâche"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description de la tâche"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default TaskForm;
