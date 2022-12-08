import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      ...theme.fn.focusStyles(),
      height: "100vh",
      backgroundColor: "transparent",
      borderRight: 0,
    },

    header: {
      "paddingBottom": theme.spacing.md,
      "marginBottom": theme.spacing.md * 1.5,
      "padding": "5px 10px 0 0",
      "display": "flex",
      " .logo": {
        height: "50px",
        svg: {
          height: "50px",
        },
      },
      " .name": {
        height: "30px",
        display: "flex",
        marginLeft: 0,
        marginRight: "auto",
        span: {
          margin: "auto 12px",
          fontFamily: "Actay Wide",
          fontSize: 26,
          lineHeight: "26px",
        },
      },
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
    },

    link: {
      ...theme.fn.focusStyles(),
      "display": "flex",
      "alignItems": "center",
      "textDecoration": "none",
      "fontSize": "20px",
      "lineHeight": "32px",
      "padding": `${theme.spacing.sm}px ${theme.spacing.lg}px`,
      "borderRadius": theme.radius.lg,
      "fontWeight": 500,
      "color": theme.colors.gray[7],

      "&:hover": {
        backgroundColor: "rgba(255,255,255,.5)",
        color: "black",
        [`& .${icon}`]: {
          color: "black",
        },
      },
    },

    support: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[5],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    },

    mailToLink: {
      color: theme.colors.violet[5],
    },

    linkIcon: {
      height: 32,
      ref: icon,
      color: theme.colors.gray[7],
      marginRight: theme.spacing.md,
      marginleft: theme.spacing.md,
    },

    linkActive: {
      "&, &:hover": {
        color: theme.black,
        backgroundColor: "white",
        boxShadow: "inset 0 0 1px 0 rgba(0,0,0,0.3)",
        [`& .${icon}`]: {
          color: "black",
        },
      },
    },
  };
});
