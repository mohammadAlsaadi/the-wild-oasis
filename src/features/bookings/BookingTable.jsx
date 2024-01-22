import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useBookings } from "./useBookings";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading: isFetching, count } = useBookings();
  if (isFetching) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;
  // const bookingsCount = bookings.length;

  // const filterValue = searchParams.get("status") || "all";
  // let filteredBookings = [];
  // if (filterValue === "all") filteredBookings = bookings;
  // if (filterValue === "unconfirmed")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "unconfirmed"
  //   );
  // if (filterValue === "checked-out")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-out"
  //   );
  // if (filterValue === "checked-in")
  //   filteredBookings = bookings.filter(
  //     (booking) => booking.status === "checked-in"
  //   );

  // const sortBy = searchParams.get("sortBy") || "startDate-asc";

  // const [field, direction] = sortBy.split("-");
  // const modifer = direction === "asc" ? 1 : -1;
  // const sortedCabins = filteredBookings.sort(
  //   (a, b) => (a[field] - b[field]) * modifer
  // );

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Menus>
  );
}

export default BookingTable;
