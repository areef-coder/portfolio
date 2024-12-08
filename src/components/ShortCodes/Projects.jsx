// src/ProjectDisplay.js

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";
import { Language } from "@mui/icons-material";

const StyledCard = styled(Card)({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const projects = [
  {
    title: " CLOUD BUSS",
    description:
      "An AIRLINE-TICKET-RESERVATION ,user-friendly time management where user can book a ticket for himself or friends by online instedd of going to airport   this project is built using :php,mysql,html,css,bootstrap           ",
    image: "https://img.jagranjosh.com/images/2024/March/432024/airline.webp",
  },
  {
    title: "FOOD-DELIVERY-APP ",
    description:
      "AN ONLINE DELIVERY APP,...made using react js for frontend and mongodb for the backend..,where clients can oder online from the nearest store ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s",
  },
  {
    title: "GOOGLE KEEP -CLONE",
    description:
      "the original clone ,,,same as the google keep we can add note and delete a note ,also we can retrieve the deleted note from the trash.....,this is built using react js and localhost for datax .",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTk9PUySQ1yUSsODDs8xkB40hMP5DJFQ_R2Q&s",
  },
];

const ProjectDisplay = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  return (
    <Box sx={{ padding: "4%", mt: "5%" }}>
      <Typography variant="h3" color="white" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard onClick={() => handleProjectClick(index)}>
              <CardMedia
                component="img"
                height="130vh"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProject === index ? project.description : ""}
                </Typography>
                <Button size="small" onClick={() => handleProjectClick(index)}>
                  {selectedProject === index ? "Hide Details" : "Show Details"}
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectDisplay;
