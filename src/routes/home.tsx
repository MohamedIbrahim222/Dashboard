import { useState } from "react";
import { Modal, Drawer } from "../components";
import { Link } from "react-router-dom";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Drawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div>
          <button className="btn btn-green block w-full mb-3">From excel</button>
          <Link to={'/quiz'} className="btn btn-blue block w-full text-center">Generate from bank</Link>
        </div>
      </Drawer>
      <Modal open={modalOpen} setOpen={setModalOpen} title="Create quiz">
        <div className="flex justify-center mt-3">
          <Link
            type="button"
            className="btn btn-blue mr-3"
            to={'exames'}
          >
            Show past exames
          </Link>
          <button
            type="button"
            className="btn btn-green"
            onClick={() => {
                setDrawerOpen(true);
                setModalOpen(false);
            }}
          >
            Create new
          </button>
        </div>
      </Modal>
      <div className="max-w-xs flex flex-col">
        <button
          onClick={() => setModalOpen(true)}
          type="button"
          className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
        >
          Pharma
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
        >
          Engineering
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
        >
          Nursing
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
        >
          Physiology
        </button>
      </div>
    </div>
  );
}