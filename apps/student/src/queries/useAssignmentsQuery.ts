import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Assignment } from "../types/assignment";
import { Topic } from "../types";

const useAssigmentsQuery = (interest: Topic, filter?: string) => {
  const _filter = filter ? { filters: { [filter]: true } } : {};

  return useQuery(
    ["assignments", interest.name, filter],
    () =>
      api<Assignment[]>({
        url: "/assessments",
        method: "GET",
        params: { skill: interest.id, ..._filter },
      }),
    {
      select: (response) => response.data,
    }
  );
};

export default useAssigmentsQuery;
