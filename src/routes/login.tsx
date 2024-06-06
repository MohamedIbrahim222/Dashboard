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
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <Input id="password" type="password" required />
          <Link to={"/reset"} className="text-sm font-semibold text-blue-500">
            reset password
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="mb-3">
          <div className="sm:col-span-9">
            <div className="sm:flex">
              <label
                htmlFor="af-account-gender-checkbox"
                className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <input
                  type="radio"
                  name="af-account-gender-checkbox"
                  className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="af-account-gender-checkbox"
                  checked
                />
                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Doctor
                </span>
              </label>

              <label
                htmlFor="af-account-gender-checkbox-other"
                className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              >
                <input
                  type="radio"
                  name="af-account-gender-checkbox"
                  className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  id="af-account-gender-checkbox-other"
                />
                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
                  Admin
                </span>
              </label>
            </div>
          </div>
        </div>
        <Link
          type="button"
          className="btn btn-blue block w-full flex justify-center mt-3"
          to={"/admin-home"}
        >
          Sing in
        </Link>
      </CardFooter>
    </Card>
  );
}
