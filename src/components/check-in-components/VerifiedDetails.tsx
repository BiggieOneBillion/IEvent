import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { Idata } from "./pincode-verify";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  details: Idata;
  resetFormData: () => void;
};

const VerifiedDetails: React.FC<PropsType> = ({
  isOpen,
  onClose,
  details,
  resetFormData,
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Guest Details</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <section className="flex flex-col gap-4 py-3">
            <h2 className="text-centery font-semibold underliney underline-offset-2 text-zinc-600 mb-3">
              Verify Guest Details
            </h2>
            <p className="text-sm text-centery font-medium text-slate-600 leading-loose">
              <span className="inline-block px-2 py-1y text-white bg-black/90 rounded-mdy">
                <strong>Email</strong>
              </span>{" "}
              is <strong className="text-base">{details.email}</strong> and{" "}
              <br />{" "}
              <span className="inline-block px-2 py-1y text-white bg-black/90 rounded-mdy">
                <strong>Fullname</strong>
              </span>{" "}
              is <strong className="text-base">{details.name}</strong>
            </p>
            <div className="flex justify-end">
              <Button
                colorScheme="blue"
                onClick={() => {
                  resetFormData();
                  onClose();
                }}
              >
                Done
              </Button>
            </div>
          </section>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VerifiedDetails;
