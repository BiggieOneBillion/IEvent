// import React, { useState } from "react";
// import Html5QrcodePlugin from "./qr-code-scanner";
// import { Button, Input, InputGroup, useToast } from "@chakra-ui/react";

// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const BarCodeVerify = () => {
//   const toast = useToast();
//   const [scanResult, setScanResult] = React.useState("");
//   const [showEmail, setShowEmail] = React.useState(false);
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // functions
//   const handleSubmit = () => {
//     console.log(scanResult, email);

//     if (scanResult === "" || email === "") {
//       toast({
//         title: "Invalid Input",
//         description: "Please enter a valid email address",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }
//     setIsLoading(true);
//     // ! the actual network request!
//   };
//   const handleScanSuccess = (decodedText: any): void => {
//     console.log("Scanned code:", decodedText);
//     if (decodedText) {
//       setScanResult(decodedText);
//       setShowEmail(true);
//     }
//   };
//   return (
//     <div className="bg-white space-y-5 lg:p-10 mx-3 p-3 lg:w-[500px] rounded-md">
//       <div className="space-y-1">
//         <h1 className="text-black font-semibold">BarCodeVerify</h1>
//         <p className="text-sm text-gray-400 font-medium">
//           Scan the barcode first and then enter the email to verify the user.
//         </p>
//       </div>
//       {!showEmail ? (
//         <Html5QrcodePlugin onScanSuccess={handleScanSuccess} />
//       ) : (
//         <section className="space-y-4">
//           <div className="space-y-1">
//             <label
//               htmlFor="email"
//               className="text-sm text-slate-400 font-medium"
//             >
//               Email Address:
//             </label>
//             <InputGroup size={"lg"}>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 name="email"
//                 title="Please enter a valid email address (e.g., example@domain.com)"
//                 className="email-pincode placeholder:text-sm placeholder:text-gray-300"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </InputGroup>
//             {/* {error && <div className="text-red-500 text-sm">{error.message} */}
//           </div>
//           {/* SUBMIT BUTTON */}
//           <div>
//             <Button
//               loadingText="Submitting"
//               isLoading={isLoading}
//               onClick={handleSubmit}
//               colorScheme="blue"
//             >
//               Submit
//             </Button>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default BarCodeVerify;

import {
  Button,
  Input,
  InputGroup,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/ApiSettings";
import { userProp, userStore } from "../../store/GlobalStore";
import VerifiedDetails from "./VerifiedDetails";
import Html5QrcodePlugin from "./barcode-html2";

// type formInfo = { email: string; access: string; eventId: string };

// const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

  const location = useLocation();
  const event = location.state?.event;

  const [showEmail, setShowEmail] = React.useState(false);

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
      formState.access === ""
      // || formState.access.length < 9
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

  const onNewScanResult = (decodedText: string, description:any) => {
    console.log(description);
    
    if (decodedText) {
      setFormState({ ...formState, access: decodedText });
      setShowEmail(true);
    }
  };

  const handleReset = () => {
    setFormState({ email: "", access: "" });
    setShowEmail(false);
  };

  // const handleScanSuccess = (decodedText: any): void => {
  //   console.log("Scanned code:", decodedText);
  //   if (decodedText) {
  //     setFormState({ ...formState, access: decodedText });
  //     setShowEmail(true);
  //   }
  // };

  return (
    <section className="bg-white space-y-5 lg:p-10 p-3 lg:w-[500px] rounded-md">
      <header className="space-y-1">
        <h1 className="text-black font-semibold">BarCodeVerify</h1>
        <p className="text-sm text-gray-400 font-medium">
          Scan the barcode first and then enter the email to verify the user.
        </p>
      </header>
      <main className="space-y-5">
        {/* {!showEmail ? ( */}
        <div className={`${!showEmail ? "block" : "hidden"}`}>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </div>
        {/* ) : ( */}
        {/* // <Html5QrcodePlugin setFormStateFn={setFormState} setShowEmail={setShowEmail} /> */}
        <div className={`space-y-4 ${showEmail ? "block" : "hidden"}`}>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm text-slate-400 font-medium"
            >
              Email Address:
            </label>
            <InputGroup size={"lg"}>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                title="Please enter a valid email address (e.g., example@domain.com)"
                className="email-pincode placeholder:text-sm placeholder:text-gray-300"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                required
              />
            </InputGroup>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleReset}>Reset</Button>
            <Button
              loadingText="Submitting"
              isLoading={isLoading}
              onClick={handleSubmit}
              colorScheme="blue"
            >
              Submit
            </Button>
          </div>
        </div>
        {/* )} */}
      </main>
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
