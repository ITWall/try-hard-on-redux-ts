import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Todo } from "./features/todo/Todo";
import { TaskTable } from "./features/todo/taskTable/TaskTable";
import { UserTable } from "./features/usersManagement/userTable/UserTable";
import { Header as UserHeader} from "./features/usersManagement/header/Header";
import { Header as TaskHeader}  from "./features/todo/header/Header";
import { ExtraUserTable } from "./features/usersManagement/userTable/ExtraUserTable";

function App() {
  return (
    <div>
      <UserHeader />
      <UserTable />
      <TaskHeader/>
      <TaskTable/>
    </div>
  );
}

export default App;
