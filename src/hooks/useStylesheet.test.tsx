import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { useStylesheet } from "./useStylesheet";

describe("Test hooks/useStylesheet", () => {
  beforeEach(() => {
    document.head.replaceChildren("");
  });

  test("should be visible", () => {
    const TestComponent = () => {
      const ref = useRef(null);
      useStylesheet(ref);
      return (
        <div data-testid="test-container" ref={ref}>
          children
        </div>
      );
    };

    render(<TestComponent />);
    const container = screen.getByTestId("test-container");
    expect(container).toBeVisible();
    expect(container).toHaveTextContent("children");
    expect(
      document.head.querySelector("style[id='external_react-datepicker.css']")
    ).not.toBeNull();
  });

  test("should be not found any external css when disabled", () => {
    const TestComponent = () => {
      const ref = useRef(null);
      useStylesheet(ref, false);
      return (
        <div data-testid="test-container" ref={ref}>
          children
        </div>
      );
    };

    render(<TestComponent />);
    const container = screen.getByTestId("test-container");
    expect(container).toBeVisible();
    expect(container).toHaveTextContent("children");
    expect(
      document.head.querySelector("style[id='external_react-datepicker.css']")
    ).toBeNull();
  });
});
