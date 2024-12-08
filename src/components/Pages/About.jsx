import { Box, Chip, Container, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { pink, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import bg from "../Assets/bg.jpg";
import crt from "../Assets/crt.jpg";
import { Link } from "react-router-dom";
import Sslc from "../ShortCodes/Sslc";

export default function About() {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: "rotate(0deg)",
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: "rotate(180deg)",
        },
      },
    ],
  }));

  const skills = [
    {
      name: "SKILL INDIA   (National Skill Development corporation)",
      type: "JUNIOR SOFTWARE DEVELOPER",
      dec: "NSDC this is an government certified course which i have completed by attending the 450 hours of classes and cleared the examination on the rank of 95/100 in core,40/50 in non-core ,obtained the A+ grade ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuR-oLxrwuzaSQfNCNRHl2XGOI20uVHR1tiQ&s",
    },
    {
      name: "UTL TECHNOLOGY LTD",
      type: "AI/ML [intern]",
      dec: "UTL technology  as an intern successfully learned multiple skills and file handling and gained real-time team building activities  ",
      img: "https://cmrtc.ac.in/wp-content/uploads/2020/03/utl.jpg",
    },
    {
      name: "MAGIC BUS",
      type: " Trainee ",
      dec: "During the internship at utl technology i also joined magic buss program which helped me to gain skills & responsiblities of time managements,communicatinol expirience ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTG5FVrItN_tDx-bDlc_nfIbrGnx0kdL5iKw&s",
    },
    {
      name: "CODELAB SYSYTEMS",
      type: "MERN STACK DEVELOPER",
      dec: "IN codelab system i joined as a intern where am able to learn my programing skills which will be used to development of websites,during the time periods i developed my project using frontend and backend and also learned to secure site",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1e51y1LjPdgj_UwqqmSEqZTgpKVTTHNDaxQ&s",
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ bgcolor: "black" }}>
      <Box sx={{ bgcolor: "black", height: "auto" }}>
        <Accordion sx={{ bgcolor: "black", color: "green" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            𝖕𝖊𝖗𝖘𝖔𝖓𝖆𝖑 𝖎𝖓𝖋𝖔
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white" }}>
            <Typography>Name:-Areef MK</Typography>
            <Typography>Age:-21 yre</Typography>
            <Typography>Gender:-Male </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "black", color: "yellow" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            l໐¢คtiຖ
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white" }}>
            mangalore, Dakshina Kannada
            <Typography>State: Karnataka</Typography>
            <Typography>country: India</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: "black", color: "red" }} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="  panel3-header"
          >
            𝓼𝓮𝓻𝓿𝓲𝓬𝓮𝓼
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white" }} s>
            <Typography>web Development</Typography>
            <Typography>application Development</Typography>
            <Typography>UI Design</Typography>
            <Typography>Graphics Design</Typography>
          </AccordionDetails>
          {/* <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions> */}
        </Accordion>
      </Box>

      {/* educational */}
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          color: "yellowgreen",
        }}
      >
        <Typography sx={{}} align="center" variant="h4">
          ˜”*°•.˜”*°• Educations •°*”˜.•°*”˜
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          color: "white",
          height: "auto",
        }}
      >
        <Typography variant="h3" align="center">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="School" value="1" />
                  <Tab label="PUC" value="2" />
                  <Tab label="UG-deg" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box>
                  <Typography variant="h3">Sayyed madani</Typography>
                  <br />
                  <Typography variant="h5">
                    Passed the X examination with the percentage of :-{" "}
                  </Typography>
                  <Chip
                    sx={{ m: 7, color: "white" }}
                    label="76"
                    // component={Link}
                    // to='/Sslc'
                    variant="outlined"
                    clickable
                  />{" "}
                </Box>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <Box>
                  <Typography variant="h3">MILAGRES</Typography>
                  <br />
                  <Typography variant="h5">
                    Passed the XII examination with the percentage of :-{" "}
                  </Typography>
                  <Chip
                    sx={{ m: 7, color: "red" }}
                    label="69"
                    // component={Link}
                    // to='/Puc'
                    variant="outlined"
                    clickable
                  />{" "}
                </Box>
              </TabPanel>
              <TabPanel value="3">
                <Box>
                  <Typography variant="h3">SRINIVAS</Typography>
                  <br />
                  <Typography variant="h5">
                    Passed the UG examination with the CGPA of :-{" "}
                  </Typography>
                  <Chip
                    sx={{ m: 7, color: "red" }}
                    label="9"
                    // component={Link}
                    // to='/Degree'
                    variant="outlined"
                    clickable
                  />{" "}
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Typography>
      </Box>

      {/* CERTIFICATIONS */}
      <Box>
        <Typography bgcolor={"black"} color="white" align="center" variant="h3">
          CERTIFICATIONS
        </Typography>
      </Box>
      <Box
        sx={{
          // backgroundImage:`url(${crt})`,backgroundSize:'cover',
          bgcolor: "black",
          flexWrap: "wrap",
          gap: "2%",
          height: "auto",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {skills?.map((skills, index) => {
          return (
            <Card sx={{ maxWidth: 345, mb: 3 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[900] }} aria-label="hi">
                    aary
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title="CERTIFICATES"
                // subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={skills.img}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {skills.name}
                </Typography>
                <hr />
                <Typography variant="body3" sx={{ color: "text.secondary" }}>
                  {skills.type}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography sx={{ marginBottom: 2 }}>ABOUT:</Typography>

                  <Typography sx={{ marginBottom: 2 }}>
                    {skills.level}
                  </Typography>
                  <Typography>{skills.dec}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
