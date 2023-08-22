import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatDistanceToNow } from "date-fns";
import trLocale from "date-fns/locale/tr";
import { differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const beforeAfter = differenceInDays(new Date(), new Date(taskObj.date));
  const result = formatDistanceToNow(new Date(taskObj.date), {
    locale: trLocale,
  });
  console.log(result);
  const notify = () => toast("Tebrikler bir görevi daha başarıyla tamamladın!");

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className={beforeAfter > 3 ? "asd" : "asdss"}>
        son teslim: {result}
        {beforeAfter > 0 ? " önce" : " sonra"}
      </div>
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
