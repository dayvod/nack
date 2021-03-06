import React from "react";
import { render, cleanup } from "react-testing-library";
import { BrowserRouter as Router } from "react-router-dom";
import Channels from "../channels";

afterEach(cleanup);

const channels = (() => {
  const c = [
    {
      id: 1,
      name: "JavaScript",
      msgs: [
        {
          id: 1,
          timestamp: "2018-20-12T13:37:27+00:00",
          sender: "Jaxson",
          channelId: 1,
          msg: "Nack is better than slack!"
        },
        {
          id: 2,
          timestamp: "2018-20-12T13:38:27+00:00",
          sender: "Pax",
          channelId: 1,
          msg: "Nah, chill"
        }
      ],
      creator: "Jaxson",
      msgCount: 2
    },
    {
      id: 2,
      name: "Misc",
      msgs: [
        {
          id: 1,
          timestamp: "2018-20-12T13:37:27+00:00",
          sender: "Jaxson",
          channelId: 2,
          msg: "Donald who?"
        },
        {
          id: 2,
          timestamp: "2018-20-12T13:38:27+00:00",
          sender: "Pax",
          channelId: 2,
          msg: "Fuck it, do some pushups"
        }
      ],
      creator: "Jaxson",
      msgCount: 2
    }
  ];
  return c.reduce(
    (acc, cv) =>
      Object.assign(acc, {
        [cv.name]: {
          ...cv,
          isFetching: false,
          hasError: null
        }
      }),
    {}
  );
})();

test("It should display a list of channels", () => {
  const container = render(
    <Router>
      <Channels channels={channels} />
    </Router>
  );

  expect(container.queryByText("JavaScript")).not.toBeNull();
});
