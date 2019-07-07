import { makeStyles } from "@material-ui/styles";

function getProfilePageClasses(theme) {
  const profileBGStyles = makeStyles({
    root: {
      maxHeight: "280px",
      "& .imgHero": {
        height: "100%",
        width: "100%",
        borderRadius: "25px"
        // [theme.breakpoints.up("xs")]: {
        //   padding: "0 10px",
        // },
      }
    }
  });

  const profileImageStyles = makeStyles({
    root: {
      transform: "translate(1%, -50%)",
      [theme.breakpoints.up("xs")]: {
        padding: "0 10px"
      },

      "& img": {
        borderRadius: "50%",
        height: "96px",
        width: "96px",
        [theme.breakpoints.up("md")]: {
          height: "128px",
          width: "128px"
        },
        [theme.breakpoints.up("lg")]: {
          height: "160px",
          width: "160px"
        }
      },

      "& div": {
        marginLeft: "1%",
        display: "inline-block",
        [theme.breakpoints.up("md")]: {
          transform: "translateY(-25%)"
        },
        [theme.breakpoints.up("lg")]: {
          transform: "translateY(-50%)"
        }
      }
    }
  });

  const taglineStyles = makeStyles({
    root: {
      marginTop: "-45px!important",
      [theme.breakpoints.up("md")]: {
        marginTop: "-65px!important"
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "-90px!important"
      },
      "& .MuiGrid-item > .MuiButtonBase-root": {
        marginRight: 10,
        height: 40
      },
      "& .MuiGrid-item.MuiGrid-container": {
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "flex-start"
        }
      }
    }
  });

  const aboutStyles = makeStyles({
    root: {
      marginTop: "10px",
      "& .MuiGrid-item": {
        marginTop: "10px!important"
      },

      "& .MuiGrid-item > .MuiChip-root": {
        margin: "0 4px 4px 0px"
      }
    }
  });

  const rootElStyles = makeStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        padding: "0 10px"
      }
    }
  });

  const ProfileBGClasses = profileBGStyles();
  const ProfileImageClasses = profileImageStyles();
  const AboutClasses = aboutStyles();
  const RootElClasses = rootElStyles();
  const TaglineClasses = taglineStyles();

  return {
    ProfileBGClasses,
    ProfileImageClasses,
    AboutClasses,
    RootElClasses,
    TaglineClasses
  };
}

export default getProfilePageClasses;
