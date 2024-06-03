// import { Tabs, Tab, TabPanels, TabPanel, TabList } from "../components/Tabs";
import { Question } from "../components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Quiz() {
  return (
    <div className="flex gap-x-5">
      <div className="w-3/5">
        <div className="card flex justify-between mb-3">
          <div>
            <label htmlFor="q-count">Questions count</label>
            <input
              type="number"
              id="q-count"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label htmlFor="m-count">Modules count</label>
            <input
              type="number"
              id="m-count"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-semibold text-2xl mb-3">Questions</h1>
          <button className="btn btn-blue">Generate modules</button>
        </div>

        <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
       
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Input id="new" type="password" />
            </div>
          </CardContent>
       
        </Card>
      </TabsContent>
    </Tabs>

        <Question question="What is the capital of Nigeria?" points={10} />
        <Question question="What is the capital of Ghana?" points={10} />
        <Question question="What is the capital of Kenya?" points={10} />
      </div>
      <div className="w-2/5">
        <h1 className="font-semibold text-2xl mb-3">Meta data</h1>
        <div className="card">
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-input" />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duration">Duration(mins)</label>
            <input
              type="number"
              name="duration"
              id="duration"
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grade">Grade</label>
            <input
              type="number"
              name="grade"
              id="grade"
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="start_date">Start Date</label>
            <input
              type="datetime-local"
              name="start_date"
              id="start_date"
              className="form-input"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="end_date">End Date</label>
            <input
              type="datetime-local"
              name="end_date"
              id="end_date"
              className="form-input"
            />
          </div>
          <button className="btn btn-blue">Create Exam</button>
        </div>
      </div>
    </div>
  );
}
