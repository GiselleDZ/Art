// This file exports the MiddleEllipsis component, which truncates the provided text and adds an ellipsis in the middle if the text is longer than the specified maxLength. The component accepts the text and maxLength properties and extends the TypographyProps from Material-UI to provide additional styling options. The truncated text with an ellipsis in the middle is calculated in the truncatedText constant, and the Typography component from Material-UI is used to render the final text.
import React from "react";
import { Typography, TypographyProps } from "@mui/material";

// MiddleEllipsisProps extends the TypographyProps to include
// text and maxLength properties for the MiddleEllipsis component
interface MiddleEllipsisProps extends TypographyProps {
  text: string;
  maxLength: number;
}

export const MiddleEllipsis: React.FC<MiddleEllipsisProps> = ({
  text,
  maxLength,
  ...props
}) => {
  const truncatedText =
    text.length > maxLength
      ? text.slice(0, maxLength / 2) + "..." + text.slice(-maxLength / 2)
      : text;

  return (
    <Typography
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "100%",
        display: "inline-block",
      }}
      {...props}
    >
      {truncatedText}
    </Typography>
  );
};
