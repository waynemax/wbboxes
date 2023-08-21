import { Container, Grid, Space, Text } from "@mantine/core";
import { NewsCard } from "../../../components/common/NewsCard";

const mocks = {
  news: [
    {
      image:
        "https://images.prismic.io/ztemobile/1eeceeaa-77af-4f3f-bebc-697fa19ca0bd_P13.png?auto=compress,format&rect=0,0,2400,1358&w=2400&h=1358",
      title: "X-axis linear vibration motor\n",
      country: "Russia",
      description: "Text description",
    },
  ],
};

export const LastNews = () => {
  return (
    <div>
      <Container size="lg" mb={60}>
        <div>
          <Text color="black" size="xl" align="left">
            Последние новости
          </Text>
        </div>
        <Space mb={30} />
        <Grid columns={12}>
          <Grid.Col span={4}>
            <NewsCard {...mocks.news[0]} />
          </Grid.Col>
          <Grid.Col span={4}>
            <NewsCard {...mocks.news[0]} />
          </Grid.Col>
          <Grid.Col span={4}>
            <NewsCard {...mocks.news[0]} />
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};
