import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const extractTextFromPDF = async (file) => {
  try {
    console.log(`\n========== ${file.name} ==========`);

    const arrayBuffer = await file.arrayBuffer();

    console.log("PDF ArrayBuffer loaded:", arrayBuffer.byteLength);

    const loadingTask = pdfjsLib.getDocument({
      data: arrayBuffer,
    });

    const pdf = await loadingTask.promise;

    console.log("PDF loaded successfully");
    console.log("Total pages:", pdf.numPages);

    let extractedText = "";

    for (
      let pageNumber = 1;
      pageNumber <= pdf.numPages;
      pageNumber++
    ) {
      console.log(`Reading Page ${pageNumber}...`);

      const page = await pdf.getPage(pageNumber);

      const textContent = await page.getTextContent();

      console.log(
        `Page ${pageNumber} text items:`,
        textContent.items.length
      );

      console.log(
        `Page ${pageNumber} items:`,
        textContent.items
      );

      const pageText = textContent.items
        .map((item) => {
          if ("str" in item) {
            return item.str;
          }

          return "";
        })
        .filter(Boolean)
        .join(" ");

      console.log(
        `Page ${pageNumber} extracted text:`,
        pageText
      );

      extractedText += pageText + "\n";
    }

    const finalText = extractedText.trim();

    console.log(
      `FINAL TEXT FOR ${file.name}:`,
      finalText
    );

    return finalText;

  } catch (error) {
    console.error(
      `Error extracting text from ${file.name}:`,
      error
    );

    return "";
  }
};


export const extractTextFromMultiplePDFs = async (files) => {
  const extractedPDFs = [];

  for (const file of files) {
    console.log(
      "Starting extraction for:",
      file.name
    );

    const text = await extractTextFromPDF(file);

    extractedPDFs.push({
      fileName: file.name,
      text,
    });
  }

  return extractedPDFs;
};