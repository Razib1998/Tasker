import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskSearch from "./TaskSearch";
import TaskTable from "./TaskTable";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const handleAddTask = () => {};

  const [tasks, setTasks] = useState([defaultTask]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section className="mb-20" id="tasks">
        {isOpen && <AddTaskModal setIsOpen={setIsOpen} />}
        <div className="container">
          <TaskSearch />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddTask={() => setIsOpen(true)} />
            <TaskTable tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
