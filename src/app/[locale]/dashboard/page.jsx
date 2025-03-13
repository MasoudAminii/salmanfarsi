import { GrUserWorker, GrUserManager } from "react-icons/gr";
import { FaChalkboardTeacher, FaBookReader } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { FiClock } from "react-icons/fi";

const statsConfig = [
  {
    icon: <GrUserWorker className="text-2xl" />,
    value: "2,450",
    label: "Total Students",
    color: "bg-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl" />,
    value: "148",
    label: "Teaching Staff",
    color: "bg-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: <GrUserManager className="text-2xl" />,
    value: "32",
    label: "Administrators",
    color: "bg-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: <FaBookReader className="text-2xl" />,
    value: "24",
    label: "Courses Offered",
    color: "bg-orange-500",
    bgColor: "bg-orange-100",
  },
];

const newsItems = [
  {
    title: "New STEM Lab Opening",
    date: "2024-03-15",
    excerpt: "State-of-the-art science facility now available for students...",
    category: "Facilities",
  },
  {
    title: "Annual Sports Day Results",
    date: "2024-03-12",
    excerpt: "Celebrating outstanding athletic achievements this year...",
    category: "Events",
  },
  {
    title: "Scholarship Applications Open",
    date: "2024-03-10",
    excerpt: "Merit-based scholarships for outstanding academic performance...",
    category: "Academics",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      {/* Stats Section */}
      <section className="flex-auto lg:w-2/3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              School Statistics
            </h1>
            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <FiClock className="text-lg" />
              <span className="text-sm font-medium">
                Last updated: 12:30 PM
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statsConfig.map((stat, index) => (
              <article
                key={index}
                className={`${stat.bgColor} rounded-xl p-4 transition-transform hover:scale-[1.02]`}
              >
                <div
                  className={`${stat.color} mb-4 inline-block rounded-lg p-3`}
                >
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <h3 className="text-lg font-semibold text-gray-600">
                  {stat.label}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="flex-auto lg:w-1/3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <header className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Top School News
            </h2>
          </header>

          <div className="space-y-4">
            {newsItems.map((news, index) => (
              <article
                key={index}
                className="group rounded-lg border p-4 transition-colors hover:border-blue-200 hover:bg-gray-50"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {news.category}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(news.date).toLocaleDateString()}
                  </time>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {news.title}
                </h3>
                <p className="line-clamp-2 text-gray-600">{news.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
