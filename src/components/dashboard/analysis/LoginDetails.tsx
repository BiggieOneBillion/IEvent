import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";

type PropsType = {
  email: string;
  password: string;
};

const LoginDetails: React.FC<PropsType> = ({ email, password }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        type="button"
        className="border p-1 rounded-sm flex gap-2 bg-green-900/90 items-center text-white w-fit"
      >
        <span>
          <IoEyeSharp />
        </span>
        <span className="text-sm">Show Login details</span>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay border={"1px solid green"} />
        <ModalContent border={"1px solid green"}>
          <ModalCloseButton />
          <ModalBody>
            <section className="pt-10 pb-5 space-y-4">
              <h2 className="text-xl font-bold text-green-900">
                Login Details
              </h2>
              <div className="flex flex-col gap-1 text-sm text-black">
                <p className="flex items-center gap-2">
                  <strong>Email:</strong>
                  <span>{email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <strong>Password:</strong>
                  <span>{password}</span>
                </p>
              </div>
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginDetails;
