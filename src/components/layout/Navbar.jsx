import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Paper,
  Box,
  Typography,
  ClickAwayListener,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

function Navbar() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    const documents = JSON.parse(
      localStorage.getItem("smartPdfDocuments") || "[]"
    );

    const summaries = JSON.parse(
      localStorage.getItem("smartPdfSummaries") || "[]"
    );

    const documentResults = documents
      .filter((doc) =>
        doc.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((doc) => ({
        type: "document",
        title: doc.fileName,
        data: doc,
      }));

    const summaryResults = summaries
      .filter((item) =>
        item.fileNames?.some((name) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
      .map((item) => ({
        type: "summary",
        title: `${item.fileNames.length} PDFs Summary`,
        data: item,
      }));

    setResults([...documentResults, ...summaryResults].slice(0, 6));
    setOpen(true);
  }, [searchTerm]);

  const handleSelect = (item) => {
    setOpen(false);
    setSearchTerm("");

    if (item.type === "document") {
      navigate("/history");
    } else {
      navigate("/summary", {
        state: {
          summaries: item.data,
        },
      });
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid",
        borderColor: "grey.200",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          display: "flex",
          justifyContent: "flex-end",
          px: 3,
          position: "relative",
        }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box sx={{ position: "relative" }}>
            <TextField
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search documents..."
              sx={{
                width: 340,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#F8FAFC",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon
                      sx={{
                        fontSize: 20,
                        color: "text.secondary",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            {open && (
              <Paper
                elevation={6}
                sx={{
                  position: "absolute",
                  top: 48,
                  right: 0,
                  width: 340,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  zIndex: 1300,
                }}
              >
                {results.length === 0 ? (
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        fontSize: 13,
                        color: "#64748B",
                      }}
                    >
                      No matching documents found.
                    </Typography>
                  </Box>
                ) : (
                  results.map((item, index) => (
                    <Box
                      key={index}
                      onClick={() => handleSelect(item)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.5,
                        cursor: "pointer",
                        borderBottom:
                          index !== results.length - 1
                            ? "1px solid #EEF2F7"
                            : "none",
                        "&:hover": {
                          bgcolor: "#F8FAFC",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: 1.5,
                          bgcolor:
                            item.type === "document"
                              ? "#FEF2F2"
                              : "#F3EAFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.type === "document" ? (
                          <PictureAsPdfRoundedIcon
                            sx={{
                              color: "#E53935",
                              fontSize: 20,
                            }}
                          />
                        ) : (
                          <AutoAwesomeRoundedIcon
                            sx={{
                              color: "#7C3AED",
                              fontSize: 20,
                            }}
                          />
                        )}
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#172033",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: 11,
                            color: "#64748B",
                          }}
                        >
                          {item.type === "document"
                            ? "Processed Document"
                            : "AI Summary"}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                )}
              </Paper>
            )}
          </Box>
        </ClickAwayListener>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;