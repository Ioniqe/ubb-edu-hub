import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Challenge } from "../types/challenge";
import { Topic } from "../types";

const useChallengesQuery = (interest: Topic) => {
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;
  return useQuery(
    ["challenges", firebaseId],
    () =>
      api<Challenge[]>({
        url: "/challenges",
        method: "GET",
        params: {
          firebaseId: firebaseId,
          skillId: interest.id,
          filters: {
            completed: false,
          },
        },
      }),
    {
      select: (response) => response.data,
    }
  );
};

export default useChallengesQuery;
