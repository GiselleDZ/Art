import { Box, Button, Card, Typography } from "@mui/material";
import BubbleAnimation from "./Animations/BubbleAnimation";
import { Link } from "react-router-dom";
import { BoxforThumbNails } from "./Styled/CustomBoxes";

const WebsitePieces = () => {
  const sitesRouter = [
    {
      path: "/bubble",
      description: "CSS animation",
      year: 2023,
      element: BubbleAnimation as React.FC,
    },
  ];
  return (
    <BoxforThumbNails>
      {sitesRouter.map((s) => (
        <Link to={`${window.location}${s.path}`} key={s.path}>
          <Button>
            <Card>
              <Typography variant="h2" mb={3}>
                {s.path.slice(1, s.path.length).toUpperCase()}
              </Typography>
              <Typography variant="body1" mb={2}>
                {s.description}
              </Typography>
              <Typography variant="body1">{s.year}</Typography>
            </Card>
          </Button>
        </Link>
      ))}
    </BoxforThumbNails>
  );
};

export default WebsitePieces;
