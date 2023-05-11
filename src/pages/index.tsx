import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { googleSignIn } from "@/firebase/googleSignIn";

import { useGlobalContext } from "../hooks/contexts";

export default function Home() {
  const { setUser } = useGlobalContext();
  const _handleLogin = async () => {
    const data = await googleSignIn();
    if (data) {
      // No Data Error
      console.log("Data", data);
    } else {
      // alert("Error in login");
      console.log("Data", data);
    }
  };

  const _handleSignUp = () => {};

  return (
    <main className={styles.main}>
      <Container fixed>
        <Typography
          variant='h1'
          gutterBottom
          align='center'
          style={{
            color: "#fff",
            fontWeight: "600",
            fontSize: "4rem",
          }}
        >
          Login
        </Typography>
        <Typography
          align='center'
          variant='h1'
          gutterBottom
          style={{ color: "#fff" }}
        >
          to Chat
        </Typography>

        <Box align='center'>
          <Button variant='contained' size='large' onClick={_handleLogin}>
            <Typography variant='button'>Login</Typography>
          </Button>
          <Button variant='text' size='large' onClick={_handleSignUp}>
            Sign Up
          </Button>
        </Box>
      </Container>
    </main>
  );
}
