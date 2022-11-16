import "./global.css";
import Logo from "./assets/LogoToDo.svg";
import styles from "./App.module.css";
import { PlusCircle, TextBolder } from "phosphor-react";

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
      <main>
        <form className={styles.formContainer}>
          <input placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={20} weight="bold" />
          </button>
        </form>
        <div>
          <div>
            <p>Tarefas criadas</p>
            <span>5</span>
          </div>
          <div>
            <p>Concluídas</p>
            <span>2 de 5</span>
          </div>
        </div>
        <div className="">
          {tasks.map((task) => {
            return <div>{task.title}</div>;
          })}
        </div>
      </main>
    </div>
  );
};
