import { prettyTime, filterTime } from "./clientUtils";

test("prettyTime takes an isoTime date and converts it to Human Time", () => {
  expect(prettyTime("2019-12-25T19:00:00.000Z")).toBe(
    "December 25th, 2019 at 7:00 pm"
  );
});

test("Returns an array without reservations that have past", () => {
  let resArray = [
    {
      id: 5,
      name: "Sunny Java",
      date: "2019-07-14T17:00:00.000Z",
      createdAt: "2019-07-15T15:42:22.882Z",
      phoneNumber: "+15306931524"
    },
    {
      id: 3,
      name: "Legolas Greenleaf",
      date: "2020-09-14T19:00:00.000Z",
      createdAt: "2019-07-15T13:03:50.698Z",
      phoneNumber: "+15306931524"
    }
  ];
  expect(filterTime(resArray).length).toEqual(1);
});
