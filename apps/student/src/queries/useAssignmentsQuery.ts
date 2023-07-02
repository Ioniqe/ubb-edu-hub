import { useQuery } from "@tanstack/react-query";
import api from "ui/util/api";
import { Assignment } from "../types/assignment";
import { Topic } from "../types";

const useAssigmentsQuery = (interest: Topic, filters: string[]) =>
  useQuery(
    ["assignments", interest.name, filters],
    () =>
      api<Assignment[]>({
        url: "/assessments",
        method: "GET",
        params: { subject: interest.name, filters: filters },
      }),
    {
      select: (response) => response.data,
    }
  );

export default useAssigmentsQuery;
