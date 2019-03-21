// Basic jest test

import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("checks for the existence of App component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toEqual(true);
  });
  it("renders the header", () => {
    const header = shallow(<App />);

    expect(header.find("[data-header]"));
    expect(header.text()).toBe("Welcome to the DAP team!");
    expect(header).toHaveLength(1);
  });
});
