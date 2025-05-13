import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  // Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaRegCopy } from "react-icons/fa6";

type PropType = {
  isOpen: boolean;
  onClose: () => void;
  eventUrl: string;
};

const SuccessModal: React.FC<PropType> = ({ isOpen, onClose, eventUrl }) => {
  const toast = useToast()
  const handleCopyText = (text: string) => {
    // Use the Clipboard API to copy text
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          position: "top",
          status: "success",
          title: "URL Copied",
          description: "Event URL copied to clipboard",
          duration: 2000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent width={"fit"}>
          <ModalHeader>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <section className="space-y-3">
              <p className="text-sm font-medium text-black/70 flex flex-col items-start gap-2 flex-wrap">
                <span className="text-start text-black/90">
                  You have successfully registered your event congratulations!
                </span>
                <span className="text-start">
                  Below is your event registration Url
                </span>
              </p>
              {/* <Tooltip hasArrow label="Click To Copy" aria-label="A tooltip" bg='gray.300' color='black' placement="top"> */}
              <section className="flex items-center gap-1">
                <p
                  // onClick={() => handleCopyText(eventUrl)}
                  className="text-sm flex-1 text-black/90 font-semibold text-wrap block"
                >
                  {eventUrl}
                </p>
                <span
                  onClick={() => handleCopyText(eventUrl)}
                  className="cursor-pointer"
                >
                  <FaRegCopy />
                </span>
              </section>
              {/* </Tooltip> */}
              <p className="text-sm font-medium">
                Share these with your guests to register for the event. You can
                see the link in your email or in the{" "}
                <span className="font-semibold border px-1 bg-slate-100">
                  dashboard / analysis tab / events
                </span>
              </p>
            </section>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccessModal;
