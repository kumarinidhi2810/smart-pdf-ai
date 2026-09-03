import { useState, useEffect } from "react";

import UploadHeader from "../../components/upload/UploadHeader";
import UploadBox from "../../components/upload/UploadBox";
import UploadTips from "../../components/upload/UploadTips";
import SelectedFileCard from "../../components/upload/SelectedFileCard";
import { extractTextFromMultiplePDFs } from "../../services/pdfExtractor";
function UploadPdf() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (selectedFiles) => {
    console.log("PARENT RECEIVED:", selectedFiles);

    setFiles((prev) => {
      const updatedFiles = [...prev, ...selectedFiles];

      console.log("UPDATED STATE:", updatedFiles);

      return updatedFiles;
    });
  };

  useEffect(() => {
    console.log("FILES STATE CHANGED:", files);
  }, [files]);

  const removeFile = (index) => {
    setFiles((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };
  const handleGenerateSummary = async () => {
  if (files.length === 0) return;

  try {
    console.log("Starting PDF text extraction...");

    const extractedPDFs =
      await extractTextFromMultiplePDFs(files);

    console.log("EXTRACTED PDF TEXT:", extractedPDFs);

  } catch (error) {
    console.error(
      "Summary generation error:",
      error
    );
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <UploadHeader />

      <UploadBox onFileSelect={handleFileUpload} />

      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Total Selected Files: {files.length}
      </p>

      <UploadTips />

      <SelectedFileCard
        files={files}
        onRemove={removeFile}
        onGenerateSummary={handleGenerateSummary}
      />
    </div>
  );
}

export default UploadPdf;