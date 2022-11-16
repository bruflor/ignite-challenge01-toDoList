import { PlusCircle } from "phosphor-react";

import styles from "./NewTask.module.css";
export const NewTask = () => {
  return (
    <form className={styles.formContainer}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
};
