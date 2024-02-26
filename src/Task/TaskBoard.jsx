import TaskAction from "./TaskAction";
import TaskSearch from "./TaskSearch";
import TaskTable from "./TaskTable";

const TaskBoard = () => {
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          <TaskSearch />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <TaskTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
