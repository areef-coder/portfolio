import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { Button, duration, Typography } from "@mui/material";
import me from "../Assets/my.jpg";
import Skills from "../ShortCodes/Skills";
import Projects from "../ShortCodes/Projects";
import bg from "../Assets/bg.jpg";
import aary from "../Assets/myself.jpg";
import { animate, color, delay, motion } from "framer-motion";
import { Download, Opacity } from "@mui/icons-material";

export default function Home() {
  const Box = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const PDF_FILE='http://localhost:3000/AREEF resume.pdf'

  const DownloadFileAtURL=(url)=>{
    const fileName=url.split('/').pop()
    const aTag=document.createElement('a')
    aTag.href=url
    aTag.setAttribute('Download',fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
    }
  return (
      
  
    <div
      style={{
        height: "auto",
      }}
    >
      <Box
        sx={{
          p: "2%",
          backgroundImage: `url(${aary})`,
          bgcolor: "black",
          // backgroundSize: "cover",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <Box
          sx={{
            flexGrow: "2%",
            // backgroundImage: `url(${aary})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Grid sx={{ p: "2%" }} container spacing={1}>
            <Grid size={7}>
              <motion.div
                initial={{ x: -800, Opacity: 0 }}
                animate={{ x: -40, Opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                sx={{ m: 2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "bubble tea",
                    color: "red",
                    fontSize: "45px",
                  }}
                >
                  𝓐𝓡𝓔𝓔𝓕 𝓜𝓚
                </Typography>
                <br />
                <br />
              </motion.div>
              <motion.div
                initial={{ x: -800, Opacity: 0 }}
                animate={{ x: -10, Opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                sx={{ m: 2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "bubble tea",
                    color: "whitesmoke",
                    fontSize: "35px",
                  }}
                >
                  𝕨𝕖𝕓 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣
                </Typography>
                <br />
              </motion.div>
              <motion.div
                initial={{ x: -800, Opacity: 0 }}
                animate={{ x: 20, Opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                sx={{ m: 2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "bubble tea",
                    color: "rgb(159 149 150)",
                    fontSize: "35px",
                  }}
                >
                  𝚠𝚎𝚋 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚛
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={5}>
              <Box sx={{ height: "50vh" }}>
                {/* <img src={me} height={400} width={400} /> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
        < Button sx={{borderRadius:'2% solid pink', bgcolor:'goldenrod'}} onClick={()=>{DownloadFileAtURL(PDF_FILE)}}> DOWNLOAD RESUME</Button>
      </Box>

      {/* skills section */}
      <Box sx={{ bgcolor: "black", height: "auto" }}>
        <Skills />
      </Box>
      {/* project section */}
      <Box
        sx={{
          bgcolor: "black",
          height: "auto",
        }}
      >
        <Projects />
      </Box>
    </div>
  );
}
