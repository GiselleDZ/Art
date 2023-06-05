// This file exports various styled boxes and additional styles for boxes that are used in the other components throughout the application. The styled boxes include *BorderBox*, *TextIconBox*, *CenterBox*, *StartBox*, and *LineDivider*. There are also two style objects, *idBoxStyle* and *nameBoxStyle*, which are used to style specific elements in the NFT component.

import { Box } from "@mui/material";
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

export const BoxforThumbNails = styled(Box)`
  width: 100vw;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  align-content: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

// A styled box component for arranging text and icon elements horizontally
export const TextIconBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PageBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
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
