// Thanks idea: https://dev.to/omgovich/the-tiniest-css-in-js-solution-for-your-open-source-react-components-1o94
import { useEffect, useLayoutEffect } from "react";

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Bundler is configured to load this as a processed minified CSS-string
import patchStyles from "../external/patch.css";
import styles from "../external/react-datepicker.css";

const styleElementMap = new Map();
const getParentDocument = (nodeRef: React.RefObject<null>) => {
  return nodeRef.current ? nodeRef.current?.["ownerDocument"] : document;
};

/**
 * Injects CSS code into the document's <head>
 */
export const useStylesheet = (
  nodeRef: React.RefObject<null>,
  enable: boolean = true
) => {
  useIsomorphicLayoutEffect(() => {
    const parentDocument = getParentDocument(nodeRef);

    if (
      typeof parentDocument !== "undefined" &&
      !styleElementMap.has(parentDocument) &&
      enable
    ) {
      // main style
      const styleElement = parentDocument.createElement("style");
      styleElement.id = "external_react-datepicker.css";
      styleElement.innerHTML = styles as string;
      styleElementMap.set(parentDocument, styleElement);

      parentDocument.head.appendChild(styleElement);

      // patch style
      const patchStyleElement = parentDocument.createElement("style");
      patchStyleElement.id = "external_patch.css";
      patchStyleElement.innerHTML = patchStyles as string;
      styleElementMap.set(parentDocument, patchStyleElement);

      parentDocument.head.appendChild(patchStyleElement);
    }
  }, []);
};
