import { Drawer, Modal } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PastExams() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const courseId = "e9d0d03b-334a-4e75-80d2-4a6af2551a62";
  const instructorId = "45fcd16d-64ee-455e-b140-369f2c5856db";

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          `/Api/V0.1/courses/${courseId}/instructors/${instructorId}/quizzes/AllInstructorQuizzes`
        );
        setQuizzes(response.data.data || []);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuizzes();
  }, [courseId, instructorId]);

  const mockQuizzes = [
    {
      id: 1,
      name: "Quiz 1",
      description: "This is the frist quiz of farma .",
      type: "Multiple Choice",
      totalQuestions: 20,
    },
    {
      id: 2,
      name: "Quiz 2",
      description: "This is the second quiz of farma.",
      type: "True/False",
      totalQuestions: 15,
    },
  ];

  return (
    <div>
    <div className="flex justify-evenly mb-3">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <p className="pl-3">Number of stutends in course</p>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <span className="font-semibold text-3xl text-blue-600">420</span>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <p className="pl-3">Number of assignments</p>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <span className="font-semibold text-3xl text-blue-600">4</span>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>

            <p className="pl-3">Number of exams</p>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <span className="font-semibold text-3xl text-blue-600">2</span>
        </CardContent>
      </Card>
  </div>
    <div className="bg-white shadow p-5 rounded-md">
    <Drawer open={drawerOpen} setOpen={setDrawerOpen}>
      <div>
        <button className="btn btn-green block w-full mb-3" onClick={() => setModalOpen(true)}>From excel</button>
        <Link to={'/quiz'} className="btn btn-blue block w-full text-center">Generate from bank</Link>
      </div>
    </Drawer>
    <Modal open={modalOpen} setOpen={setModalOpen} title="Create quiz">
      <div className="mt-3">
        <div className="mb-3">
          <label className="font-semibold">Select file</label>
          <input type="file" className="form-input" />
        </div>
        <label className="block mb-3">
          <input type="checkbox" />
          <span className="ml-2 font-semibold">save in bank</span>
        </label>
        <button
          type="button"
          className="btn btn-blue"
          onClick={() => {
              setDrawerOpen(true);
          }}
        >
          Upload
        </button>
      </div>
    </Modal>
      <div className="flex justify-end">
        <button onClick={() => setDrawerOpen(true)} className="btn btn-blue">Create new exam</button>
      </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quiz Name</TableHead>
              <TableHead>Quiz Description</TableHead>
              <TableHead>Quiz Type</TableHead>
              <TableHead className="text-right">Total Questions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  {error}
                </TableCell>
              </TableRow>
            ) : quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.name}</TableCell>
                  <TableCell>{quiz.description}</TableCell>
                  <TableCell>{quiz.type}</TableCell>
                  <TableCell className="text-right">
                    {quiz.totalQuestions}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              mockQuizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.name}</TableCell>
                  <TableCell>{quiz.description}</TableCell>
                  <TableCell>{quiz.type}</TableCell>
                  <TableCell className="text-right">
                    {quiz.totalQuestions}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}