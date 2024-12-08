import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { Box } from "@mui/material";

export default function Contact() {
  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "6be34b9e-0b77-4555-ba86-394c3afcda7f";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: " AREEF PORTFOLIO",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // flexWrap: "wrap",
        backgroundImage: `url(${"https://aspireplacement.wordpress.com/wp-content/uploads/2019/07/contact-us.gif"})`,
        backgroundSize: "contain",
      }}
    >
      <form
        align={"center"}
        style={{ border: "2px solid black", height: "60%", width: "40%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend
          style={{ fontStyle: "italic", fontSize: "260%", backgroundColor: "" }}
        >
          𝓰𝓮𝓽 𝓲𝓷 𝓽𝓸𝓾𝓬𝓱
        </legend>
        <hr />
        <label style={{ color: "white" }} htmlFor="">
          𝖓𝖆𝖒𝖊
        </label>
        <input
          placeholder="ex:areef"
          style={{
            width: "80%",
            backgroundColor: "transparent",
            color: "black",
          }}
          type="text"
          {...register("name", { required: true })}
        />
        <br />
        <label style={{ color: "white" }} htmlFor="">
          𝓮𝓶𝓪𝓲𝓵
        </label>
        <input
          placeholder="ex:areef"
          style={{
            width: "80%",
            backgroundColor: "transparent",
            color: "black",
          }}
          type="email"
          {...register("email", { required: true })}
        />
        <br /> <label htmlFor="">MESSAGE</label>
        <textarea
          placeholder="ex:areef"
          style={{ backgroundColor: "transparent", color: "black" }}
          {...register("message", { required: true })}
        ></textarea>
        <br />
        <button type="submit">Submit Form</button>
        <br />
        <br />
        <label style={{ color: "white" }} htmlFor="">
          Response time 1-2 hrs day
        </label>
      </form>

      <div style={{color:'red',backgroundColor:'wheat'}}>{result}</div>
    </div>
  );
}
