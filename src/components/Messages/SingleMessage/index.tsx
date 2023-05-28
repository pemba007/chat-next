import { Container } from "@mui/material";

function SingleMessage({ isSender = false }) {
  const styles = isSender
    ? { display: "flex", flexDirection: "row" }
    : {
        display: "flex",
        flexDirection: "row-reverse",
      };

  return <Container style={styles}>This is the Messages</Container>;
}

export default SingleMessage;
