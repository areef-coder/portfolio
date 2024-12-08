// src/AnimatedCard.js

import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import { bgcolor, styled } from "@mui/system";
import { animate, color, delay, motion } from "framer-motion";
import { Opacity, whileInView } from "@mui/icons-material";

const StyledCard = styled(Card)({
  transition: "transform 0.3s, box-shadow 0.3s",
  perspective: "1000px",

  "&:hover": {
    transform: "scale(1.05) rotateY(20deg)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    color: "green",
    bgcolor: "pink",
  },
});

const CardMediaStyled = styled(CardMedia)({
  height: 140,
  width: 200,
  transition: "transform 0.4s",
  bgcolor: "red",
  "&:hover": {
    transform: "scale(1.1)",
    color: "blue",
  },
});

const AnimatedCard = () => {
  const skills = [
    {
      img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
      name: "REACT",
      decp: "codelab",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s",
      name: "MONGO DP",
      decp: "codelab",
    },
    {
      img: "data:image/png;base64,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",
      name: "JAVA SCRIPT",
      decp: "codelab",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVCBJKM9UbSGIPvsF8psV7atuneTtUXka5A&s",
      name: "NODE JS",
      decp: "codelab",
    },
    {
      img: "data:image/png;base64,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",
      name: "PHP",
      decp: "Srinivas",
    },
    {
      img: "https://cdn.intuji.com/2023/10/MySQL.png",
      name: "MYSQL",
      decp: "Srinivas",
    },
    {
      img: "https://sreyas.ac.in/wp-content/uploads/2020/06/web-banner-AIML-1.jpg",
      name: "AI/ML",
      decp: "UTL",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/180px-ISO_C%2B%2B_Logo.svg.png",
      name: "C++",
      decp: "Srinivas",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*_NVBTVdmjt3Qvq3CZOySXg.png",
      name: "C#",
      decp: "Srinivas",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFAoHUEQ7PBsW9cQCtqWbgcuJaYyCUk47_Q&s",
      name: "HTML5",
      decp: "Utl",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      name: "CSS3",
      decp: "Utl",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&s",
      name: "EXPRESS JS",
      decp: "self",
    },
  ];
  return (
    <div>
      <Box>
        <Typography
          sx={{ m: "2%" }}
          color={"yellowgreen"}
          variant="h3"
          FullWidth
        >
          SKILLS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
gap:'2%',
          height: "auto",
        }}
      >
        {skills?.map((index) => {
          return (
            <StyledCard>
              <CardMediaStyled image={index.img} title="Card Image" />
              <CardContent>
                <Typography variant="h5" component="div">
                  {index.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {index.decp}
                </Typography>
              </CardContent>
            </StyledCard>
          );
        })}
      </Box>
    </div>
  );
};

export default AnimatedCard;
