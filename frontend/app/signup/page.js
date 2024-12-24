"use client";

import Link from "next/link";
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
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-start"
    >
      <div>
        <h1>Create an account</h1>
        <span className="text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-red-primary underline">
            Login
          </Link>
        </span>
      </div>
      <div className="flex flex-col w-80">
        <label className="text-black-tertiary">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          className="py-1 px-2 border border-black-fifth outline-none rounded"
        />
        <div>{errors.email ? errors.email.message : "\u00A0"}</div>
      </div>
      <div className="flex flex-col w-80">
        <label className="text-black-tertiary">Password</label>
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
          className="py-1 px-2 border border-black-fifth outline-none rounded"
        />
        <div>{errors.password ? errors.password.message : "\u00A0"}</div>
      </div>
      <button
        className="bg-black-primary text-white-primary py-2 px-8 rounded"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}
