import JobCard from "./JobCard";

const Experience = () => {
  return (
    <div className="border border-black p-5 px-5 sm:px-10 my-5">
      <h1 className="text-2xl sm:text-3xl font-bold">Experience</h1>
      <p className="my-5">
        I am currently working as a Software Engineer at Network tree and
        CarbonFoodPrint.
      </p>

      <JobCard
        props={{
          companyName: "Network tree",
          role: "Software Engineer",
          startDate: "June 2023",
          endDate: "Present",
        }}
      />
      <JobCard
        props={{
          companyName: "Carbon Foodprint",
          role: "Software Engineer",
          startDate: "Nov 2023",
          endDate: "Present",
        }}
      />
      <JobCard
        props={{
          companyName: "Barclays",
          role: "Software Engineer",
          startDate: "Jul 2019",
          endDate: "Dec 2022",
        }}
      />
      <JobCard
        props={{
          companyName: "TIBCO Software",
          role: "Software Engineer Intern",
          startDate: "Sep 2018",
          endDate: "Apr 2019",
        }}
      />
    </div>
  );
};

export default Experience;
