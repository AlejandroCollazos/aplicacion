import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import '../index.css'
import TaskList from '../TaskList'

export const Registros = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      if (editMode) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex].text = newTask;
        setTasks(updatedTasks);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setTasks([...tasks, { text: newTask }]);
      }
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNewTask(tasks[index].text);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditMode(false);
    setEditIndex(null);
    setNewTask('');
  };

  return (
    <div className="container">
      <div className="row ">
          <div className="app">
          <h1>Lista de Tareas</h1>
          <div className="task-input">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Nueva tarea"
            />
            <button onClick={handleAddTask}>
              {editMode ? 'Editar' : 'Agregar'}
            </button>
          </div>
          <TaskList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}/>
            <Link to={'/'}> <button type="submit" className="btn btn-primary" id='vol'>Volver</button></Link>
        </div>
        
      </div>
    </div>
  );
}
export default Registros
