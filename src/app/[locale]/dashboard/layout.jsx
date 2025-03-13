import DashboardMenu from "@/components/Structure/DashboardMenu";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <DashboardMenu />
      </div>
      <div className="w-full">
        <div className="dashboard-top p-6">
          <h1 className="text-4xl font-bold capitalize">Dashboard</h1>
        </div>
        <div className="dashboard-bottom h-full w-full bg-[#FAFBFC] p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
