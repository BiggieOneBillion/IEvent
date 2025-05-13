import { userProp, userStore } from "../../store/GlobalStore";
import { useLocation } from "react-router-dom";

// type PropsType = {
//   title: string;
// };

const CheckInNav = () => {
  const location = useLocation();
  const event = location.state?.event;

  console.log(event);

  const updateToken = userStore(
    (state: unknown) => (state as userProp).updateToken
  );

  const handleLogOut = () => {
    // clear the data of the user from the localstorage
    userStore.persist.clearStorage();
    // update the token to an empty string
    updateToken("");
  };

  return (
    <nav className="flex items-center justify-end md:justify-between w-full">
      <h1 className="text-sm text-black font-semibold mx-auto capitalize hidden md:block">
        <span className="hiddeny text-xs">{`${event.name} - ${event.title}`}</span>
        <span className="ml-1 p-1 bg-black text-white rounded-sm">
          Check-In
        </span>
      </h1>
      <button
        onClick={handleLogOut}
        className="px-2 py-1 bg-black rounded-md text-white text-sm"
      >
        Log Out
      </button>
    </nav>
  );
};

export default CheckInNav;
