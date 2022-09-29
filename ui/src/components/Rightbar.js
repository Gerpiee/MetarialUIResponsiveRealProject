import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://c4.wallpaperflare.com/wallpaper/197/514/538/tv-show-disenchantment-bean-disenchantment-disenchantment-tv-show-hd-wallpaper-preview.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i1.sndcdn.com/artworks-000439349172-5cvpcp-t500x500.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/a1/fd/c1/a1fdc17f52eb1eb944cf38dec1121fe3.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://c4.wallpaperflare.com/wallpaper/197/514/538/tv-show-disenchantment-bean-disenchantment-disenchantment-tv-show-hd-wallpaper-preview.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://i1.sndcdn.com/artworks-000439349172-5cvpcp-t500x500.jpg"
          />

          <Avatar
            alt="Travis Howard"
            src="https://i1.sndcdn.com/artworks-000439349172-5cvpcp-t500x500.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/originals/a1/fd/c1/a1fdc17f52eb1eb944cf38dec1121fe3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/FI/en/99/EP0149-CUSA09988_00-AV00000000000002/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/736x/27/cc/e1/27cce187a6c6526625766428f73400f9.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/736x/27/cc/e1/27cce187a6c6526625766428f73400f9.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pinimg.com/736x/27/cc/e1/27cce187a6c6526625766428f73400f9.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://www.donanimhaber.com/images/images/haber/151135/src/rick-and-morty-6-sezon-yayin-tarihi-aciklandi151135_0.jpg"
              alt="Rick"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://medyascope.tv/wp-content/uploads/2022/07/rick-and-morty1.jpg"
              alt="Rick"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_.jpg"
              alt="Rick"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://i1.sndcdn.com/artworks-000439349172-5cvpcp-t500x500.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://c4.wallpaperflare.com/wallpaper/197/514/538/tv-show-disenchantment-bean-disenchantment-disenchantment-tv-show-hd-wallpaper-preview.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://i.pinimg.com/736x/27/cc/e1/27cce187a6c6526625766428f73400f9.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
