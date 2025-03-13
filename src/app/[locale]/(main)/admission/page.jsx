import AdmissionForm from "./AdmissionForm";
export const metadata = {
  title: "Admission",
};

const page = () => {
  return (
    <div>
      <section className="Admission-Title mt-40">
        <div className="Admission-Container px-4 py-8 md:px-8">
          <div className="Admission-Wrapper mx-auto max-w-[720px]">
            <div className="title flex flex-col items-center">
              <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-slate-900">
                Get a Project Quote
              </h2>
              <p className="text-center text-lg leading-relaxed text-slate-600">
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
            <div className="Admission-Content rounded-3xl border border-[#EFF0F6] bg-white p-6 shadow-xl">
              <div className="content py-8 lg:px-14">
                <div className="form">
                  <div className="form-content">
                    <AdmissionForm />
                  </div>
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
