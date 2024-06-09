import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8085/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.data.token);
      setMessage("Login successful");
      console.log(response.data);
    } catch (error) {
      setMessage("Login failed");
      console.error(error);
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link to={"/reset"} className="text-sm font-semibold text-blue-500">
              Reset password
            </Link>
          </div>
          <div className="mb-3">
            <div className="sm:col-span-9">
              <div className="sm:flex">
                <label
                  htmlFor="doctor"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="radio"
                    name="role"
                    value="Doctor"
                    id="doctor"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Doctor
                  </span>
                </label>

                <label
                  htmlFor="admin"
                  className="flex py-2 px-3 w-full border border-gray-200 shadow-sm text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <input
                    type="radio"
                    name="role"
                    value="Admin"
                    id="admin"
                    className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                    Admin
                  </span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <button
            type="submit"
            className="btn btn-blue block w-full flex justify-center mt-3"
          >
            Sign in
          </button>
          {message && <p>{message}</p>}
        </CardFooter>
      </form>
    </Card>
  );
}
