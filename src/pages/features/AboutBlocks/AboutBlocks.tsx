import { Grid, Skeleton, Container } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={false} />;

export function AboutBlocks() {
  return (
    <Container my="lg">
      <Grid>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}
