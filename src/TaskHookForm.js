import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TaskHookForm({ kisiler, submitFn }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: { title: "", description: "", people: [], date: "" },
  });
  const onSubmit = (data) => {
    submitFn({ ...data, id: nanoid(5), status: "yapılacak" });
  };
  const notify = () => toast("Yeni görevinde başarılar dilerim!");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="taskForm">
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          name="title"
          type="text"
          {...register("title", {
            required: "Başlık alanı boş bırakılamaz !",
            minLength: {
              value: 3,
              message: "Başlık alanı en az 3 karakter içerlemlidir.",
            },
          })}
        />
        {errors.title && <p className="input-error">{errors.title.message}</p>}
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          name="description"
          {...register("description", {
            required: "Task açıklaması yazmalısınız",
            minLength: {
              value: 10,
              message: "Task açıklaması en az 10 karakter olmalı",
            },
          })}
        ></textarea>
        {errors.description && (
          <p className="input-error">{errors.description.message}</p>
        )}
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
                {...register("people", {
                  required: "En az 1 kişi seçilmeli",
                  minLength: { value: 1, message: "En az 1 kişi seçilmeli" },
                })}
              />
              {p}
            </label>
          ))}
        </div>
        {errors.people && (
          <p className="input-error">{errors.people.message}</p>
        )}
      </div>
      <div className="form-line">
        <label className="input-label" htmlFor="date">
          Tarih
        </label>
        <input
          className="input-text"
          id="date"
          name="date"
          type="date"
          {...register("date", {
            required: "Tarih alanı boş bırakılamaz !",
            minLength: {
              value: 6,
              message: "Tarih alanı en az 6 karakter içerlemlidir.",
            },
          })}
        />
        {errors.date && <p className="input-error">{errors.date.message}</p>}
      </div>

      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
          onClick={notify}
        >
          Kaydet
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}
