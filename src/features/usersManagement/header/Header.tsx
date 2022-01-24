import { useEffect, useRef, useState } from "react";
import { useCreateUserMutation } from "../api/ReqresApi";
import { User } from "../interface/User";
import "./Header.css";

export function Header() {
  let [hidden, setHidden] = useState(true);
  let [
    mutationTrigger,
    { data: userDataResponse, isLoading, isError, isSuccess, isUninitialized, error },
  ] = useCreateUserMutation();

  let submitForm = (event: any) => {
    let name: string = event.target.name.value;
    let job: string = event.target.job.value;
    let user: Partial<User> = {
      name: name,
      job: job,
    };
    event.preventDefault();
    console.log("nono");
    mutationTrigger(user);
    setHidden(false);
  };

  useEffect(() => {
    //   console.log('error: ' + JSON.stringify(error));
    if (isError && error != undefined) {
      if ("status" in error) {
        console.log("error...." + error?.status);
      }
    }
  });

  return (
    <div className="header">
      <form onSubmit={submitForm}>
        <input className="inputText" type="text" name="name" />
        <input className="inputText" type="text" name="job" />
        <input className="inputBtn" type="submit" value="Create User" />
      </form>
      <div>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error...</span>}
        {isSuccess && <span>Success... {JSON.stringify(userDataResponse)}</span>}
        {isUninitialized && <span>Uninitialized...</span>}
      </div>
    </div>
  );
}
