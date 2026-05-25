import { useQuery } from "@apollo/client/react";
import { CVS_QUERY } from "../graphql/cvs.query";
import type { Cv } from "../../shared/types";

function useCvs() {
  return useQuery<{ cvs: Cv[] }>(CVS_QUERY, {
    fetchPolicy: "cache-and-network",
  });
}

export default useCvs;
