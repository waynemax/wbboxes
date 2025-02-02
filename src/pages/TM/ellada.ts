import { createStyles } from "@mantine/core";

export const elladaStyles = createStyles(() => ({
  body: {
    backgroundColor: "#291e1e",
    backgroundSize: "cover",
    backgroundImage: "url(/images/x1.png)",
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
    paddingBottom: "50px",
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
    width: "100%",
    marginBottom: "20px",
    display: "none",
  },
  footerLogo: {
    margin: "15px auto",
    maxWidth: "85%",
    display: "none",
  },
}));
