import { useTheme } from "@mui/material";
import { PageBox } from "./Styled/CustomBoxes";

const Home = () => {
  const theme = useTheme();
  return (
    <PageBox
      sx={{
        backgroundImage: `url(https://res.cloudinary.com/delu9m4xu/image/upload/v1681945152/Art-Site/laurie.gif)`,
        filter:
          theme.palette.mode === "dark"
            ? "invert(100) brightness(90%)"
            : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    />
  );
};

export default Home;
