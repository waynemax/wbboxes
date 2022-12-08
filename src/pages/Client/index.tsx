import { useRef } from "react";
import { ClientViewCommon } from "shared/features";
import { useRoute } from "react-router5";
import { Text, Button, Group, Center, Paper, Title } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { Spacer } from "../../components/ui/universal/Spacer/Spacer";
import { Padding } from "../../components/ui/universal/PaddingWrapper";

export const Client = () => {
  const openRef = useRef<any>(null);
  const {
    route: {
      params: { cid },
    },
  } = useRoute();

  return (
    <Padding horizontal={4} vertical={3}>
      <Title order={1}>Анкета клиента</Title>
      <Spacer size={6} />
      <Center maw={800} display="block">
        <div>
          <Paper shadow="xs" radius={16} p="md">
            <ClientViewCommon cid={cid} />
          </Paper>
          <Spacer size={6} />
          <Paper shadow="xs" radius={16} p="md">
            <Dropzone
              accept={["image/png", "image/jpeg", "image/sgv+xml", "image/gif"]}
              onDrop={() => {}}
              activateOnClick
              openRef={openRef}
              sx={(theme) => ({
                "minHeight": 120,
                "display": "flex",
                "justifyContent": "center",
                "alignItems": "center",
                "border": 0,
                "borderRadius": "16px",
                "backgroundColor": theme.colors.gray[2],
                "&[data-accept]": {
                  color: theme.white,
                  backgroundColor: theme.colors.blue[6],
                },
                "&[data-reject]": {
                  color: theme.white,
                  backgroundColor: theme.colors.red[6],
                },
              })}>
              <Text align="center">Перетащите сюда документы</Text>
            </Dropzone>

            <Group position="center" mt="md">
              <Button radius={16} fullWidth size="lg" onClick={() => openRef.current()}>
                Выбрать файлы
              </Button>
            </Group>
          </Paper>
        </div>
      </Center>
    </Padding>
  );
};
