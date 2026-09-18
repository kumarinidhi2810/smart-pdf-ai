const cleanText = (text) => {
  if (!text) return "";

  return text
    .replace(/\s+/g, " ")
    .replace(/DFCCIL\s*\|\s*No-Due Management System/gi, "")
    .replace(/No-Due Management System\s*\|\s*DFCCIL/gi, "")
    .replace(/\bPage\s+\d+\b/gi, "")
    .replace(/\b\d+\s*\/\s*\d+\b/g, "")
    .trim();
};

const removeNoise = (text) => {
  if (!text) return "";

  return text
    .replace(/\bAGENDA\b/gi, "")
    .replace(/\bWHAT WE['’]?LL COVER\b/gi, "")
    .replace(/\bTHANK YOU\b/gi, "")
    .replace(/\bBIBLIOGRAPHY\b/gi, "")
    .replace(/\bDATASET\b/gi, "")
    .replace(/\bAPPLICATION INTERFACE\b/gi, "")
    .replace(/\bNO-DUE MANAGEMENT SYSTEM\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};

const removeRepeatedPhrases = (text) => {
  if (!text) return "";

  const phrases = [
    "Dept of MCA 2025 -26",
    "Dept of MCA 2025-26",
    "2025 -26",
    "2025-26",
    "No-Due Management System | DFCCIL",
    "DFCCIL | No-Due Management System",
  ];

  let result = text;

  phrases.forEach((phrase) => {
    result = result.replaceAll(phrase, "");
  });

  return result.replace(/\s+/g, " ").trim();
};

/*
 * Extract meaningful sentences.
 */
const getSentences = (text) => {
  if (!text) return [];

  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => {
      const words = sentence.split(/\s+/);

      return (
        words.length >= 8 &&
        words.length <= 55 &&
        sentence.length >= 60
      );
    });
};

/*
 * Remove sentences that are mainly slide headings,
 * labels or navigation text.
 */
const isUsefulSentence = (sentence) => {
  const lower = sentence.toLowerCase();

  const unwantedPatterns = [
    "what we'll cover",
    "key outcomes",
    "at a glance",
    "built with",
    "thank you",
    "bibliography",
    "dataset",
    "application interface",
    "home dashboard",
    "quick access",
    "page ",
  ];

  return !unwantedPatterns.some((pattern) =>
    lower.includes(pattern)
  );
};

/*
 * Score sentences according to their importance.
 */
const scoreSentence = (sentence) => {
  const text = sentence.toLowerCase();

  const keywords = [
    "project",
    "system",
    "developed",
    "designed",
    "digital",
    "employee",
    "clearance",
    "workflow",
    "role-based",
    "application",
    "react",
    "mui",
    "technology",
    "approval",
    "tracking",
    "certificate",
    "notification",
    "security",
    "localstorage",
    "internship",
    "future",
    "backend",
  ];

  let score = 0;

  keywords.forEach((keyword) => {
    if (text.includes(keyword)) {
      score += 2;
    }
  });

  /*
   * Prefer sentences that contain several words,
   * but don't allow very long extracted slide text.
   */
  const wordCount = sentence.split(/\s+/).length;

  if (wordCount >= 12 && wordCount <= 35) {
    score += 3;
  }

  if (wordCount > 45) {
    score -= 2;
  }

  return score;
};

/*
 * Creates a genuinely short summary from the
 * most meaningful extracted sentences.
 */
export const generateSummary = (text) => {
  if (!text || !text.trim()) {
    return "No readable text found in this PDF.";
  }

  let cleanedText = cleanText(text);
  cleanedText = removeNoise(cleanedText);
  cleanedText = removeRepeatedPhrases(cleanedText);

  if (!cleanedText) {
    return "No meaningful content found in this PDF.";
  }

  let sentences = getSentences(cleanedText);

  sentences = sentences.filter(isUsefulSentence);

  if (sentences.length === 0) {
    /*
     * Fallback for PDFs where sentence punctuation
     * was not preserved during extraction.
     */
    const words = cleanedText.split(/\s+/);

    return words.slice(0, 100).join(" ") + ".";
  }

  const scoredSentences = sentences.map((sentence, index) => ({
    sentence,
    index,
    score: scoreSentence(sentence),
  }));

  /*
   * Only 4–6 sentences are used.
   */
  const summaryCount = Math.min(
    Math.max(4, Math.ceil(scoredSentences.length * 0.1)),
    6
  );

  const selectedSentences = scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, summaryCount)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.sentence);

  return selectedSentences.join(" ");
};

/*
 * Multiple PDFs:
 * Combine all documents and create ONE overall summary.
 */
export const generateMultiplePDFSummaries = (pdfs) => {
  if (!pdfs || pdfs.length === 0) {
    return {
      fileNames: [],
      summary: "No PDF files found.",
    };
  }

  const validPDFs = pdfs.filter(
    (pdf) =>
      pdf &&
      pdf.text &&
      pdf.text.trim().length > 0
  );

  if (validPDFs.length === 0) {
    return {
      fileNames: pdfs.map((pdf) => pdf.fileName),
      summary: "No readable text found in the uploaded PDFs.",
    };
  }

  const combinedText = validPDFs
    .map((pdf) => pdf.text)
    .join(" ");

  const summary = generateSummary(combinedText);

  return {
    fileNames: pdfs.map((pdf) => pdf.fileName),
    summary,
  };
};