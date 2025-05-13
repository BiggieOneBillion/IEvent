import { useQuery } from "@tanstack/react-query";
import { userProp, userStore } from "../../../store/GlobalStore";
import { Link, useParams } from "react-router-dom";
import EventDetailList from "./EventDetailList";
import BackButton from "../../BackButton";
import DeleteEventModal from "./DeleteEventModal";
import EditFormModal from "./EditFormModal";
import { IoPeopleSharp } from "react-icons/io5";
import { v4 } from "uuid";
import GenerateLogins from "./GenerateLogins";
import LoginDetails from "./LoginDetails";
import DeleteVerifiersDetails from "./DeleteVerifiersDetails";
import api from "../../../api/ApiSettings";

export interface IEvent {
  _id: string;
  userId: string;
  name: string;
  location: string;
  type: string;
  noOfAttendees: number;
  date: string;
  startTimes: string[];
  endTimes: string[];
  eventImg: string;
  title: string;
  description: string;
  registrationStartDate: string;
  registrationEndDate: string;
  registrationUrl: string;
  __v?: string;
  haveVerifiers: boolean;
  verifiersDetails: { email: string; password: string };
}

const EventDetail = () => {
  const token = userStore((state) => (state as userProp).token);

  const params = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: [`event-details-${params.id}`],
    queryFn: async () => {
      const response = api.get(`/events/${params.id}`, {
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
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  // {
  //   _id: new ObjectId('66eaba5d3af28356fa95672f'),
  //   userId: '66d6ae15103d2765b1dab555',
  //   name: 'Boscoe baba',
  //   location: 'Port Harcourt',
  //   type: 'All Ages',
  //   noOfAttendees: 500,
  //   date: '2024-09-19',
  //   startTimes: [ '01:00 AM' ],
  //   endTimes: [ '02:30 AM' ],
  //   eventImg: 'https://res.cloudinary.com/dinigw27h/image/upload/v1726659165/fl2hh27grrcicrzwjqvp.jpg',
  //   title: 'Gun fights in the country',
  //   description: 'Do as you may as the revolution cannot be televised',
  //   registrationStartDate: '2024-09-17',
  //   registrationEndDate: '2024-09-18',
  //   authType: 'pincode',
  //   haveVerifiers: true,
  //   registrationUrl: 'http://localhost:5173/NjZlYWJhNWQzYWYyODM1NmZhOTU2NzJm',
  //   __v: 0,
  //   verifiersDetails: { email: 'verifier-23af50c3@verifier.com', password: '4]W?QwLG' }
  // }

  // //(data);

  const obj: IEvent = { ...data?.data[0] };

  const date = new Date() > new Date(obj.registrationStartDate);

  return (
    <section className="space-y-10">
      {/* -----------------------------------------------TOP SECTION STARTS-------------------------------------------------- */}
      <section>
        {/* BACK BUTTON */}
        <div className="mb-3">
          <BackButton />
        </div>
        {/* HEADER */}
        <header>
          <h2 className="font-semibold text-2xl text-black/80">
            Event Details
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            <span>This is the total information about the event</span>
          </p>
        </header>
        {/* GENERATE LOGIN DETAILS FOR THE CHECK-IN  */}
        <section>
          {!obj.haveVerifiers ? (
            <div className="flex flex-col w-fit mt-4 p-2 bg-slate-200/50">
              <p className="text-sm text-gray-500 font-medium">
                Click the button below to generate login details for the
                check-in staff
              </p>
              <div className="flex items-center gap-3">
                <GenerateLogins />
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-fit mt-4 p-2 bg-slate-200/50">
              <p className="text-sm text-gray-500 font-medium">
                Click the button below to see the login details for the check-in
                staff
              </p>
              <div className="flex items-center gap-3">
                <LoginDetails
                  email={obj.verifiersDetails.email}
                  password={obj.verifiersDetails.password}
                />
                <DeleteVerifiersDetails />
              </div>
            </div>
          )}
        </section>
        {/* ACTIONS BTNS-EDIT EVENT AND VIEW REGISTERED CUSTOMERS  */}
        <div className="mt-6 grid grid-cols-2 lg:w-[500px] gap-4">
          <EditFormModal info={obj} />
          <button
            type="button"
            className={`border p-1 ${
              date
                ? "pointer-events-auto"
                : "pointer-events-none bg-black/20 text-white cursor-not-allowed"
            }`}
          >
            <Link
              to={`/dashboard/analysis/event/customers/${obj._id}`}
              className="flex items-center gap-1  px-1"
            >
              <span className="text-sm">View Registered Customers</span>
              <span>
                <IoPeopleSharp />
              </span>
            </Link>
          </button>
        </div>
      </section>
      {/* -----------------------------------------------TOP SECTION ENDS-------------------------------------------------- */}

      {/* -----------------------------------------------EVENT INFO SECTION STARTS-------------------------------------------------- */}
      <section className="grid lg:grid-cols-2">
        {/* left side */}
        <section className="py-5 gap-y-5 lg:flex lg:items-start lg:flex-wrap order-1">
          {/* event name */}
          <EventDetailList title="Event Name" info={obj.name} />
          {/* event title */}
          <EventDetailList title="Event Title" info={obj.title} />
          {/* event description */}
          <EventDetailList title="Event Description" info={obj.description} />
          {/* event location */}
          <EventDetailList title="Event Location" info={obj.location} />
          {/* event number of attendance  */}
          <EventDetailList
            title="Expected Number Of Attendance"
            info={String(obj.noOfAttendees)}
          />
          {/* Event Type */}
          <EventDetailList title="Event Type" info={obj.type} />
          {/* Event date */}
          <EventDetailList title="Event Date" info={obj.date} />
          {/* event registration url */}
          <EventDetailList
            title="Event Registeration Link"
            info={obj.registrationUrl}
          />
          {/* event start registration date */}
          <EventDetailList
            title=" Registeration Start Date"
            info={obj.registrationStartDate}
          />
          {/* event end registration date */}
          <EventDetailList
            title="Registeration End Date"
            info={obj.registrationEndDate}
          />
          {/* Event start times */}
          <div className="w-1/2 flex flex-col gap-1">
            <p className="text-sm text-gray-500 font-medium">
              Event Start Times
            </p>
            <div className="flex items-start gap-1 flex-wrap">
              {obj.startTimes?.map((el) => (
                <span
                  key={v4()}
                  className="text-sm inline-block p-1 bg-black text-white w-fit"
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
          {/* Event end times */}
          <div className="w-1/2 flex flex-col gap-1">
            <p className="text-sm text-gray-500 font-medium">
              Event Closing Times
            </p>
            <div className="flex items-start gap-1 flex-wrap">
              {obj.endTimes?.map((el) => (
                <span
                  key={v4()}
                  className="text-sm inline-block p-1 bg-black text-white w-fit"
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
        </section>
        {/* right side---image container */}
        <section className="h-[300px] lg:h-[300px] lg:order-2 relative">
          <img
            src={obj.eventImg}
            alt="event image"
            className="h-full w-full object-cover"
          />
          <div className=" flex items-center justify-center absolute inset-0 z-10y bg-black/30">
            <p className="text-2xl font-bold text-white/90">Event Logo Image</p>
          </div>
        </section>
      </section>
      {/* -----------------------------------------------EVENT INFO SECTION ENDS-------------------------------------------------- */}
      {/* ---------DELETE BTN----------- */}
      <div>
        <DeleteEventModal />
      </div>
      {/* ---------DELETE BTN----------- */}
    </section>
  );
};

export default EventDetail;
