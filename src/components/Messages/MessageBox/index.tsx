import { Box, Button, Container, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const MessageBox = ({ onMessageSubmit: any }) => {
  const [currMessageTyped, setCurrMessageTyped] = useState("");

  const _handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log("Data", formProps);
    onMessageSubmit(formProps);
  };

  return (
    <Container>
      <form onSubmit={_handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id='outlined-textarea'
            label='Enter your message'
            placeholder='Placeholder'
            name='message'
            fullWidth
            multiline
            // onChange={_handleChange}
          />

          <IconButton
            color='primary'
            aria-label='delete'
            size='large'
            type='submit'
          >
            <SendIcon />
          </IconButton>
        </Box>
      </form>
    </Container>
  );
};

export default MessageBox;
