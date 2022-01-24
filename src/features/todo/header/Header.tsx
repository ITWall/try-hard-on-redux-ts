import { selectTask, Task, TaskSlice } from "../slice/Task";
import "./Header.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import GithubAPI, { useGetUserByNameMutation } from "../api/GithubAPI";

export function Header() {

    const dispatch = useAppDispatch();
    const selector = useAppSelector(selectTask);

    let createTask = (event: any) => {
        event.preventDefault();
        let titleInput: string = event.target.titleInput.value;
        let contentInput: string = event.target.contentInput.value;
        let uuid = uuidv4();
        let task: Task = {
            id: uuid,
            title: titleInput,
            content: contentInput,
            createdDate: new Date().toString(),
            finishDate: "",
            status: "in progress"
        };
        
        dispatch(TaskSlice.actions.createTask(task));
    }
    console.log(selector);
    
    const[fetchData, userData] = useGetUserByNameMutation();
    
    console.log(userData);
    
    

  return (
    <div id="myDIV" className="header">
      <h2 style={{ margin: "5px" }}>My To Do List</h2>
      <form onSubmit={createTask}>
        <input type="text" name="titleInput" placeholder="Title..." />
        <input type="text" name="contentInput" placeholder="Content..." />
        <input type="submit" value="Add" className="addBtn"></input>
      </form>
      
      <button onClick={() => {fetchData('defunkt')}}>Fetch</button>
    </div>
  );
}
