import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleUpdate = () => {
    if (!editedName.trim() || !editedDescription.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    updateTask(task.id, { name: editedName, description: editedDescription });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Enregistrer</button>
        </div>
      ) : (
        <div className="task-details">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Modifier</button>
            <button onClick={handleDelete}>Supprimer</button>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Rétablir' : 'Terminer'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
