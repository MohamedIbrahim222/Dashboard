// import { Tabs, Tab, TabPanels, TabPanel, TabList } from "../components/Tabs";
import { Question } from "../components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

export default function Quiz() {
  const [questionCount, setQuestionCount] = useState(1);
  const [modulesCount, setModulesCount] = useState(1);
  const [modules, setModules] = useState([]);

  const [metaData, setMetaData] = useState({name: '', description: '', duration: 0, grade: 0, startedDate: '', closedAt: ''});

  const courseId = "e9d0d03b-334a-4e75-80d2-4a6af2551a62";
  const instructorId = "45fcd16d-64ee-455e-b140-369f2c5856db";

  async function generateModules() {
    const data = await axios.post(
      `http://localhost:5257/Api/V0.1/courses/${courseId}/instructors/${instructorId}/modules/GenerateModules`,
      {
        numberOfModules: modulesCount,
        numberOfQuestionPerModule: questionCount,
        questionBank: "",
        isSaveUploadedQuestions: false,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setModules(data.data);
  }

  async function createQuiz() {
    const data = await axios.post(
      `http://localhost:5257/Api/V0.1/courses/${courseId}/instructors/${instructorId}/quizzes/createquiz`);

  }

  return (
    <div className="flex gap-x-5">
      <div className="w-3/5">
        <div className="card flex justify-between mb-3">
          <div>
            <label htmlFor="q-count">Questions count</label>
            <Input
              type="number"
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="m-count">Modules count</label>
            <Input
              type="number"
              value={modulesCount}
              onChange={(e) => setModulesCount(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-semibold text-2xl mb-3">Questions</h1>
          <button className="btn btn-blue" onClick={generateModules}>
            Generate modules
          </button>
        </div>

        <Tabs defaultValue="account" className="w-xl">
          <TabsList className="grid w-full grid-cols-2">
            {modules?.data?.$values?.map((a) => (
              <TabsTrigger key={a.name} value={a.name}>
                {a.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {modules?.data?.$values?.map((a) => (
            <TabsContent value={a.name} className="mt-10">
              {a.questions?.$values?.map((q) => (
                <Card className="mb-3">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{q.text}</CardTitle>
                    <span className="badge badge-blue">{q.points}</span>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
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
