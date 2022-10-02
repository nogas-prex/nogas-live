import {
    Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function CaseStudyBackground(props) { 
    const image = props.image
    const title = props.title
    const subtitle = props.subtitle
    const body = props.body; 
    const stats = props.stats

    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100vw", backgroundColor: "white", height: "100vh" }}
      >
        <Grid item xs={12} md={6} sx={{ padding: "3em" }}>
          <Card
            // backgroundImage={`url(${metricAgingImage})`}
            sx={{
              height: "500px",
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
            elevation={10}
          >
            <CardHeader sx={{ height: "70%" }}></CardHeader>
            <CardContent sx={{ display: "flex", color: "white" }}>
              <Grid
                container
                direction="row"
                alignItems="bottom"
                justifyContent="bottom"
                spacing={3}
              >
                {stats.map((stat) => (
                  <Grid item xs={4}>
                    <Typography variant="mdStat">{stat.pct}</Typography>
                    <br></br>
                    <Typography variant="mdStatText">{stat.text}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ textAlign: "left" }} xs={12} md={5}>
          <Typography variant="sectionTitle">{title}</Typography>
          <br></br>
          <Typography variant="sectionSubtitle">{subtitle}</Typography>
          <hr color="EC008C"></hr>
          {body.map((b) => (
            <Typography variant="bodyBlack">{b}</Typography>
          ))}
        </Grid>
      </Grid>
    );
}