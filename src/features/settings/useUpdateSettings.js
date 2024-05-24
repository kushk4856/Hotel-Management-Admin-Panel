import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-toastify";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting Successully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
