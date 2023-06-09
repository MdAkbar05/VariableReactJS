import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = todo;
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field mb-3">
        <label htmlFor="title" className="form-label">
          {props.title}:{" "}
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <label htmlFor="desc" className="form-label">
          {props.email}:{" "}
        </label>
        <textarea
          className="form-control"
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-outline-success " type="submit">
        {props.btnName}
      </button>
    </form>
  );
};

export default NewTodo;
