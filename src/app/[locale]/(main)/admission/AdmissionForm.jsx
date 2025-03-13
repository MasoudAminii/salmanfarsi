"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StudentForm from "./(student)/StudentForm";
import FatherForm from "./(father)/FatherForm";
import MotherForm from "./(mother)/MotherForm";
import FinishedAdmission from "./FinishedAdmission";

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [step]);

  const nextStep = () => {
    setDirection("forward");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-2 border-b border-gray-200 pb-10 xs:gap-4 sm:mb-14">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center gap-2 xs:gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                s === step
                  ? "border-blue-600 bg-blue-100 text-blue-600"
                  : "border-gray-200 text-gray-400"
              }`}
            >
              {s}
            </div>
            {s !== 4 && <div className="h-1 w-8 bg-gray-200"></div>}
          </div>
        ))}
      </div>

      <form action="">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ opacity: 0, x: direction === "forward" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "forward" ? -100 : 100 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && <StudentForm />}
            {step === 2 && <FatherForm />}
            {step === 3 && <MotherForm />}
            {step === 4 && <FinishedAdmission />}
          </motion.div>
        </AnimatePresence>
      </form>
      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            className="rounded-md bg-gray-300 px-4 py-2 text-gray-700"
            onClick={prevStep}
          >
            Back
          </button>
        )}
        {step < 4 ? (
          <button
            className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
            Next Step
          </button>
        )}
      </div>
    </div>
  );
};

export default AdmissionForm;
