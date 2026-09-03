import { Chip } from "@mui/material";

function DocumentStatusChip({ status }) {
  const getStatusConfig = () => {
    switch (status) {
      case "Completed":
        return {
          label: "Completed",
          color: "success",
        };

      case "Processing":
        return {
          label: "Processing",
          color: "warning",
        };

      case "Failed":
        return {
          label: "Failed",
          color: "error",
        };

      default:
        return {
          label: "Unknown",
          color: "default",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <Chip
      label={config.label}
      color={config.color}
      size="small"
      variant="filled"
      sx={{
        borderRadius: "8px",
        fontWeight: 600,
      }}
    />
  );
}

export default DocumentStatusChip;