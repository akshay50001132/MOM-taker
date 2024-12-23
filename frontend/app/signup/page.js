"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form values:", data);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const user = await res.json();
      console.log(user);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            maxLength: {
              value: 15,
              message: "Password must be at most 15 characters",
            },
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
