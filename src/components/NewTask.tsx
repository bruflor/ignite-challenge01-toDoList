import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./NewTask.module.css";
export const NewTask = ({ setNewTask }: any) => {
  // const [newTask, setNewTask] = useState("");
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }
  function onSubmitNewTask(event: FormEvent) {
    event.preventDefault();
    setNewTask(newTaskText);
  }
  return (
    <form className={styles.formContainer} onSubmit={onSubmitNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={handleCreateNewTaskChange}
      />
      <button>
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
};
