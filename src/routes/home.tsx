import { useState } from "react";
import { Modal, Drawer } from "../components";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <Drawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div>
          <button
            className="btn btn-green block w-full mb-3"
            onClick={() => setModalOpen(true)}
          >
            From excel
          </button>
          <Link to={"/quiz"} className="btn btn-blue block w-full text-center">
            Generate from bank
          </Link>
        </div>
      </Drawer>
      <Modal open={modalOpen} setOpen={setModalOpen} title="Create quiz">
        <div className="mt-3">
          <div
            className={`mb-3 border-2 border-dashed border-gray-300 p-4 ${
              dragActive ? "border-blue-500" : ""
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleClickUpload}
          >
            {file ? (
              <p>{file.name}</p>
            ) : (
              <p>Drag and drop a file here, or click to select a file</p>
            )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
          </div>
          <label className="block mb-3">
            <input type="checkbox" />
            <span className="ml-2 font-semibold">save in bank</span>
          </label>
          <button type="button" className="btn btn-blue">
            Upload
          </button>
        </div>
      </Modal>
      <div className="flex justify-between gap-3">
        <Card
          className="overflow-hidden max-w-xs cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <div>
            <img
              src="https://www.teachtreefruits.com/wp-content/uploads/2023/03/6c9a136a729cbdce51a52f6430b127755741251d1.jpg"
              alt=""
            />
          </div>
          <CardFooter className="text-lg font-semibold pt-2">Pharma</CardFooter>
        </Card>

        <Card
          className="overflow-hidden cursor-pointer max-w-xs"
          onClick={() => setDrawerOpen(true)}
        >
          <div>
            <img
              src="https://www.teachtreefruits.com/wp-content/uploads/2023/03/6c9a136a729cbdce51a52f6430b127755741251d1.jpg"
              alt=""
            />
          </div>
          <CardFooter className="text-lg font-semibold pt-2">
            Engineering
          </CardFooter>
        </Card>

        <Card
          className="overflow-hidden max-w-xs cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <div>
            <img
              src="https://www.teachtreefruits.com/wp-content/uploads/2023/03/6c9a136a729cbdce51a52f6430b127755741251d1.jpg"
              alt=""
            />
          </div>
          <CardFooter className="text-lg font-semibold pt-2">
            Physiology
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
