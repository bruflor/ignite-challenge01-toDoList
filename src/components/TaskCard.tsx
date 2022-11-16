import { Trash } from "phosphor-react";
import { TasksProps } from "../App";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  title: string;
  onDeleteTask: (title: string) => void;
}
export const TaskCard = ({ title, onDeleteTask }: TaskCardProps) => {
  function handleDeleteTask() {
    onDeleteTask(title);
  }
  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" id={title} />
        <label htmlFor={title}></label>
        <span>{title}</span>
      </div>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>{" "}
    </div>
  );
};
