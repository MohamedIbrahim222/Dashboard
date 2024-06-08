import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Api from "../Api";
import { useToast } from "@/components/ui/use-toast"
import { Modal } from "@/components";

export default function Quiz() {
  const [questionCount, setQuestionCount] = useState(1);
  const [modulesCount, setModulesCount] = useState(1);
  const [modules, setModules] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [metaData, setMetaData] = useState({name: '', description: '', duration: 0, grade: 0, startedDate: '', closedAt: ''});
  const {toast} = useToast();

  const courseId = "e9d0d03b-334a-4e75-80d2-4a6af2551a62";
  const instructorId = "45fcd16d-64ee-455e-b140-369f2c5856db";
  const quizId = "bcd17d43-ab1d-4d97-b925-c389d36cc688";

  async function generateModules() {
    const data = await Api.post(
      `/Api/V0.1/courses/${courseId}/instructors/${instructorId}/modules/GenerateModules`,
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
    await Api.post(
      `/Api/V0.1/courses/${courseId}/instructors/${instructorId}/quizzes/createquiz`, metaData, {
        headers: {
        "Content-Type": "multipart/form-data",
      }});
      toast({title: 'Quize created', description: 'Quiz created successfully.'})
      setMetaData({name: '', description: '', duration: 0, grade: 0, startedDate: '', closedAt: ''});
      setModalOpen(true);
  }

  async function publishQuize() {
    await Api.post(`/Api/V0.1/courses/${courseId}/instructors/${instructorId}/quizzes/${quizId}/publish`,{
      isManual: false
    }, {
      headers: {
      "Content-Type": "multipart/form-data",
    }});
    setModalOpen(false);
  }


  return (
    <div className="flex gap-x-5">
      <Modal open={modalOpen} setOpen={setModalOpen} title="publish quiz">
        <div className="flex items-center p-5">
          <button className="btn btn-gray mr-5" onClick={() => setModalOpen(false)}>Save as draft</button>
          <button className="btn btn-blue" onClick={() => publishQuize()}>Publish</button>
        </div>
      </Modal>
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
            <input type="text" name="name" id="name" className="form-input" 
              value={metaData.name} 
              onChange={e => setMetaData(prevState => ({
                ...prevState,
                name: e.target.value
              }))} />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-input"
              value={metaData.description}
              onChange={e => setMetaData((prevState) => ({
                ...prevState,
                description: e.target.value
              }))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duration">Duration(mins)</label>
            <input
              type="number"
              name="duration"
              id="duration"
              className="form-input"
              value={metaData.duration}
              onChange={e => setMetaData((prevState) => ({
                ...prevState,
                duration: Number(e.target.value)
              }))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grade">Grade</label>
            <input
              type="number"
              name="grade"
              id="grade"
              className="form-input"
              value={metaData.grade}
              onChange={e => setMetaData((prevState) => ({
                ...prevState,
                grade: Number(e.target.value)
              }))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="start_date">Start Date</label>
            <input
              type="datetime-local"
              name="start_date"
              id="start_date"
              className="form-input"
              value={metaData.startedDate}
              onChange={e => setMetaData((prevState) => ({
                ...prevState,
                startedDate: e.target.value
              }))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="end_date">End Date</label>
            <input
              type="datetime-local"
              name="end_date"
              id="end_date"
              className="form-input"
              value={metaData.closedAt}
              onChange={e => setMetaData((prevState) => ({
                ...prevState,
                closedAt: e.target.value
              }))}
            />
          </div>
          <button className="btn btn-blue" onClick={createQuiz}>Create Exam</button>
        </div>
      </div>
    </div>
  );
}
