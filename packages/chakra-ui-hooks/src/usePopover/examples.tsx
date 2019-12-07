import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/theme";
import {
  PopoverProvider,
  usePopoverContent,
  usePopoverTrigger,
  usePopoverState,
} from "./usePopover";
import Portal from "../usePortal";

const stories = storiesOf("usePopover", module);

stories.addDecorator(story => (
  <ThemeProvider>
    {/* <CSSReset /> */}
    {story()}
  </ThemeProvider>
));

function PopoverExample() {
  const popover = usePopoverState();
  const trigger = usePopoverTrigger();
  const content = usePopoverContent();

  return (
    <>
      <button {...trigger}>Open</button>
      <Portal className="popover__portal">
        <div {...content}>
          This is the content <button onClick={popover.onClose}>Close</button>
        </div>
      </Portal>
    </>
  );
}

stories.add("Default", () => (
  <PopoverProvider placement="right">
    <PopoverExample />
  </PopoverProvider>
));