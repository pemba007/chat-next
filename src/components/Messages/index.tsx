import { Container, Typography } from "@mui/material";
import SingleMessage from "./SingleMessage";
import MessageBox from "./MessageBox";

const Messages = () => {
  const _handleMessageSubmission = (values: any) => {
    console.log("Message Submitted ", values);
  };
  return (
    <Container style={{ padding: "50px 10px" }}>
      <Typography align='center' variant='h2' style={{ height: "10vh" }}>
        Messages
      </Typography>
      <Container
        style={{
          // background: "red",
          minHeight: "75vh",
          overflow: "auto",
          flexDirection: "column-reverse",
          display: "flex",
        }}
      >
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
        <SingleMessage isSender={true} />
      </Container>
      <MessageBox onMessageSubmit={_handleMessageSubmission} />
    </Container>
  );
};

export default Messages;
