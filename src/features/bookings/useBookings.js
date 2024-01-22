import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // 1) Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // 2) sortBy
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  // 3) Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  // query
  const {
    data: { data: bookings, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  //pre-fetching
  const nextPage = page + 1;
  const prevPage = page - 1;
  const hasNextPage = nextPage * PAGE_SIZE < count;
  // or if(page< pageCount)==> pageCount=Math.ceil(count/PAGE_SIZE)
  if (hasNextPage) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, nextPage],
      queryFn: () => getBookings({ filter, sortBy, page: nextPage }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, prevPage],
      queryFn: () => getBookings({ filter, sortBy, page: prevPage }),
    });
  }
  return { bookings, error, isLoading, count };
}
