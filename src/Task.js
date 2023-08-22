import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = ({ taskObj, onComplete }) => {
  const notify = () => toast("Tebrikler bir görevi daha başarıyla tamamladın!");

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
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
