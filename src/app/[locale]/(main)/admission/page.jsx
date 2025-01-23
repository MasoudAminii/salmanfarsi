import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaLocationDot } from "react-icons/fa6";
import {
  MdDriveFileRenameOutline,
  MdOutlineDateRange,
  MdHelp,
} from "react-icons/md";
import { GiBurningDot } from "react-icons/gi"; // For Zoroastrianism
import {
  FaRegClipboard,
  FaRegIdBadge,
  FaPhoneAlt,
  FaMosque,
  FaChurch,
  FaStarOfDavid,
  FaFire,
  FaCalculator,
  FaFlask,
  FaBook,
  FaTools,
  FaBus,
} from "react-icons/fa";
import { IoClipboardOutline } from "react-icons/io5";
import { IR, AF, KZ, IQ, TJ } from "country-flag-icons/react/3x2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckboxWithText } from "@/components/buttons/CheckboxWithText";
import { Button } from "@/components/ui/button";

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

const page = () => {
  return (
    <div>
      <section className="Admission-Title mt-40">
        <div className="Admission-Container px-4 py-8 md:px-8">
          <div className="Admission-Wrapper mx-auto max-w-[680px]">
            <div className="title flex flex-col items-center">
              <h2 className="mb-4 text-center text-4xl font-bold text-[#170F49]">
                Get a project quote
              </h2>
              <p className="text-center text-lg text-[#6F6C90]">
                Please fill the form below to receive a quote for your project.
                Feel free to add as much detail as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Admission-Form">
        <div className="Admission-Container pb-14 md:px-8">
          <div className="Admission-Wrapper mx-auto max-w-screen-xl">
            <div className="Admission-Content border border-[#EFF0F6] px-4 py-4 sm:px-20 sm:shadow-lg md:rounded-[34px]">
              <div className="Slider flex justify-center gap-4 border-b border-[#D9DBE9] py-4">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
              <div className="content py-8 sm:py-14 lg:px-14">
                <div className="title mb-2">
                  <h3 className="mb-2 text-2xl font-bold text-[#170F49]">
                    Student's personal details:
                  </h3>
                  <p className="text-lg text-[#6F6C90]">
                    Lorem ipsum dolor sit amet consectetur adipisc.
                  </p>
                </div>
                <div className="profile mb-4">
                  <p className="mb-4 text-[#170F49]">
                    Student's personal photo
                  </p>
                  <div className="profile-container flex flex-wrap items-center gap-4 gap-y-0">
                    <div className="profile-image relative min-h-[62px] min-w-[62px] overflow-hidden rounded-full">
                      <Image
                        src={`/schoolstaff/no-profile.jpg`}
                        alt="noprofile"
                        fill
                        quality={100}
                        className="object-cover"
                      />
                    </div>
                    <Input
                      id="picture"
                      type="file"
                      className="flex items-center rounded-none border-none px-0 sm:w-fit sm:text-sm sm:file:text-sm"
                    />
                  </div>
                </div>
                <div className="form">
                  <form action="" className="">
                    <div className="form-content grid gap-8 md:grid-cols-2">
                      <div className="firstname">
                        <Label htmlFor="firstname" className="mb-2">
                          First name
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="firstname"
                            placeholder="First name"
                            required
                          />
                          <MdDriveFileRenameOutline
                            size={32}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="lastname">
                        <Label htmlFor="lastname" className="mb-2">
                          Last name
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="lastname"
                            placeholder="Last name"
                            required
                          />
                          <MdDriveFileRenameOutline
                            size={32}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="fathername">
                        <Label htmlFor="lastname" className="mb-2">
                          Father's name
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="lastname"
                            placeholder="Father's name"
                            required
                          />
                          <FaRegClipboard
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="Nationalcode">
                        <Label htmlFor="Nationalcode" className="mb-2">
                          National code
                        </Label>
                        <div className="relative">
                          <Input
                            type="number"
                            id="Nationalcode"
                            placeholder="National code"
                            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            required
                          />
                          <FaRegIdBadge
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="placeofbirth">
                        <Label htmlFor="placeofbirth" className="mb-2">
                          Place of birth
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="placeofbirth"
                            placeholder="Place of birth"
                            required
                          />
                          <IoClipboardOutline
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="date">
                        <Label htmlFor="date" className="mb-2">
                          Date of birth
                        </Label>
                        <div className="relative w-full">
                          <Input
                            id="date"
                            type="date"
                            className="date-input appearance-none"
                            placeholder="Select date"
                            required
                          />
                          <MdOutlineDateRange
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="Nationality">
                        <Label htmlFor="Nationality" className="mb-2">
                          Nationality
                        </Label>
                        <div className="relative">
                          <Select>
                            <SelectTrigger className="mt-2 h-12 rounded-[46px]">
                              <SelectValue placeholder="Choose your nationality" />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                              {flags?.map((lang, index) => (
                                <SelectItem
                                  key={index}
                                  value={lang?.title}
                                  className="relative flex items-center justify-between rounded-xl"
                                >
                                  <p className="text-base">{lang?.title}</p>
                                  <span className="absolute right-10 top-1/2 -translate-y-1/2">
                                    {lang?.flag}
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="religion">
                        <Label htmlFor="Relegion" className="mb-2">
                          Relegion
                        </Label>
                        <div className="relative">
                          <Select>
                            <SelectTrigger className="mt-2 h-12 rounded-[46px]">
                              <SelectValue placeholder="Choose your Relegion" />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                              {religionsInIran?.map((religion, index) => (
                                <SelectItem
                                  key={index}
                                  value={religion?.title}
                                  className="relative flex items-center justify-between rounded-xl"
                                >
                                  <p className="text-base">{religion?.title}</p>
                                  <span className="absolute right-10 top-1/2 -translate-y-1/2">
                                    {religion?.icon}
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="Education level">
                        <Label htmlFor="Education level" className="mb-2">
                          Education level
                        </Label>
                        <div className="relative">
                          <Select>
                            <SelectTrigger className="mt-2 h-12 rounded-[46px]">
                              <SelectValue
                                placeholder="Choose Your Education level"
                                className="text-xl placeholder:text-xl"
                              />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                              {educationLevel?.map((Education, index) => (
                                <SelectItem
                                  key={index}
                                  value={Education}
                                  className="relative rounded-xl"
                                >
                                  <p className="text-base">{Education}</p>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="Field of study">
                        <Label htmlFor="Field of study" className="mb-2">
                          Field of study
                        </Label>
                        <div className="relative">
                          <Select>
                            <SelectTrigger className="mt-2 h-12 rounded-[46px]">
                              <SelectValue
                                placeholder="Choose Your Field of study"
                                className="text-xl placeholder:text-xl"
                              />
                            </SelectTrigger>
                            <SelectContent className="rounded-2xl">
                              {fieldOfStudy?.map((field, index) => (
                                <SelectItem
                                  key={index}
                                  value={field?.title}
                                  className="relative flex items-center justify-between rounded-xl"
                                >
                                  <p className="text-base">{field?.title}</p>
                                  <span className="absolute right-10 top-1/2 -translate-y-1/2">
                                    {field?.icon}
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="Residential address">
                        <Label htmlFor="Residentialaddress" className="mb-2">
                          Residential address
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="Residentialaddress"
                            placeholder="Al Qusais - Al Qusais 1 - Dubai"
                            required
                          />
                          <FaLocationDot
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="Phone number">
                        <Label htmlFor="Phonenumber" className="mb-2">
                          Phone number
                        </Label>
                        <div className="relative">
                          <Input
                            type="number"
                            id="Phonenumber"
                            placeholder="+4 298 8116"
                            className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            required
                          />
                          <FaPhoneAlt
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                      <div className="Emirates ID card">
                        <Label htmlFor="Emiratesidcard" className="mb-2">
                          Emirates ID card
                        </Label>
                        <Input
                          id="Emiratesidcard"
                          type="file"
                          className="flex items-center py-2 file:mr-2 file:px-2 file:py-1"
                          required
                        />
                      </div>
                      <div className="Passport front page">
                        <Label htmlFor="Passportfrontpage" className="mb-2">
                          Passport front page
                        </Label>
                        <Input
                          id="Passportfrontpage"
                          type="file"
                          className="flex items-center py-2 file:mr-2 file:px-2 file:py-1"
                          required
                        />
                      </div>
                      <div className="National ID card photo">
                        <Label htmlFor="NationalIDcardphoto" className="mb-2">
                          National ID card photo
                        </Label>
                        <Input
                          id="NationalIDcardphoto"
                          type="file"
                          className="flex items-center py-2 file:mr-2 file:px-2 file:py-1"
                          required
                        />
                      </div>
                      <div className="Identity card photo">
                        <Label htmlFor="Identitycardphoto" className="mb-2">
                          Identity card photo
                        </Label>
                        <Input
                          id="Identitycardphoto"
                          type="file"
                          className="flex items-center py-2 file:mr-2 file:px-2 file:py-1"
                          required
                        />
                      </div>
                      <div className="Translation of academic degree">
                        <Label
                          htmlFor="Translationofacademicdegree"
                          className="mb-2"
                        >
                          Translation of academic degree (for new entries)
                        </Label>
                        <Input
                          id="Translationofacademicdegree"
                          type="file"
                          className="flex items-center py-2 file:mr-2 file:px-2 file:py-1"
                        />
                      </div>
                      <div className="School Bus Transportation flex flex-col justify-between">
                        <Label
                          htmlFor="SchoolBusTransportation"
                          className="mb-2"
                        >
                          School Bus Transportation
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            id="SchoolBusTransportation"
                            placeholder="School Bus Transportation"
                          />
                          <FaBus
                            size={28}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6F6C90]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="checkbox pb-8 pt-12">
                      <CheckboxWithText
                        title={
                          "I have carefully studied the disciplinary regulations of Salman Farsi Complex and am committed to strictly implementing all of its principles."
                        }
                        description={
                          "You must agree to the terms and conditions of registration."
                        }
                      />
                    </div>
                    <div className="button flex justify-end">
                      <Button className="rounded-[56px] bg-[#4A3AFF] py-6 text-xl text-white hover:bg-[var(--primary-color)]">
                        Next step
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
