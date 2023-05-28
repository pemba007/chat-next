import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { googleSignIn } from "@/firebase/googleSignIn";

import { useRouter } from "next/navigation";

import { useGlobalContext } from "../hooks/contexts";

export default function Home() {
  const router = useRouter();
  const { setUser } = useGlobalContext();

  const _handleLogin = async () => {
    try {
      const data = await googleSignIn();
      console.log("Google sign in data", data);

      setUser(data);
      router.push("/home");

      // Access the data and perform necessary actions
    } catch (error) {
      // Handle any errors that occur during sign-in
      console.log("Error in login", error);
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
