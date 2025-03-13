"use client";
import { useState, useEffect } from "react";
import { FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const FileUpload = () => {
  const defaultDocuments = [
    { name: "Emirates ID card", status: "idle", progress: 0, fileName: "" },
    { name: "Passport front page", status: "idle", progress: 0, fileName: "" },
    {
      name: "National ID card photo",
      status: "idle",
      progress: 0,
      fileName: "",
    },
    { name: "Identity card photo", status: "idle", progress: 0, fileName: "" },
    {
      name: "Academic degree translation",
      status: "idle",
      progress: 0,
      fileName: "",
    },
  ];

  // ✅ Step 1: Use state with default values (to avoid server-client mismatch)
  const [documents, setDocuments] = useState(defaultDocuments);
  const [isClient, setIsClient] = useState(false);

  // ✅ Step 2: Load localStorage data ONLY on the client (inside useEffect)
  useEffect(() => {
    setIsClient(true); // Mark component as client-side
    const savedData = localStorage.getItem("uploadedDocuments");
    if (savedData) {
      setDocuments(JSON.parse(savedData));
    }
  }, []);

  // ✅ Step 3: Save documents to localStorage whenever they change
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("uploadedDocuments", JSON.stringify(documents));
    }
  }, [documents, isClient]);

  const handleFileChange = async (index, file) => {
    if (!file) return;

    const validTypes = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "application/pdf",
    ];
    const maxSizeMB = 5;
    const maxSize = maxSizeMB * 1024 * 1024;

    if (!validTypes.includes(file.type)) {
      updateDocument(index, "error", 0, "Invalid file type");
      return;
    }

    if (file.size > maxSize) {
      updateDocument(index, "error", 0, `File too large (max ${maxSizeMB}MB)`);
      return;
    }

    updateDocument(index, "uploading", 0, file.name);

    try {
      await simulateUpload(file, (progress) => {
        updateDocument(index, "uploading", progress);
      });
      updateDocument(index, "success", 100);
    } catch (error) {
      updateDocument(index, "error", 0, "Upload failed");
    }
  };

  const updateDocument = (index, status, progress, fileName = "") => {
    setDocuments((prev) =>
      prev.map((doc, i) =>
        i === index ? { ...doc, status, progress, fileName } : doc,
      ),
    );
  };

  const simulateUpload = (file, onProgress) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.1;
        let progress = 0;

        const interval = setInterval(() => {
          if (shouldFail && progress > 50) {
            clearInterval(interval);
            reject("Upload failed");
            return;
          }

          progress += 10;
          onProgress(progress);

          if (progress >= 100) {
            clearInterval(interval);
            resolve("Upload successful");
          }
        }, 100);
      }, 500);
    });
  };

  return (
    <div className="Required-Documents mt-10 border-t border-gray-200 pt-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Required Documents
          </span>
        </h2>
        <p className="mt-2 text-lg text-slate-500">
          Upload scanned copies of the following documents
        </p>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, index) => (
          <div
            key={doc.name}
            className={`group relative rounded-xl border-2 border-dashed p-6 transition-all ${
              doc.status === "error"
                ? "border-red-100"
                : doc.status === "success"
                  ? "border-green-100"
                  : "border-blue-100"
            }`}
          >
            <label className="mb-4 block text-sm font-semibold text-gray-800">
              {doc.name}
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg bg-blue-50 px-6 py-8 transition-colors hover:bg-blue-100">
              <div className="relative">
                <FaUpload className="h-8 w-8 text-blue-600" />
                {doc.status === "success" && (
                  <FaCheckCircle className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-white text-green-500" />
                )}
                {doc.status === "error" && (
                  <FaTimesCircle className="absolute -right-2 -top-2 h-5 w-5 rounded-full bg-white text-red-500" />
                )}
              </div>

              <span className="text-center text-sm font-medium text-blue-700">
                {doc.fileName ? (
                  <span className="block max-w-[160px] truncate">
                    {doc.fileName}
                  </span>
                ) : (
                  "Click to upload"
                )}
              </span>

              <span className="text-xs text-blue-600/80">
                PNG, JPG, or PDF (max 5MB)
              </span>

              <input
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={(e) => handleFileChange(index, e.target.files?.[0])}
              />
            </label>

            <div className="mt-4 space-y-1">
              <div className="h-1.5 overflow-hidden rounded-full bg-blue-100">
                <div
                  className={`h-full transition-all duration-300 ${
                    doc.status === "error"
                      ? "bg-red-500"
                      : doc.status === "success"
                        ? "bg-green-500"
                        : "bg-blue-600"
                  }`}
                  style={{ width: `${doc.progress}%` }}
                />
              </div>

              {doc.status === "uploading" && (
                <p className="text-xs text-blue-600">
                  Uploading... {doc.progress}%
                </p>
              )}

              {doc.status === "success" && (
                <p className="text-xs text-green-500">Upload successful!</p>
              )}

              {doc.status === "error" && (
                <p className="text-xs text-red-500">
                  {doc.fileName || "Upload failed. Please try again."}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
