import { createStyles, Image, Container, Title, Button, Group, List, ThemeIcon, rem, Space } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import image from "./image.png";
import { AboutBlocks, FaqWithHeader, InvestmentPreview, LastNews, LinksBlocks } from "../features";
import { FaqSimple } from "../features/Faq/FaqSimple";

const useStyles = createStyles((theme) => ({
  wrapper: {
    boxShadow: "0 0 30px 1px rgba(0,0,0,0.1)",
    minHeight: "calc(100vh - 60px)",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "50px",
  },

  content: {
    maxWidth: rem(400),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(30),
    lineHeight: 1.35,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    marginBottom: 0,
    marginTop: "auto",

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(2)} ${rem(12)}`,
  },
}));

export const Main = () => {
  const { classes } = useStyles();

  return (
    <div className="w-100">
      <div className={classes.wrapper}>
        <Container size="lg">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Space h={60} />
              <Title className={classes.title}>
                Вы полюбите <span className={classes.highlight}>новое</span>{" "}
                <span className={classes.highlight}>поколение</span> X-PHONE смартфонов!
              </Title>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }>
                <List.Item>
                  <b>Бесплатные интернет и звонки</b> – Создает инфраструктуру с бесплатными звонками и интернетом!
                </List.Item>
                <List.Item>
                  <b>Приносят доход владельцу</b> – первый на рынке мощный блокчейн смартфон! Дает возможность получать
                  доход, используя телефон!
                </List.Item>
                <List.Item>
                  <b>Новая операционная система</b> – на базе новой операционной системы X-OS!
                </List.Item>
              </List>
              <Group mt={30}>
                <Button radius="md" size="md" className={classes.control}>
                  Инвестировать
                </Button>
                <Button variant="default" radius="md" size="md" className={classes.control}>
                  Получить
                </Button>
              </Group>
              <Space h={60} />
            </div>
            <Image src={image} className={classes.image} />
          </div>
        </Container>
      </div>
      <LinksBlocks />
      <AboutBlocks />
      <InvestmentPreview />
      <LastNews />
      <FaqWithHeader
        categories={[
          { image: "", label: "dfsdf" },
          { image: "", label: "dfsdf" },
          { image: "", label: "dfsdf" },
        ]}
      />
      <FaqSimple />
    </div>
  );
};
