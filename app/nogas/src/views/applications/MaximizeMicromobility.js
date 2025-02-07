import {
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

import { ImageItem } from "../../components/ImageCarousel";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";
import ResponsiveAppBar from "../../components/AppBar";
import CaseStudyBackground from "../../components/caseStudies/caseStudyBackground";
import CaseStudyLanding from "../../components/caseStudies/caseStudyLanding";
import CaseStudyVision from "../../components/caseStudies/caseStudyVision";
import ImageSlider from "../../components/ImageSlider";
import CaseStudySummary from "../../components/caseStudies/caseStudySummary";

export default function MaximizingMicromobility() {
  const carouselItems = [
    {
      name: "Existing",
      img: "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/4_Micro-mobility+Corridor/Micromobility+Corridor_Employment+Campus.png",
    },
    {
      name: "Scenario 1",
      img: "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/4_Micro-mobility+Corridor/Micromobility+Corridor_Residential.png",
    },
    {
      name: "Scenario 2",
      img: "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/4_Micro-mobility+Corridor/Micromobility+Corridor_University+Campus.png",
    },
    {
      name: "Scenario 3",
      img: "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/4_Micro-mobility+Corridor/Micromobility+Corridor_Residential-Commercial.png",
    },
  ];
  
  
  return (
    <div id="mm-main">
      <ResponsiveAppBar />
      <CaseStudyLanding
        image={
          "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/0_Cover/1_Small.jpg"
        }
        title="MAXIMIZING MICRO-MOBILITY"
        subtitle="Streetscape Adaption"
        body={[
          `In the U.S., only about 5 percent of the working population uses public transit to get to work,
          and this percentage has changed little since 1995.[1] In many regions, where suburb-to-suburb
          commute patterns are steadily replacing their suburb-to-urban core precursors, public transit
          has become increasingly outmoded.[2]`,
          `According to the latest National Household Travel Survey (2017), around 60 percent of domestic
          light-duty vehicle trips are shorter than 6 miles.[3] These short trips represent a huge potential for
          reducing vehicular dependence in suburban areas, if more micromobility options are
          implemented. However, current standards and design guidelines for suburban streets typically
          lack the essential infrastructure to accommodate large-scale micromobility development.`,
        ]}
        citations={[
          `[1] Burrows, M., Burd, C., & McKenzie, B. (2021). Commuting by Public Transportation in the United States: 2019. American Community Survey Reports ACS-48. Access (11/20/2022): https://www.census.gov/content/dam/Census/library/publications/2021/acs/acs-48.pdf`,
          `[2] Polzin, S.E., Pisarski, A.E., Spear, B., Long, L., & McGuckin, N. (2015). Commuting in America 2013: Brief 15. Commuting Flow Patterns. American Association of State Highway and Transportation Officials. https://www.ecodestreet.com/product/Commuting-in-America-2013-Brief-15- Commuting-Flow-Patterns/`,
          `[3] Federal Highway Administration. (2017). 2017 National Household Travel Survey, U.S. Department of Transportation, Washington, DC.`,
        ]}
      />
      <CaseStudyBackground
        title="BACKGROUND"
        subtitle="Car-dominated Travel Mode"
        image={
          "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/2_Background/0_Cover/1.png"
        }
        body={[
          `The average width of an American residential street is 55 feet, which is three times the average street 
                width in many other countries. This car-based street design not only leads to more car accidents (because 
                there are more cars on the road), its also wastes valuable land resources.[1]`,
        ]}
        citations={[
          `[1] Millard-Ball, A. (2022). The width and value of residential streets. Journal of the American Planning Association, 88(1): 30-43.`,
        ]}
        stats={[
          {
            pct: "55ft",
            text: "Average Width of Residential Street",
            citation:
              "Millard-Ball, A. (2022). The width and value of residential streets. Journal of the American Planning Association, 88(1): 30-43.",
          },
          {
            pct: "19642",
            text: "miles Annual VMT per Household",
            citation:
              "Federal Highway Administration. (2017). 2017 National Household Travel Survey, U.S. Department of Transportation, Washington, DC.",
          },
          {
            pct: "85%+",
            text: "Workers Drive to Work",
            citation:
              "Burrows, M., Burd, C., & McKenzie, B. (2021). Commuting by Public Transportation in the United States: 2019. American Community Survey Reports ACS-48. Access (11/20/2022): https://www.census.gov/content/dam/Census/library/publications/2021/acs/acs-48.pdf",
          },
        ]}
        link={"/applications/maximize-micromobility-background/#mm-background"}
      />
      <Grid
        container
        sx={{ width: "100vw", height: "100%", overflowY: "hidden" }}
      >
        <ImageSlider
          leftImage={
            "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/3_Vision/Section_Existing.png"
          }
          rightImage={
            "https://nogas-swar.s3.amazonaws.com/img/6_Case+Study+04_+Maximizing+Micro-mobility/3_Vision/Section_Long+Term.png"
          }
        />{" "}
      </Grid>{" "}
      <CaseStudyVision
        title="VISION"
        subtitle="A Multi-modal Mobility Adapted Street"
        body={[
          `In the near term, the excessive widths of many suburban right of ways can be narrowed and
improved by incorporating protected micromobility lanes and hubs. Micromobility corridors can
then be implemented to further improve connectivity and pedestrian safety from block to block.`,
          `In the autonomous future, with the compact design and precise control system of autonomous
mobility systems, the width of a vehicular lane can be reduced dramatically, so that a large
number of paved surfaces can be converted into greenspace or commercial frontages.
Meanwhile, an autonomous-delivery infrastructure network can be built out and connected to
the existing micromobility corridors, further reducing the number of daily household vehicle
trips.`,
        ]}
        icons={[
          { img: "", alt: "", label: "Smart Density" },
          { img: "", alt: "", label: "Reduced Vehicle Usage" },
          {
            img: "envPerfImage",
            alt: "",
            label: "Better Environmental Performance",
          },
        ]}
      />
      {/* <div> custom stuff </div> */}
      <Grid container direction="column" sx={{ marginTop: "7vh" }}>
        <Grid item>
          <Grid container direction="row">
            <Grid item xs={0} md={6}>
              {" "}
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ padding: { xs: "2em", md: "7em" }, textAlign: "left" }}
            >
              <Typography variant="sectionTitle">
                {" "}
                MICRO-MOBILITY CORRIDOR{" "}
              </Typography>
              <br></br>
              <Typography variant="sectionSubtitle">
                Neighborhood Optimization with OASIS
              </Typography>
              <hr color="EC008C"></hr>
              <Typography variant="bodyBlack">
                OASIS is a parametric toolbox that can help planners and
                developers optimize neighborhood- scale land use and mobility
                frameworks. The micromobility corridor optimization tool of the
                OASIS toolbox can generate and optimize the overall
                micromobility corridor framework to maximize the connectivity
                and accessibility based on given land use patterns.
              </Typography>
              <br></br>
              <br></br>
              <Button
                variant="outlined"
                style={{
                  color: "#EC008C",
                  borderColor: "#EC008C",
                  marginTop: "3em",
                }}
                endIcon={<ArrowForwardIcon />}
              >
                <HashLink to={"/oasis"}>Learn more about OASIS</HashLink>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          direction="column"
          sx={{
            paddingLeft: { xs: "2em", md: "25%" },
            paddingRight: { xs: "2em", md: "25%" },
            marginBottom: "2em",
          }}
        >
          <Grid item xs={12} md={6} elevation={5}>
            <Carousel
              navButtonsAlwaysVisible={true}
              sx={{ maxWidth: "100%", minHeight: "500px" }}
            >
              {carouselItems.map((img, i) => (
                <ImageItem key={i} image={img.img} name={img.name} />
              ))}
            </Carousel>
          </Grid>{" "}
          <Grid item xs={0} sm={3}>
            {" "}
          </Grid>{" "}
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              Click through the various scenarios above to see how the
              micromobility corridor optimization tool can be applied under
              different land use settings to maximize connectivity and
              accessibility.
            </Typography>
          </Grid>{" "}
          <Grid item xs={0} sm={3}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}