import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Challenge } from "../types/challenge";
import { Topic } from "../types";

const useChallengesQuery = (interest?: Topic, filter?: string) => {
  const firebaseId = JSON.parse(sessionStorage.getItem("token") || "").state
    .user.uid;

  const _filter = filter ? { filters: { [filter]: true } } : {};

  return useQuery(
    ["challenges", { firebaseId, interest, filter }],
    () =>
      api<Challenge[]>({
        url: "/challenges",
        method: "GET",
        params: {
          firebaseId: firebaseId,
          skillId: interest && interest.id,
          ..._filter,
        },
      }),
    {
      select: (response) => response.data,
    }
  );
};

export default useChallengesQuery;
