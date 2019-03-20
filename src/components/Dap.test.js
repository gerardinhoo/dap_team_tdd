import React from "react";
import { shallow } from "enzyme";
import Dap from "./Dap";

describe("Dap component", () => {
  it("checks for the existence of Dap component", () => {
    const wrapper = shallow(<Dap />);

    expect(wrapper.exists()).toEqual(true);
  });
  it("renders the header", () => {
    const header = shallow(<Dap />);

    expect(header.find("[data-header]"));
    expect(header.text()).toBe("Welcome to the DAP team!");
    expect(header).toHaveLength(1);
  });
});
