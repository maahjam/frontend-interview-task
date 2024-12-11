import React from 'react';
import { useState } from "react";
import Modal from "./Modal";
import useStore from "../store/useStore";
import Button from "./Button";


const ReportModal = () => {
  const addToast = useStore((state) => state.addToast);
  const [openModal, setOpenModal] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedReasons((prev) =>
      checked ? [...prev, value] : prev.filter((reason) => reason !== value)
    );
  };

  const reportPost = () => {
    addToast("Report has been submitted", "success");
    setOpenModal(false);
  };

  return (
    <>
      <Button
        title="Report"
        className="hover:border-red-500 text-white bg-cyan-700 dark:bg-gray-500"
        onClick={() => setOpenModal(true)}
      />
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Report Post"
        footer={
          <div className="flex justify-start items-center gap-2">
            <Button
              title="Report"
              className="bg-cyan-700 dark:bg-gray-500 text-white"
              onClick={reportPost}
            />
            <Button
              title="Cancel"
              className="bg-cyan-700 dark:bg-gray-500 text-white"
              onClick={() => setOpenModal(false)}
            />
          </div>
        }
      >
        <h1 className="font-bold">Please provide a reason for reporting this post</h1>
        <div className="flex flex-col gap-2 m-3">
          {["Offensive Content", "Harassment or Bullying", "Spam or Fake Content", "Copyright Violation", "Misinformation"].map((reason) => (
            <label key={reason} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={reason}
                checked={selectedReasons.includes(reason)}
                onChange={handleCheckboxChange}
              />
              {reason.replace("-", " ").toUpperCase()}
            </label>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default ReportModal;
