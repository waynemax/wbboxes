import { Button, Container, createStyles, rem, Space, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
  },
}));

export const InvestmentPreview = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg" my={80}>
        <Text
          variant="gradient"
          gradient={{ from: "grape", to: "orange", deg: 45 }}
          sx={{ fontFamily: "Greycliff CF, sans-serif" }}
          ta="left"
          fz={50}
          fw={700}>
          Зарабатывайте вместе с нами
        </Text>
        <Space h={20} />
        <div>
          <Text lh={rem(40)} sx={{ fontFamily: "Greycliff CF, sans-serif" }} ta="left" fz={18} fw={400}>
            Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
            успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в
            новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
            время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
          </Text>
          <Button radius="lg" size="lg" mt={40}>
            Узнать больше
          </Button>
        </div>
      </Container>
    </div>
  );
};
