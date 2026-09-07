import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import UploadHeader from "../../components/upload/UploadHeader";
import UploadBox from "../../components/upload/UploadBox";
import UploadTips from "../../components/upload/UploadTips";
import SelectedFileCard from "../../components/upload/SelectedFileCard";

import { extractTextFromMultiplePDFs } from "../../services/pdfExtractor";
import { generateMultiplePDFSummaries } from "../../services/generateSummary";

function UploadPdf() {
  const [files, setFiles] = useState([]);

  const navigate = useNavigate();

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

      // Step 1: Extract text from all PDFs
      const extractedPDFs =
        await extractTextFromMultiplePDFs(files);

      console.log(
        "EXTRACTED PDF TEXT:",
        extractedPDFs
      );

      // Only successfully processed PDFs
      const processedPDFs = extractedPDFs.filter(
        (pdf) => pdf.text && pdf.text.trim().length > 0
      );

      console.log(
        "SUCCESSFULLY PROCESSED PDFs:",
        processedPDFs
      );

      // Step 2: Save processed PDF information
      const existingDocuments = JSON.parse(
        localStorage.getItem("smartPdfDocuments") || "[]"
      );

      const newDocuments = processedPDFs.map((pdf) => {
        const wordCount = pdf.text
          .trim()
          .split(/\s+/)
          .filter(Boolean).length;

        return {
          fileName: pdf.fileName,
          wordCount,
          status: "processed",
          processedAt: new Date().toISOString(),
        };
      });

      localStorage.setItem(
        "smartPdfDocuments",
        JSON.stringify([
          ...existingDocuments,
          ...newDocuments,
        ])
      );

      // Step 3: Generate ONE combined summary
      const summaryResult =
        generateMultiplePDFSummaries(extractedPDFs);

      console.log(
        "GENERATED COMBINED SUMMARY:",
        summaryResult
      );

      // Step 4: Save generated summary
      const existingSummaries = JSON.parse(
        localStorage.getItem("smartPdfSummaries") || "[]"
      );

      const summaryRecord = {
        fileNames: summaryResult.fileNames,
        summary: summaryResult.summary,
        generatedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "smartPdfSummaries",
        JSON.stringify([
          ...existingSummaries,
          summaryRecord,
        ])
      );

      // Step 5: Go to Summary Page
      navigate("/summary", {
        state: {
          summaries: summaryResult,
        },
      });

    } catch (error) {
      console.error(
        "Summary generation error:",
        error
      );
    }
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "30px" }}>
        <UploadHeader />

        <UploadBox
          onFileSelect={handleFileUpload}
        />

        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Total Selected Files: {files.length}
        </p>

        <UploadTips />

        <SelectedFileCard
          files={files}
          onRemove={removeFile}
          onGenerateSummary={
            handleGenerateSummary
          }
        />
      </div>
    </DashboardLayout>
  );
}

export default UploadPdf;