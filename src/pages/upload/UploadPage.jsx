import { useState } from "react";
import { Container } from "@mui/material";

import DashboardLayout from "../../layouts/DashboardLayout";
import UploadHeader from "../../components/upload/UploadHeader";
import UploadBox from "../../components/upload/UploadBox";
import SelectedFileCard from "../../components/upload/SelectedFileCard";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <DashboardLayout>
      <Container maxWidth="lg">
        <UploadHeader />

        <UploadBox onFileSelect={handleFileSelect} />

        {selectedFile && (
          <SelectedFileCard
            file={selectedFile}
            onRemove={handleRemoveFile}
          />
        )}
      </Container>
    </DashboardLayout>
  );
}

export default UploadPage;