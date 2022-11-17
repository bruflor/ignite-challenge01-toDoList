import "./global.css";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import { TaskCard } from "./components/TaskCard";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { FormEvent, useEffect, useState } from "react";

export interface TasksProps {
  title: string;
  isComplete: boolean;
  id: string;
}
const initialTasks = [
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
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  function deleteTask(taskTitleToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.title !== taskTitleToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  if (newTask !== "") {
    const allNewTask = { title: newTask, isComplete: false, id: uuidv4() };
    setTasks([...tasks, allNewTask]);
    setNewTask("");
  }

  // function handleInputStatus(
  //   newStatus: boolean,
  //   taskId: string,
  //   taskTitle: string
  // ) {
  //   const tasksWithoutChangedTask = tasks.filter((task) => {
  //     return task.id !== taskId;
  //   });

  //   console.log(tasksWithoutChangedTask);
  //   tasksWithoutChangedTask.push({
  //     title: taskTitle,
  //     isComplete: newStatus,
  //     id: taskId,
  //   });

  //   setTasks(tasksWithoutChangedTask);

  //   console.log(newStatus);
  //   console.log(tasks);
  // }

  const updateTask = (taskId: string) => {
    //TODO: colect tasks
    //TODO: select task with some specific id or name
    //TODO: update the information from selected task
    //TODO: set the state with the updated data

    const tasksList = [...tasks];
    const taskToUpdateIndex = tasksList.findIndex((task) => task.id === taskId);

    tasksList[taskToUpdateIndex].isComplete =
      !tasksList[taskToUpdateIndex].isComplete;

    setTasks([...tasksList]);
  };

  const completedTasksFilter = tasks.filter((task) => task.isComplete === true);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <NewTask setNewTask={setNewTask} />
        <div className={styles.status}>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p className={styles.done}>Concluídas</p>
            <span>{`${completedTasksFilter.length} de ${tasks.length}`}</span>
          </div>
        </div>
        <div className={styles.tasksContainer}>
          {tasks.map((task) => {
            return (
              <TaskCard
                status={task.isComplete}
                key={task.id}
                id={task.id}
                title={task.title}
                onDeleteTask={deleteTask}
                onStatusChange={() => updateTask(task.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
