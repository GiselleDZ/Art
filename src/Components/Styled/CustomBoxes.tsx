// This file exports various styled boxes and additional styles for boxes that are used in the other components throughout the application. The styled boxes include *BorderBox*, *TextIconBox*, *CenterBox*, *StartBox*, and *LineDivider*. There are also two style objects, *idBoxStyle* and *nameBoxStyle*, which are used to style specific elements in the NFT component.

import { Divider, Box } from "@mui/material";
import { styled } from "@mui/system";

// The style for the ID box in the NFT component
export const idBoxStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "39px",
  height: "29px",
  borderWidth: "0px 1px 1px 0px",
  borderRadius: "4px 0px",
};

// The style for the name box in the NFT component
export const nameBoxStyle = {
  position: "absolute",
  top: "202px",
  left: "16px",
  width: "230px",
  height: "44px",
  display: "flex",
  justifyContent: "flex-start",
  padding: "16px",
};

// A styled box component that displays a border and positions its contents in the center
export const BorderBox = styled(Box)`
  background: ${({ theme }) => theme.palette.bg[70]};
  border: 1px solid ${({ theme }) => theme.palette.fg[50]};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// A styled box component for arranging text and icon elements horizontally
export const TextIconBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

// A styled box component for centering its contents both horizontally and vertically
export const CenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

// A styled box component for arranging its contents horizontally, starting from the left
export const StartBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

// A styled divider component with custom width and color
export const LineDivider = styled(Divider)`
  width: 100%;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.fg[25]};
  margin-top: 24px;
  margin-bottom: 40px;
`;