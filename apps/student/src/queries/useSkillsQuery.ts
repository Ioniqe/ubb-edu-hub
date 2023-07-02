import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Topic } from "../types";

const useSkillsQuery = () => {
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;
  return useQuery(
    ["skills", { firebaseId }],
    () =>
      api<Topic[]>({
        url: "/skills",
        method: "GET",
        params: {
          userId: firebaseId,
        },
      }),
    {
      select: (response) => response.data,
    }
  );
};

export default useSkillsQuery;
