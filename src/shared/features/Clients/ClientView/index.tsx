import { TClientDetails, TClientViewProps } from "shared/types/clients";
import { Grid, LoadingOverlay, TextInput, Input } from "@mantine/core";
import { useEffect } from "react";
import { useAppSelector } from "store/store";
import { FieldTreatment } from "../../../../components/common/FieldTreatment";

export const ClientViewCommon = ({ cid }: TClientViewProps) => {
  const clientDetails = useAppSelector((state) => state.clients.clientDetails as TClientDetails);

  useEffect(() => {
    // load client data by cid
    window?.console.log(cid);
  }, []);

  if (!Object.keys(clientDetails).length) return <LoadingOverlay visible />;

  console.log(11, clientDetails);

  return (
    <div>
      <Grid columns={12}>
        <Grid.Col span={12}>
          <Input.Label>Статус</Input.Label>
          <div className="margin_auto" style={{ marginLeft: 0 }}>
            <FieldTreatment name="status">{clientDetails.status}</FieldTreatment>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <Input.Label>ID Клиента</Input.Label>
          <div className="fakeInputWrapper">
            <div className="margin_auto" style={{ marginLeft: 0 }}>
              <FieldTreatment name="clientId">{clientDetails.clientId}</FieldTreatment>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <Input.Label>Email/логин</Input.Label>
          <div className="fakeInputWrapper">
            <div className="margin_auto" style={{ marginLeft: 0 }}>
              <FieldTreatment name="email">{clientDetails.email}</FieldTreatment>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Имя" disabled value={clientDetails.firstName} />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            size="md"
            radius={12}
            label="Email для связи"
            disabled
            value={clientDetails.emailContact || "---"}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Фамилия" disabled value={clientDetails.lastName || "---"} />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Телефон" disabled value={clientDetails.phone || "---"} />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Отчество" disabled value={clientDetails.patronymic || "---"} />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput
            size="md"
            radius={12}
            label="Дата регистрации"
            disabled
            value={clientDetails.registrationDate || "---"}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Input.Label>Адрес (прописка)</Input.Label>
          <div className="fakeInputWrapper">
            <div className="margin_auto" style={{ marginLeft: 0 }}>
              <FieldTreatment name="registrationAddress">{clientDetails.registrationAddress}</FieldTreatment>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={6}>
          <Input.Label>Адрес (фактический)</Input.Label>
          <div className="fakeInputWrapper">
            <div className="margin_auto" style={{ marginLeft: 0 }}>
              <FieldTreatment name="actualAddress">{clientDetails.actualAddress}</FieldTreatment>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Дата рождения" disabled value={clientDetails.bDay || "---"} />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Гражданство" disabled value={clientDetails.citizenship || "---"} />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="IP адрес" disabled value={clientDetails.ip || "---"} />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput size="md" radius={12} label="Последний вход" disabled value={clientDetails.lastVisit || "---"} />
        </Grid.Col>
      </Grid>
    </div>
  );
};
