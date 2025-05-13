import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,

  ModalOverlay,
  Spinner,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { userProp, userStore } from "../../../store/GlobalStore";
import { SiOpenaccess } from "react-icons/si";
import api from "../../../api/ApiSettings";

const GenerateLogins = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const queryClient = useQueryClient();

  const { id } = useParams();

  const token = userStore((state) => (state as userProp).token);

  // Function to delete a user by ID
  const generateLogin = async (id: string) => {
    return await api.post(`/verifier/generate/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Define the mutation
  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: generateLogin,
    retry: 1,
    onSuccess: () => {
      // show success toast
      toast({
        position: "top-right",
        title: "Credentials Generated",
        description: "Done",
        status: "success",
        duration: 2000,
      });
      // Invalidate and refetch the 'users' query after a successful delete
      queryClient.invalidateQueries({ queryKey: [`event-details-${id}`] });
    },
    onError: (error: {
      response: { data: { message: string } };
      message: string;
    }) => {
      console.log(error);
      // !This might never be used.
      if (error.message == "Request failed with status code 401") {
        onClose();
        toast({
          position: "top",
          title: "Details Already Created",
          description:
            "Details have already been created and cannot be created twice.",
          status: "warning",
          duration: 3000,
        });
        return;
      }
      // !show error toast if the status is not 401
      onClose();
      toast({
        position: "top",
        title: "Operation Unsuccessful",
        description: error.response.data.message || "Try Again",
        status: "error",
        duration: 2000,
      });
    },
  });

  const handleGenerateLogin = () => {
    onOpen(); // first open the modal
    mutate(id as string); // then trigger the mutation.
  };

  return (
    <>
      <button
        onClick={handleGenerateLogin}
        type="button"
        className="border p-1 rounded-sm flex gap-2 bg-green-900/90 items-center text-white w-fit"
      >
        <span>
          <SiOpenaccess />
        </span>
        <span className="text-sm">Generate Login details</span>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay border={"1px solid green"} />
        <ModalContent border={"1px solid green"}>
          <ModalCloseButton />
          <ModalBody>
            <section className="pt-10 pb-5">
              {isPending ? (
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-base font-medium text-center text-black/80">
                    Generating Login Details
                  </h3>
                  <Spinner size="xl" />
                </div>
              ) : isError ? (
                <p className="flex items-center gap-3 justify-center">
                  <span>Try Again</span>
                  <button
                    onClick={() => mutate(id as string)}
                    className="text-sm text-white bg-black px-2 py-1 rounded-sm"
                  >
                    Click to rest
                  </button>
                </p>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-base font-medium text-center text-black/80">
                    Login Details Generated
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-black">
                    <span>
                      <strong>Email:</strong>
                      {data?.data.email}
                    </span>
                    <span>
                      <strong>Password:</strong>
                      {data?.data.password}
                    </span>
                  </div>
                </div>
              )}
            </section>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GenerateLogins;
