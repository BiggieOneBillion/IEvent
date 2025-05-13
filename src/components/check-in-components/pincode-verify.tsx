import {
  Button,
  HStack,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/ApiSettings";
import { userProp, userStore } from "../../store/GlobalStore";
import VerifiedDetails from "./VerifiedDetails";
import { useMediaQuery } from "@reactuses/core";

type formInfo = { email: string; access: string; eventId: string };

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export interface Idata {
  _id: string;
  eventId: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  pincode: string;
}

const PinCodeVerify = () => {
  //  !TODO---we need to write the function to make the request to the backend to cross check the pincode.
  const toast = useToast();

  const isWide = useMediaQuery("(min-width: 760px)");
  const isSmallScreen = useMediaQuery("(max-width: 370px)");

  const location = useLocation();
  const event = location.state?.event;

  const [formState, setFormState] = useState({
    email: "",
    access: "",
  });

  const [customerDetails, setCustomerDetails] = useState<Idata>({
    _id: "",
    eventId: "",
    name: "",
    email: "",
    phoneNumber: "",
    location: "",
    pincode: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  //   console.log(event);
  const [isLoading, setIsLoading] = useState(false);

  const token = userStore((state: unknown) => (state as userProp).token);

  const resetFormData = () => setFormState({ email: "", access: "" });

  const handleRequest = async (email: string, access: string) => {
    try {
      const response = await api.post(
        "/users-customers/check-in",
        {
          email: email,
          access: access,
          eventId: event._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response) {
        toast({
          title: "Error",
          description: "Failed to verify pincode",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
      setCustomerDetails(response.data.data);

      // That means request was successful and details are valid
      onOpen();
      setIsLoading(false);
      //   console.log(response);
    } catch (error: any | { response: { data: { message: string } } }) {
      //   console.log(error);
      setIsLoading(false);
      toast({
        title: "Error",
        description: error.response.data.message || "Failed to verify pincode",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      formState.email === "" ||
      !regex.test(formState.email) ||
      formState.access === "" ||
      formState.access.length < 9
    ) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Please fill in all fields Correctly",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      // make the network request
      handleRequest(formState.email, formState.access);
    }
  };

  return (
    <section className="bg-white space-y-5 lg:p-10 p-3 lg:w-[500px] rounded-md">
      <header>
        <h1 className="md:text-lg font-semibold text-black">
          Pincode Verification
        </h1>
        <p className="text-sm text-slate-500 font-medium">
          Enter pincode below
        </p>
      </header>
      <form className="space-y-5">
        {/* email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm text-slate-400 font-medium">
            Email Address:
          </label>
          <InputGroup size={"lg"}>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address (e.g., example@domain.com)"
              className="email-pincode placeholder:text-sm placeholder:text-gray-300"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
            />
          </InputGroup>
          {/* {error && <div className="text-red-500 text-sm">{error.message} */}
        </div>

        <section className="space-y-1">
          <label className="text-sm text-slate-400 font-medium">
            Pin Code:
          </label>
          <HStack>
            <PinInput
              size={isSmallScreen ? "xs" : isWide ? "lg" : "sm"}
              type="alphanumeric"
              value={formState.access}
              onChange={(value) => {
                setFormState({ ...formState, access: value });
              }}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <div className="p-1 hidden lg:block lg:px-3" />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </section>
        <div className="flex justify-end">
          {/* <button
            type="submit"
            disabled={formState.email === "" || formState.access === ""}
            onClick={handleSubmit}
            className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold w-full lg:w-fit disabled:bg-blue-200 disabled:cursor-none"
          >
            Submit
          </button> */}
          <Button
            loadingText="Submitting"
            isLoading={isLoading}
            onClick={handleSubmit}
            colorScheme="blue"
          >
            Submit
          </Button>
        </div>
      </form>
      <VerifiedDetails
        isOpen={isOpen}
        onClose={onClose}
        details={customerDetails}
        resetFormData={resetFormData}
      />
    </section>
  );
};

export default PinCodeVerify;
