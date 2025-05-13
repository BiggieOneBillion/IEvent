import { useState } from "react";
import { useParams } from "react-router-dom";
import TableSection from "./TableSection";
import { columnData } from "./CustomerColumnData";
import BackButton from "../../BackButton";

const EventCustomers = () => {
  const params = useParams();
  const [filtering, setFiltering] = useState<string>("");

  return (
    <div className="space-y-4">
      <BackButton />
      <div className="w-screen overflow-x-scroll px-3y lg:w-full space-y-5">
        {/* title and description */}
        <div className="space-y-1">
          <h2 className="text-lg text-black/90 font-semibold">Table Info</h2>
          <p className="text-sm text-gray-500 font-normal">
            This is the tabulated data of the event. Click on the{" "}
            <b>Event name</b> to go to the individual event analytics
          </p>
        </div>
        <TableSection
          filtering={filtering}
          setFiltering={setFiltering}
          url={`http://localhost:3000/users/customers/${params.id}`}
          columnData={columnData}
          queryId="event-customers"
        />
      </div>
    </div>
  );
};

export default EventCustomers;
