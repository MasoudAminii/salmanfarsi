"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleSubmit } from "./actions";
import { useTranslations } from "next-intl";
import { Input, Textarea } from "@nextui-org/react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export function ContactForm() {
  const t = useTranslations("ContactUsPage");
  const [state, formAction] = useFormState(handleSubmit, {
    success: "",
    error: "",
  });

  return (
    <form action={formAction}>
      <div className="Form-Container md mt-6 flex flex-col gap-4 rounded-2xl p-6 py-8 shadow-lg shadow-gray-400">
        <p className="text-xl font-bold capitalize text-[var(--secondary-color)]">
          {t("contact.form.getintouch")}
        </p>
        <div className="Inputs flex flex-wrap gap-4 md:flex-nowrap">
          <Input
            variant="faded"
            type="text"
            name="name" // Add name attribute
            label={t("contact.form.name")}
          />
          <Input
            variant="faded"
            type="email"
            name="email" // Add name attribute
            label={t("contact.form.email")}
          />
        </div>
        <div className="Textarea">
          <Textarea
            variant="faded"
            name="message" // Add name attribute
            label={t("contact.form.message.label")}
            placeholder={t("contact.form.message.placeholder")}
            minRows={7}
            className="w-full"
          />
        </div>
        <div className="Submit">
          <SubmitButton t={t} />
        </div>
        <div className="error">
          {state?.success && (
            <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
              <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="font-medium">{state.success}</p>
              </div>
            </div>
          )}

          {state?.error && (
            <div className="flex items-center gap-3 rounded-lg bg-red-50 p-4 text-red-800">
              <FiAlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-medium">{state.error}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

function SubmitButton({ t }) {
  const { pending } = useFormStatus();

  return (
    <div className="Submit">
      <button
        type="submit"
        disabled={pending}
        className={`w-fit rounded-[100px] bg-[#EAF3F8] px-6 py-4 text-sm font-bold uppercase text-[var(--secondary-color)] transition-all duration-300 hover:bg-[#635ad9] hover:text-white ${
          pending ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        {pending ? t("contact.form.submitting") : t("contact.form.submit")}
      </button>
    </div>
  );
}
