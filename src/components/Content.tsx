import { useState } from 'react'
import { TaskItem } from "./TaskItem";
import { FaPlus } from 'react-icons/fa';

interface Task{
    id: number;
    name: string;
    isComplete: boolean;
}

export function Content() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  const newTask = {
      id: Math.random(),
      name: taskName,
      isComplete: false
  }

    const handleAddTask = () => {
        if(!taskName) return

        setTasks([...tasks, newTask]);
        setTaskName('');
    }

    const handleDeleteTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    const handleToggleTaskCompletion = (id: number) => {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        } : task);
        setTasks(newTasks);
    }

  return (
    <main className="content-wrap">
        <header className='content-header'>
            <h1>Minhas Tarefas</h1>
            <div className="task-entry-wrap">
                <input
                    type="text"
                    placeholder="Adicionar nova Tarefa"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}   
                />
                <button title="Adicionar nova Tarefa" onClick={handleAddTask}>
                    <FaPlus />
                </button>
            </div>
        </header>
        <ul className='tasks-list'>
            {tasks.length === 0 ? 'Você ainda não tem tarefas agendadas' : 
                tasks.map(task => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleToggleTaskCompletion={handleToggleTaskCompletion}/>
            ))}
            
        </ul>
        
    </main>
  )
}
