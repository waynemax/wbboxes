import { useCallback, useState } from "react";
import { Button, Modal, Title } from "@mantine/core";
import { TClient } from "shared/types/clients";
import { ClientViewCommon } from "shared/features";
import { Route } from "shared/definitions";
import { FieldTreatment } from "../../../../../../components/common/FieldTreatment";
import router from "../../../../../../router";
import { Spacer } from "../../../../../../components/ui/universal/Spacer/Spacer";

export const ClientRow = ({ el }: { el: TClient }) => {
  const [isOpenedPreview, setIsOpenedPreview] = useState(false);

  const openClientPageHandler = useCallback(() => {
    router.navigate(Route.CLIENT_SCREEN, {
      cid: el.clientId,
    });
  }, []);

  return (
    <tr>
      <Modal
        size="lg"
        title={<Title order={3}>Информация о клиенте</Title>}
        overlayOpacity={0.55}
        radius={16}
        opened={isOpenedPreview}
        onClose={() => setIsOpenedPreview(false)}>
        <Button size="lg" radius={12} fullWidth variant="default" onClick={openClientPageHandler}>
          Открыть подробнее
        </Button>
        <Spacer size={6} />
        <ClientViewCommon cid={el.clientId} />
      </Modal>
      <td>
        <FieldTreatment name="clientId" onClick={() => setIsOpenedPreview(true)}>
          {el.clientId}
        </FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="firstName">{el.firstName}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="lastName">{el.lastName}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="status">{el.status}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="identityDocumentNumber">{el.identityDocumentNumber}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="bDay">{el.bDay}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="email">{el.email}</FieldTreatment>
      </td>
      <td>
        <FieldTreatment name="phone">{el.phone}</FieldTreatment>
      </td>
    </tr>
  );
};
