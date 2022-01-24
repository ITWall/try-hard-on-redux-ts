import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectTask, Task, TaskSlice } from "../slice/Task";
import "./TaskTable.module.css";

export function TaskTable() {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  const taskUI: any[] = [];
  let deleteTask = (task: Task) => {
    dispatch(TaskSlice.actions.deleteTask(task));
  }
  let markFailedTask = (task: Task) => {
    dispatch(TaskSlice.actions.markFailedTask(task));
  }
  let markPassedTask = (task: Task) => {
    dispatch(TaskSlice.actions.markPassedTask(task));
  }
  tasks.forEach(task => {
    taskUI.push(
      <tr key={task.id}>
          <td className="centerTableData id">{task.id}</td>
          <td className="centerTableData">{task.title}</td>
          <td className="centerTableData">{task.content}</td>
          <td className="centerTableData">{task.createdDate}</td>
          <td className="centerTableData">{task.finishDate}</td>
          <td className="centerTableData">{task.status}</td>
          <td className="centerTableData">
            <div className="action">
              <span
                onClick={() => {
                  deleteTask(task);
                }}
                className="actionBtn deleteBtn"
              >
                X
              </span>
              <span
                onClick={() => {
                  markFailedTask(task);
                }}
                className="actionBtn failedBtn"
              >
                Failed
              </span>
              <span
                onClick={() => {
                  markPassedTask(task);
                }}
                className="actionBtn passedBtn"
              >
                Passed
              </span>
            </div>
          </td>
        </tr>
    )
  })
  return (
    <div>
      <table className="taskTable">
        <thead>
          <tr>
            <th className="id">ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Created Date</th>
            <th>Finish Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{taskUI}</tbody>
      </table>
    </div>
  );
}
