//2 way binding --- state change ui or ui change state {writing in notes change usestate and usestate change ui by showing notes}

import "./index.css";
import { useState } from "react";

const App = () => {

  const user = {
    age:"18",
    name:"navtej singh"
  }

  localStorage.setItem("user",JSON.stringify(user))
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    e.preventDefault();

    setTitle("");
    setDetails("");
  };

  const deleteNotes = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };


  return (
    <div
      className=" bg-mist-800 border-2 p-2.5 flex max-h-full
      min-h-screen"
    >
      <form
        className=" border-r-4 flex flex-col w-1/2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h2 className="flex justify-center font-bold text-3xl">Add notes</h2>

        <input
          className="m-3 p-1.5 border rounded-sm text-gray-400  "
          type="text"
          value={title}
          placeholder="add notes"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          className=" m-3 p-1.5 rounded-sm border text-gray-400"
          id=""
          type="text"
          value={details}
          placeholder="write details"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button
          className="border-2 rounded-lg m-3 p-1 active:bg-gray-300 "
          type="submit"
        >
          Add Notes
        </button>
      </form>
      <div className=" w-1/2 h-screen">
        <h1 className="flex justify-center font-bold text-3xl ">Your Notes</h1>
        <div className="m-3   h-full flex flex-wrap gap-1 flex-row">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" bg-[url('https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')] bg-cover bg-white m-1 p-3.5  rounded-2xl w-40 h-52 "
              >
                <h3 className="font-bold text-2xl pt-2">{elem.title} </h3>
                <p className="text-gray-400 pt-4">{elem.details}</p>
                <div className="h-2/4 flex flex-col justify-end ">
                  <button
                    onClick={() => {
                      deleteNotes(idx);
                    }}
                    className=" bg-red-500 rounded-sm active:scale-50 text-white "
                  >
                    Delete
                  </button>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
