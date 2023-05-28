import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import SingleFriend from "../SingleFriend";
import { useEffect } from "react";

const FriendsComponent = (
  {
    // changeActiveFriend
  }
) => {
  // useEffect(() => {}, []);

  return (
    <List style={{ width: "100%" }}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Sam Smith' secondary='Jan 9, 2014' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Hari Krishna' secondary='Jan 7, 2014' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Ram Bahadur' secondary='July 20, 2014' />
      </ListItem>
    </List>
  );
};

export default FriendsComponent;
