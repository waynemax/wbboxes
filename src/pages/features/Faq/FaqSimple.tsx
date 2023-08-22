import { Container, Accordion, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl})`,
    paddingBottom: `calc(${theme.spacing.xl})`,
    minHeight: 650,
  },

  item: {
    "padding": "12px 8px",
    "borderRadius": theme.radius.lg,
    "marginBottom": theme.spacing.lg,
    "backgroundColor": theme.colors.grape[0],
    ".mantine-Accordion-label": {
      fontWeight: 800,
      color: theme.colors.grape[9],
    },
  },
}));

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="lg" className={classes.wrapper}>
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>Что такое графеновый аккумулятор?</Accordion.Control>
          <Accordion.Panel>
            Графен — это слой атомов углерода толщиной в один атом, расположенный в гексагональной решетке. Как с
            помощью графена мы улучшили характеристики существующих аккумуляторов. В области аккумуляторов обычные
            материалы для аккумуляторных электродов (и перспективные) значительно улучшаются при добавлении графена.
            Графеновая батарея более легкая, более долговечная и накапливает энергию значительно большей емкости, а так
            же сокращается время полного заряда аккумулятора.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Что за операционная система X-OS и кто ее разработал?</Accordion.Control>
          <Accordion.Panel>
            Операционная система — X, сокр. X-ОС (англ. operating system, X-OS) — комплекс взаимосвязанных программ,
            предназначенных для управления ресурсами смартфона и организации взаимодействия с пользователем.
            Особенностью X-OS является поддержка Android-приложений, а также то, что она многоядерная. X-OS основанная
            на проектах с открытым исходным кодом (Linux) и включает компоненты с закрытым исходным кодом. Полное
            описание возможностей выйдет в анонсах к смартфону X-Phone. X-OS разработана компанией SBA+.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Когда выйдет в продажу смартфон X-PHONE и сим-карта X-Mobile?</Accordion.Control>
          <Accordion.Panel>
            Точная дата выхода смартфона X-Phone пока не определена, но с уверенностью можем сказать, что это будет во
            второй половине 2022 года и будет доступна по предварительному бронированию. Соответственно сим-карта
            X-Mobile так же будет доступна во второй половине 2022 года.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Что такое X-связь и что она даст пользователю смартфона?</Accordion.Control>
          <Accordion.Panel>
            X-связь — возможна только между смартфонами X-Phone и в случаи использования в нем сим карты от оператора
            сотовой связи X-Mobile. X–связь дает возможность пользователю не платить за сотовую связь и интернет на весь
            период использования смартфона с сим-картой от X-Mobile, то есть бесконечно. За счет чего мы достигаем
            такого уникального опыта использования смартфона пока является коммерческой тайной.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Какие еще особенности вы бы подчеркнули в смартфоне X-PHONE?</Accordion.Control>
          <Accordion.Panel>
            Титановый корпус с керамическим покрытием, спутниковая связь, 20 минут до полного заряда и 15000 мАч
            аккумулятор, камера 108Мп с 10x оптическим ZOOM-ом, лазерная клавиатура, проекционный экран, не бьющееся
            экран и много того, о чем мы пока умолчим.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
