import { createStyles } from "@mantine/core";

export const greekdarStyles = createStyles(() => ({
  body: {
    backgroundColor: "rgb(38, 38, 38)",
    height: "100vh",
    width: "100vw",
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
  },
  container: {
    padding: "20px",
    fontFamily: "Montserrat, Arial, sans-serif",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
    maxWidth: "98%",
    margin: "0 auto",
    color: "white",
  },
  logo: {
    width: "100%",
    maxWidth: "600px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 500,
  },
  thanks: {
    fontSize: "14px",
    color: "white",
    textAlign: "center",
    marginBottom: "20px",
  },
  centerText: {
    fontSize: "14px",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  afterText: {
    fontSize: "14px",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
    fontStyle: "italic",
  },
  text: {
    fontSize: "14px",
    color: "white",
    paddingLeft: "40px",
    textAlign: "center",
  },
  section: {
    "backgroundSize": "93%",
    "margin": "10px -20px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "padding": "25px 0",
    "userSelect": "none",
    "cursor": "pointer",
    "width": "calc(100% + 40px)",
    ":hover": {
      opacity: 0.85,
    },
  },
  subHeader: {
    fontSize: "16px",
    color: "#fff",
    paddingLeft: "40px",
    textAlign: "center",
  },
  footer: {
    display: "flex",
    width: "100%",
    marginBottom: "20px",
  },
  footerLogo: {
    margin: "-30px auto 20px",
  },
}));
