import React, { useState } from "react";
import NewTodo from "../TodoApp/NewTodo";

const Student = () => {
  const [student, setStudent] = useState(true);

  function crossFunction() {
    setStudent(false);
  }

  function addUser() {
    setStudent(true);
  }

  {
    if (student) {
      return (
        <div className="mb-3">
          <div className="container homeTodo ">
            <h1 className="text-center ">Add an user</h1>
            <span>
              <i
                class="fa-sharp fa-regular fa-circle-xmark fa-2x"
                id="cross"
                onClick={crossFunction}
              ></i>
            </span>
            <NewTodo />
          </div>
        </div>
      );
    } else {
      return (
        <div className="containr col-md-12 text-center addUser">
          <button
            className="btn btn-outline-info text-center"
            onClick={addUser}
          >
            Add User
          </button>
        </div>
      );
    }
  }
};

export default Student;
