import "./global.css";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle, Trash } from "phosphor-react";
import { TaskCard } from "./components/TaskCard";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

const tasks = [
  {
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    isComplete: true,
    id: uuidv4(),
  },
  {
    title:
      "Quae dolore odio iure facilis ipsam nisi omnis quisquam quibusdam corrupti quod, officia, id, mollitia quia earum vero.",
    isComplete: false,
    id: uuidv4(),
  },
  {
    title: "Accusamus laudantium nisi ullam!",
    isComplete: false,
    id: uuidv4(),
  },
];
export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
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
            return <TaskCard key={task.id} title={task.title} />;
          })}
        </div>
      </div>
    </div>
  );
};
