import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./NewTask.module.css";
interface NewTaskProps {
  onCreateTask: (task: string) => void;
}
export const NewTask = ({ onCreateTask }: NewTaskProps) => {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }
  function onSubmitNewTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmitNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleCreateNewTaskChange}
      />
      <button>
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
};
