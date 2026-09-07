const cleanText = (text) => {
  return text
    .replace(/\s+/g, " ")
    .trim();
};

const splitIntoSentences = (text) => {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 30);
};

export const generateSummary = (text) => {
  if (!text || text.trim().length === 0) {
    return "No readable text found in this PDF.";
  }

  const cleanedText = cleanText(text);

  const sentences = splitIntoSentences(cleanedText);

  if (sentences.length === 0) {
    return cleanedText.slice(0, 500);
  }

  const scoredSentences = sentences.map(
    (sentence, index) => ({
      sentence,
      index,
      score: sentence.split(" ").length,
    })
  );

  const summaryCount = Math.min(
    Math.max(3, Math.ceil(sentences.length * 0.2)),
    8
  );

  const selectedSentences = scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, summaryCount)
    .sort((a, b) => a.index - b.index)
    .map((item) => item.sentence);

  return selectedSentences.join(" ");
};

export const generateMultiplePDFSummaries = (pdfs) => {
  return pdfs.map((pdf) => ({
    fileName: pdf.fileName,
    summary: generateSummary(pdf.text),
  }));
};