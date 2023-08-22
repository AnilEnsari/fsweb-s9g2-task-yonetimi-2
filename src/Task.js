import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const notify = () => toast("Tebrikler bir görevi daha başarıyla tamamladın!");
  // const resultDate = () =>

  const result = () => {
    const day = differenceInDays(
      new Date(taskObj.date.split("-").toString(",")),
      new Date()
    );
    return day;
  };

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div>son teslim:{result()}</div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <div>
          <button
            onClick={() => {
              onComplete(taskObj.id);
              notify();
            }}
          >
            Tamamlandı
          </button>

          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Task;
