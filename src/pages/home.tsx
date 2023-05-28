import { Grid, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";

import Friends from "@/components/Friends";
import Messages from "@/components/Messages";

const HomePage = () => {
  const [currentActiveFriend, setCurrentActiveFriend] = useState();

  const _changeActiveFriend = (friend: SetStateAction<undefined>) => {
    setCurrentActiveFriend(friend);
  };

  return (
    <main>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ background: "blue", padding: "50px 10px" }}
        >
          <Typography align='center' variant='h2'>
            Friends
          </Typography>
          <Friends changeActiveFriend={_changeActiveFriend} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          style={{ maxHeight: "100vh", overflow: "hidden" }}
        >
          <Messages />
        </Grid>
      </Grid>
    </main>
  );
};

export default HomePage;
