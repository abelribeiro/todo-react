import { FaSquare, FaTrash } from "react-icons/fa";

interface TaskItemProps{
  task: {
    id: number;
    name: string;
    isComplete: boolean;
  },
  handleDeleteTask: (id: number) => void
  handleToggleTaskCompletion: (id: number) => void

}

export function TaskItem(props: TaskItemProps) {
  return (
    <li>
      <div className={props.task.isComplete ? 'completed' : ''} data-testid="task" >
        <label className="checkbox-container">
          <input 
            type="checkbox"
            readOnly
            checked={props.task.isComplete}
            onClick={() => props.handleToggleTaskCompletion(props.task.id)}
            title='check'
          />
          <span className="checkmark"></span>
        </label>
        <p>{props.task.name}</p>
      </div>

      <button type="button" data-testid="remove-task-button" onClick={() => props.handleDeleteTask(props.task.id)} title='remove task'>
        <FaTrash size={16}/>
      </button>
    </li>
  )
}
