import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { userProp, userStore } from "../../../store/GlobalStore";
import api from "../../../api/ApiSettings";
<RiDeleteBin2Line />;

const DeleteVerifiersDetails = () => {
  const toast = useToast();

  const queryClient = useQueryClient();

  const { id } = useParams();

  // const navigate = useNavigate();

  const token = userStore((state) => (state as userProp).token);

  const deleteUser = async (id: string) => {
    return await api.delete(`/verifier/details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Define the mutation
  const { mutate, isPending } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // show success toast
      toast({
        position: "top",
        title: " Detail Disposed Successfully",
        description: "Deleted",
        status: "success",
        duration: 2000,
      });
      // Invalidate and refetch the 'users' query after a successful delete
      queryClient.invalidateQueries();
    },
    onError: () => {
      //(error);
      // show error toast
      toast({
        position: "top",
        title: "Operation Unsuccessful",
        description: "Try Again",
        status: "error",
        duration: 2000,
      });
    },
  });

  const handleDelete = (userId: string) => {
    // Call the mutate function to trigger the deletion
    mutate(userId);
  };

  return (
    <div>
      <Button
        onClick={() => handleDelete(id as string)}
        size={"sm"}
        border={"1px solid red"}
        leftIcon={<RiDeleteBin2Line />}
        loadingText={"Disposing.."}
        isLoading={isPending}
      >
        Dispose Details
      </Button>
    </div>
  );
};

export default DeleteVerifiersDetails;
