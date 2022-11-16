import { Trash } from "phosphor-react";
import styles from "./TaskCard.module.css";

interface TaskProps {
  title: string;
}
export const TaskCard = ({ title }: TaskProps) => {
  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" id={title} />
        <label htmlFor={title}></label>
        <span>{title}</span>
      </div>
      <button title="Deletar tarefa">
        <Trash size={24} />
      </button>{" "}
    </div>
  );
};
