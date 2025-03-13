"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckboxWithText } from "@/components/buttons/CheckboxWithText";
import { AF, IQ, IR, KZ, TJ } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaCalculator,
  FaChurch,
  FaFire,
  FaFlask,
  FaMosque,
  FaRegClipboard,
  FaRegIdBadge,
  FaStarOfDavid,
  FaTools,
} from "react-icons/fa";
import { GiBurningDot } from "react-icons/gi"; // For Zoroastrianism
import { IoClipboardOutline } from "react-icons/io5";
import {
  MdDriveFileRenameOutline,
  MdHelp,
  MdOutlineDateRange,
} from "react-icons/md";
import FileUpload from "./FileUpload";
import ProfileImage from "./ProfileImage";

const flags = [
  {
    flag: <IR title="Iran" className="ml-2 inline-block h-8 w-8" />,
    title: "Iran",
  },
  {
    flag: <AF title="Afghanistan" className="ml-2 inline-block h-8 w-8" />,
    title: "Afghanistan",
  },
  {
    flag: <KZ title="Kazakhstan" className="ml-2 inline-block h-8 w-8" />,
    title: "Kazakhstan",
  },
  {
    flag: <IQ title="Iraq" className="ml-2 inline-block h-8 w-8" />,
    title: "Iraq",
  },
  {
    flag: <TJ title="Tajikistan " className="ml-2 inline-block h-8 w-8" />,
    title: "Tajikistan",
  },
  {
    flag: <MdHelp size={28} />,
    title: "Other Nationality...",
  },
];

const educationLevel = [
  "1 Grade",
  "2 Grade",
  "3 Grade",
  "4 Grade",
  "5 Grade",
  "6 Grade",
  "7 Grade",
  "8 Grade",
  "9 Grade",
  "10 Grade",
  "11 Grade",
  "12 Grade",
];

const fieldOfStudy = [
  { title: "Mathematics and Physics", icon: <FaCalculator size={24} /> },
  { title: "Experimental Sciences", icon: <FaFlask size={24} /> },
  { title: "Humanities", icon: <FaBook size={24} /> },
  { title: "Technical and Vocational Education", icon: <FaTools size={24} /> },
];

const religionsInIran = [
  { title: "Islam (Shia)", icon: <FaMosque size={24} /> },
  { title: "Islam (Sunni)", icon: <FaMosque size={24} /> },
  { title: "Christianity", icon: <FaChurch size={24} /> },
  { title: "Judaism", icon: <FaStarOfDavid size={24} /> },
  { title: "Zoroastrianism", icon: <FaFire size={24} /> },
  { title: "Bahá'í Faith", icon: <GiBurningDot size={24} /> },
  { title: "Other", icon: <MdHelp size={28} /> },
];

