import { Trash } from "phosphor-react";
import { ChangeEventHandler, useState } from "react";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  onDeleteTask: (title: string) => void;
  status: boolean;
  id: string;
  onStatusChange: ChangeEventHandler<HTMLInputElement>;
}
export const TaskCard = ({
  title,
  onDeleteTask,
  status,
  onStatusChange,
}: TaskCardProps) => {
  function handleDeleteTask() {
    onDeleteTask(title);
  }

  return (
    <div className={styles.task}>
      <div>
        <input
          type="checkbox"
          id={title}
          onChange={onStatusChange}
          checked={status ? true : false}
        />
        <label htmlFor={title}></label>
        <span className={status ? styles.completed : ""}>{title}</span>
      </div>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
