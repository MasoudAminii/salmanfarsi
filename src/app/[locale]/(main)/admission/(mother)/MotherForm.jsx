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
import { AF, IQ, IR, KZ, TJ } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaCalculator,
  FaRegClipboard,
  FaRegIdBadge,
  FaTools,
} from "react-icons/fa";
import {
  MdDriveFileRenameOutline,
  MdHelp,
  MdOutlineDateRange,
} from "react-icons/md";

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

const MotherForm = () => {
  const [formData, setFormData] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("motherFormData"); // Changed to motherFormData
      return savedData
        ? JSON.parse(savedData)
        : {
            firstname: "",
            lastname: "",
            nationalcode: "",
            date: "",
            nationality: "",
            certificateNumber: "",
            educationLevel: "",
            job: "",
            landline: "",
            phoneNumber: "",
            whatsappNumber: "",
            email: "",
            workAdress: "",
            personnelCode: "",
          };
    }
    return {
      firstname: "",
      lastname: "",
      nationalcode: "",
      date: "",
      nationality: "",
      certificateNumber: "",
      educationLevel: "",
      job: "",
      landline: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      workAdress: "",
      personnelCode: "",
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem("motherFormData", JSON.stringify(formData)); // Changed to motherFormData
    }, 500);

    return () => clearTimeout(timeout);
  }, [formData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div className="title mb-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
            Personal details of the student's Mother:
          </span>
        </h2>
        <p className="mt-2 text-lg text-slate-500">
          Basic details about the Mother
        </p>
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

        {/* Nationality */}
        <div className="group space-y-2">
          <Label className="font-medium text-gray-700">Nationality</Label>
          <Select
            defaultValue={formData.nationality || ""}
            onValueChange={(value) => handleSelectChange("nationality", value)}
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

        {/* Certificate Number */}
        <div className="group relative space-y-1">
          <Label
            htmlFor="certificateNumber"
            className="font-medium text-gray-700"
          >
            Certificate Number
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="certificateNumber"
              placeholder="Enter certificate number"
              value={formData.certificateNumber}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaRegClipboard
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
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
                defaultValue={
                  formData.educationLevel || "Select Education Level"
                }
              />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-2 border-blue-50 shadow-lg">
              <SelectItem
                value="diploma"
                className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
              >
                <span className="text-gray-700">Diploma</span>
              </SelectItem>
              <SelectItem
                value="bachelor"
                className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
              >
                <span className="text-gray-700">Bachelor's Degree</span>
              </SelectItem>
              <SelectItem
                value="master"
                className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
              >
                <span className="text-gray-700">Master's Degree</span>
              </SelectItem>
              <SelectItem
                value="phd"
                className="rounded-lg transition-colors hover:bg-blue-50 focus:bg-blue-100"
              >
                <span className="text-gray-700">PhD</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job */}
        <div className="group relative space-y-1">
          <Label htmlFor="job" className="font-medium text-gray-700">
            Job
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="job"
              placeholder="Enter job title"
              value={formData.job}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaTools
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Landline */}
        <div className="group relative space-y-1">
          <Label htmlFor="landline" className="font-medium text-gray-700">
            Landline Phone
          </Label>
          <div className="relative">
            <Input
              type="tel"
              id="landline"
              placeholder="Enter landline number"
              value={formData.landline}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaCalculator
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="group relative space-y-1">
          <Label htmlFor="phoneNumber" className="font-medium text-gray-700">
            Mobile Phone
          </Label>
          <div className="relative">
            <Input
              type="tel"
              id="phoneNumber"
              placeholder="Enter mobile number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
            <FaCalculator
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* WhatsApp Number */}
        <div className="group relative space-y-1">
          <Label htmlFor="whatsappNumber" className="font-medium text-gray-700">
            WhatsApp Number
          </Label>
          <div className="relative">
            <Input
              type="tel"
              id="whatsappNumber"
              placeholder="Enter WhatsApp number"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaCalculator
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="group relative space-y-1">
          <Label htmlFor="email" className="font-medium text-gray-700">
            Email
          </Label>
          <div className="relative">
            <Input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <MdHelp
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Work Address */}
        <div className="group relative space-y-1">
          <Label htmlFor="workAdress" className="font-medium text-gray-700">
            Work Address
          </Label>
          <div className="relative">
            <Input
              type="text"
              id="workAdress"
              placeholder="Enter work address"
              value={formData.workAdress}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <FaRegClipboard
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>

        {/* Personnel Code */}
        <div className="group relative space-y-1">
          <Label htmlFor="personnelCode" className="font-medium text-gray-700">
            Personnel Code
          </Label>
          <div className="relative">
            <Input
              type="number"
              id="personnelCode"
              placeholder="Enter personnel code"
              value={formData.personnelCode}
              onChange={handleInputChange}
              className="rounded-xl border-2 border-gray-200 py-3 pl-4 pr-12 transition-all [appearance:textfield] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <FaRegIdBadge
              size={22}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherForm;
