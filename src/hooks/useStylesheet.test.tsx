import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { useStylesheet } from "./useStylesheet";

describe("Test hooks/useStylesheet", () => {
  const TestComponent = () => {
    const ref = useRef(null);
    useStylesheet(ref);
    return (
      <div data-testid="test-container" ref={ref}>
        children
      </div>
    );
  };

  test("should be visible", () => {
    render(<TestComponent />);
    const container = screen.getByTestId("test-container");
    expect(container).toBeVisible();
    expect(container).toHaveTextContent("children");
    expect(
      document.head.querySelector("style[id='external_react-datepicker.css']")
    ).not.toBeNull();
  });
});
