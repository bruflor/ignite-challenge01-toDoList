import "./global.css";
import Logo from "./assets/LogoToDo.svg";
import styles from "./App.module.css";
import { PlusCircle, TextBolder, Trash } from "phosphor-react";

const tasks = [
  {
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    isComplete: true,
  },
  {
    title:
      "Quae dolore odio iure facilis ipsam nisi omnis quisquam quibusdam corrupti quod, officia, id, mollitia quia earum vero.",
    isComplete: false,
  },
  {
    title: "Accusamus laudantium nisi ullam!",
    isComplete: false,
  },
];

export const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <img src={Logo} />
      </div>
      <div className={styles.wrapper}>
        <form className={styles.formContainer}>
          <input placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={20} weight="bold" />
          </button>
        </form>
        <div className={styles.status}>
          <div>
            <p>Tarefas criadas</p>
            <span>5</span>
          </div>
          <div>
            <p className={styles.done}>Concluídas</p>
            <span>2 de 5</span>
          </div>
        </div>
        <div className={styles.tasksContainer}>
          {tasks.map((task) => {
            return (
              <div className={styles.task}>
                <div>
                  <input type="checkbox" id={task.title} />
                  <label htmlFor={task.title}></label>
                  <span>{task.title}</span>
                </div>
                <button title="Deletar tarefa">
                  <Trash size={24} />
                </button>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
