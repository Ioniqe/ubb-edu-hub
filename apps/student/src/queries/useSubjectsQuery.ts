import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Subject } from "../types/subject";

const useSubjectsQuery = () => {
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;
  return useQuery(
    ["subjects", firebaseId],
    () =>
      api<Subject[]>({
        url: "/subjects/byUser",
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

export default useSubjectsQuery;
