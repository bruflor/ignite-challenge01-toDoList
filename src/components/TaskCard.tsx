import { Trash } from "phosphor-react";
import { useState } from "react";
import { TasksProps } from "../App";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  onDeleteTask: (title: string) => void;
  status: boolean;
  id: string;
  onStatusChange: any;
}
export const TaskCard = ({
  title,
  id,
  onDeleteTask,
  status,
  onStatusChange,
}: TaskCardProps) => {
  const [taskNewStatus, setTaskNewStatus] = useState(status);
  function handleDeleteTask() {
    onDeleteTask(title);
  }

  function handleChangeStatus() {
    setTaskNewStatus(!taskNewStatus);
    onStatusChange(taskNewStatus, id, title);
  }

  return (
    <div className={styles.task}>
      <div>
        <input
          type="checkbox"
          id={title}
          onChange={handleChangeStatus}
          checked={taskNewStatus ? true : false}
        />
        <label htmlFor={title}></label>
        <span className={taskNewStatus ? styles.completed : ""}>{title}</span>
      </div>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
