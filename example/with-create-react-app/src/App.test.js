import { render } from "@testing-library/react";
import App from "./App";

test("renderable", () => {
  expect(() => render(<App />)).not.toThrowError();
});
