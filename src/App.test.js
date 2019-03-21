import React from "react";
import { shallow } from "enzyme";
import App from "./App";

// Basic Test with Jest and Enzyme
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

// ----- Test Anatomy ---- //

// 1. "describe"  => describes What component aspect we are testing
// 2. "it"        => describes the piece of functionality we're testing.
// 3. "expect"    => An assertion that perfoms a check on a software output.
