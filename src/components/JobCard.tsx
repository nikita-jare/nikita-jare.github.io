import { FaSuitcase } from "react-icons/fa";

interface JobCardProps {
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  description?: string;
}

const JobCard = ({ props }: { props: JobCardProps }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row my-2">
        <div className="mt-1">
          <FaSuitcase />
        </div>

        <div className="px-5">
          <h4 className="font-bold text-lg">{props?.companyName}</h4>
          <p className="text-gray-500 font-semibold">{props?.role}</p>
          <p className="text-gray-500 font-thin">
            {props?.startDate} - {props?.endDate}
          </p>
          <p>{props?.description}</p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