const StudentForm = () => {
  // Initialize state for all form fields
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("studentFormData");
      return savedData
        ? JSON.parse(savedData)
        : {
            firstname: "",
            lastname: "",
            fathername: "",
            nationalcode: "",
            placeofbirth: "",
            date: "",
            nationality: "",
            religion: "",
            educationLevel: "",
            fieldOfStudy: "",
          };
    }
    return {
      firstname: "",
      lastname: "",
      fathername: "",
      nationalcode: "",
      placeofbirth: "",
      date: "",
      nationality: "",
      religion: "",
      educationLevel: "",
      fieldOfStudy: "",
    };
  });

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("studentFormData", JSON.stringify(formData));
    }, 500); // Delay saves to avoid unnecessary frequent updates

    return () => clearTimeout(timeout); // Cleanup function
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form">
      <div className="title mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Student Personal Information
          </span>
        </h2>
        <p className="mt-2 text-lg text-slate-500">
          Basic details about the student
        </p>
      </div>
      <div className="Photo">
        <ProfileImage />
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {/* First Name */}
        <div className="group relative space-y-1">
          <Label htmlFor="firstname" className="font-medium text-gray-700">
            First name
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              value={formData.firstname}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <MdDriveFileRenameOutline
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="group relative space-y-1">
          <Label htmlFor="lastname" className="font-medium text-gray-700">
            Last name
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              value={formData.lastname}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <MdDriveFileRenameOutline
              size={24}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Father's Name */}
        <div className="group relative space-y-1">
          <Label htmlFor="fathername" className="font-medium text-gray-700">
            Father's name
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="fathername"
              placeholder="Enter father's name"
              value={formData.fathername}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <FaRegClipboard
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* National Code */}
        <div className="group relative space-y-1">
          <Label htmlFor="nationalcode" className="font-medium text-gray-700">
            National code
          </Label>
          <div className="relative">
            <Input
              type="number"
              id="nationalcode"
              placeholder="Enter national code"
              value={formData.nationalcode}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all [appearance:textfield] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              required
            />
            <FaRegIdBadge
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Place of Birth */}
        <div className="group relative space-y-1">
          <Label htmlFor="placeofbirth" className="font-medium text-gray-700">
            Place of birth
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="placeofbirth"
              placeholder="Enter place of birth"
              value={formData.placeofbirth}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <IoClipboardOutline
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="group relative space-y-1">
          <Label htmlFor="date" className="font-medium text-gray-700">
            Date of birth
          </Label>
          <div className="relative">
            <Input
              id="date"
              type="date"
              className="date-input w-full appearance-none rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Select date"
              required
            />
            <MdOutlineDateRange
              size={22}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="Education-Background mt-10 border-t border-gray-200 pt-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              Education Background
            </span>
          </h2>
          <p className="mt-2 text-lg text-slate-500">
            Academic history and qualifications
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Nationality */}
          <div className="group space-y-2">
            <Label className="font-medium text-gray-700">Nationality</Label>
            <Select
              defaultValue={formData.nationality || ""}
              onValueChange={(value) =>
                handleSelectChange("nationality", value)
              }
            >
              <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 px-4 transition-colors group-focus-within:border-blue-500 group-hover:border-blue-200">
                <SelectValue
                  defaultValue={formData.nationality || "Select Nationality"}
                />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-blue-50 shadow-lg">
                {flags?.map((lang) => (
                  <SelectItem
                    key={lang.title}
                    value={lang.title}
                    className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-gray-700">{lang.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Religion */}
          <div className="group space-y-2">
            <Label className="font-medium text-gray-700">Religion</Label>
            <Select
              defaultValue={formData.religion || ""}
              onValueChange={(value) => handleSelectChange("religion", value)}
            >
              <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 px-4 transition-colors group-focus-within:border-blue-500 group-hover:border-blue-200">
                <SelectValue
                  defaultValue={formData.religion || "Select Religion"}
                />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-blue-50 shadow-lg">
                {religionsInIran?.map((religion) => (
                  <SelectItem
                    key={religion.title}
                    value={religion.title}
                    className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">{religion.icon}</span>
                      <span className="text-gray-700">{religion.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Education Level */}
          <div className="group space-y-2">
            <Label className="font-medium text-gray-700">Education Level</Label>
            <Select
              defaultValue={formData.educationLevel || ""}
              onValueChange={(value) =>
                handleSelectChange("educationLevel", value)
              }
            >
              <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 px-4 transition-colors group-focus-within:border-blue-500 group-hover:border-blue-200">
                <SelectValue
                  defaultValue={formData.religion || "Select Education Level"}
                />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-blue-50 shadow-lg">
                {educationLevel?.map((level) => (
                  <SelectItem
                    key={level}
                    value={level}
                    className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
                  >
                    <span className="text-gray-700">{level}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Field of Study */}
          <div className="group space-y-2">
            <Label className="font-medium text-gray-700">Field of Study</Label>
            <Select
              defaultValue={formData.fieldOfStudy || ""}
              onValueChange={(value) =>
                handleSelectChange("fieldOfStudy", value)
              }
            >
              <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 px-4 transition-colors group-focus-within:border-blue-500 group-hover:border-blue-200">
                <SelectValue
                  defaultValue={formData.nationality || "Select Field of Study"}
                />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-blue-50 shadow-lg">
                {fieldOfStudy?.map((field) => (
                  <SelectItem
                    key={field.title}
                    value={field.title}
                    className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600">{field.icon}</span>
                      <span className="text-gray-700">{field.title}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="Required-Documents">
        <FileUpload />
      </div>
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="rounded-lg bg-blue-50 p-6">
          <CheckboxWithText
            title="I agree to the terms and conditions of enrollment"
            description="By checking this box, I confirm all provided information is accurate and complete."
          />
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
