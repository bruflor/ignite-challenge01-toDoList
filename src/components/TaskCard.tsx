import { Trash } from "phosphor-react";
import { useState } from "react";
import { TasksProps } from "../App";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  onDeleteTask: (title: string) => void;
  status: boolean;
}
export const TaskCard = ({ title, onDeleteTask, status }: TaskCardProps) => {
  const [taskStatus, setTaskStatus] = useState(status);
  function handleDeleteTask() {
    onDeleteTask(title);
  }
  function handleInputStatus() {
    setTaskStatus(!taskStatus);
  }

  return (
    <div className={styles.task}>
      <div>
        <input
          type="checkbox"
          id={title}
          onChange={handleInputStatus}
          checked={taskStatus ? true : false}
        />
        <label htmlFor={title}></label>
        <span className={taskStatus ? styles.completed : ""}>{title}</span>
      </div>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
