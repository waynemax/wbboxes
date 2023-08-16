import { createStyles, Title, Text, Button, Container, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: "24px",
    color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: "24px",
    marginBottom: "24px",
  },
}));

export const NotFound = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have
        mistyped the address, or the page has been moved to another
        URL.
      </Text>
      <Group position="center">
        {!localStorage.getItem("access_token") ? (
          <Button
            variant="subtle"
            size="md"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Sign in
          </Button>
        ) : (
          <Button
            variant="subtle"
            size="md"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go to main page
          </Button>
        )}
      </Group>
    </Container>
  );
};
