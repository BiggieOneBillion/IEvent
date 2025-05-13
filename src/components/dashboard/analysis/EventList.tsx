import { useQuery } from "@tanstack/react-query";
import { userProp, userStore } from "../../../store/GlobalStore";
import { Link } from "react-router-dom";
import BackButton from "../../BackButton";
import { v4 } from "uuid";
import api from "../../../api/ApiSettings";

interface IEvent {
  _id: string;
  userId: string;
  name: string;
  location: string;
  type: object[] | [];
  noOfAttendees: number;
  date: string;
  startTimes: [];
  endTimes: [];
  eventImg: string;
  title: string;
  description: string;
  registrationStartDate: string;
  registrationEndDate: string;
  registrationUrl: string;
  __v: number;
}

const EventList = () => {
  const token = userStore((state) => (state as userProp).token);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const response = api.get("/events/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center max-w-sm w-full">
          <svg
            className="w-12 h-12 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-lg font-medium text-gray-900 mb-2">Unable to Load Events</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please check your connection and try again
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-black/80 transition-colors duration-150 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retry
          </button>
        </div>
      </div>
    );
  }

  // console.log(data?.data.data.length === 0);

  return (
    <section className="space-y-5">
      <BackButton />
      <div>
        <h1 className="text-2xl text-black/70 font-semibold ">Event List</h1>
        <p className="text-sm font-medium text-slate-500">
          This is the list of all your events
        </p>
      </div>
      <main className="grid lg:grid-cols-3 gap-10">
        {data?.data.data.length > 0 ? (
          data?.data?.data.map((event: IEvent) => (
            <div className="p-4" key={v4()}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={event.eventImg}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font flex items-center gap-1">
                  <span className="">Event Date:</span>
                  <span className="">{event.date}</span>
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-1">
                  {event.title}
                </h2>
                <p className="leading-relaxed text-base">{event.description}</p>
                <Link
                  to={`/dashboard/analysis/event/details/${event._id}`}
                  className="inline-block px-1 border rounded-sm text-sm bg-black/60 text-white hover:bg-black/80 transition-all duration-300"
                >
                  More details ...
                </Link>
                {/* <EventDetailsModal event={event} /> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-3xl font-extrabold text-black/10">
            No data available
          </p>
        )}
      </main>
    </section>
  );
};

export default EventList;
