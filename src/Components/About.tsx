import { Box, Button, List, ListItem, Typography } from "@mui/material";

import aboutText from "../Helpers/aboutText";
import { BoxforThumbNails, PageBox } from "./Styled/CustomBoxes";

const About = () => {
  return (
    <PageBox
      sx={{
        width: "100%",
        margin: 0,
        padding: { xs: "10vh", sm: "15vh" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "600px" }}>
        <Typography variant="h4">Welcome!</Typography>
        {aboutText.map((par, i) => (
          <Typography variant="body2" key={`About-Para-${i}`} mb={2}>
            {par}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          maxWidth: "600px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginY: "5vh",
        }}
      >
        <Typography variant="h4">
          More about me and my work:
        </Typography>

        <List>
          <ListItem
              sx={{cursor: "pointer"}}
              onClick={() =>
                window.open("https://dev.gisellezatonyl.com", "_blank")
              }
          >
        
          
              <Typography variant="h3">Programming Portfolio</Typography>
          
          </ListItem>
          <ListItem
            sx={{cursor: "pointer"}}
              onClick={() =>
                window.open("https://vimeo.com/gisellezatonyl", "_blank")
              }
          >
        
          
              <Typography variant="h3">Vimeo</Typography>
          
          </ListItem>
          <ListItem
            sx={{cursor: "pointer"}}
              onClick={() =>
                window.open("https://twitter.com/GiselleZatonyl", "_blank")
              }
          >
        
          
              <Typography variant="h3">Twitter</Typography>
          
          </ListItem>
          <ListItem
            sx={{cursor: "pointer"}}
              onClick={() =>
                window.open("https://www.instagram.com/libidinal_/", "_blank")
              }
          >
        
          
              <Typography variant="h3">3D Art Instagram </Typography>
          
          </ListItem>
          <ListItem
            sx={{cursor: "pointer"}}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/chromatic_black/",
                  "_blank"
                  )
                }
          >
        
          
              <Typography variant="h3">Personal Instaram</Typography>
          
          </ListItem>
        </List>
      </Box>
    </PageBox>
  );
};

export default About;
