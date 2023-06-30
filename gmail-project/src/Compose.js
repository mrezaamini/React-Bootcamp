import React from "react";
import "./Compose.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeCompose } from "./features/mailSlice";

function Compose() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const dispatch = useDispatch();

  return (
    <div className="compose">
      <div className="compose__header">
        <h3>New Message</h3>
        <CloseIcon
          className="compose__close"
          onClick={() => dispatch(closeCompose())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="compose__error">To field is required!</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="compose__error">Subject field is required!</p>
        )}
        <input
          type="text"
          placeholder="Message..."
          className="compose__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="compose__error">Message field is required!</p>
        )}

        <div className="compose__button">
          <Button
            className="compose__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Compose;
