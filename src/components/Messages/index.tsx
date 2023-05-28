import { Container, Typography } from "@mui/material";

const Messages = () => {
  return (
    <Container style={{ padding: "50px 10px" }}>
      <Typography align='center' variant='h2' style={{ height: "10vh" }}>
        Messages
      </Typography>
      <Container
        style={{ background: "red", minHeight: "80vh", overflow: "auto" }}
      >
        something
      </Container>
    </Container>
  );
};

export default Messages;
