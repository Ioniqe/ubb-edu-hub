import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { User } from "../types/user";

const useUserQuery = () => {
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  return useQuery(
    ["userDetails", { firebaseId }],
    () =>
      api<User>({
        url: "/users",
        method: "GET",
        params: {
          firebaseId: firebaseId,
        },
      }),
    {
      select: (response) => response.data,
    }
  );
};

export default useUserQuery;
