import { Table } from "@mantine/core";
import { switchMatch } from "shared/utils";
import { TClient } from "shared/types/clients";
import { useMemo } from "react";
import { EmptyBlock } from "shared/features";
import { ClientRow } from "shared/features/Clients/ClientsListView/components/ClientRow";

const ClientsListViewTableTitles = ["ID", "Имя", "Фамилия", "Статус", "Номер ДУЛ", "Дата Рождения", "Почта", "Телефон"];

export const ClientsListView = ({ data }: { data: TClient[] }) => {
  const rows = useMemo(
    () => data.map((element) => <ClientRow key={`ClientListView${element.clientId}`} el={element} />),
    [data],
  );

  if (!data.length) return EmptyBlock;

  return (
    <div>
      <Table
        sx={{ borderRadius: "16px" }}
        horizontalSpacing="md"
        verticalSpacing="sm"
        fontSize="xs"
        highlightOnHover
        striped
        withBorder
        withColumnBorders>
        <thead>
          <tr>
            {ClientsListViewTableTitles.map((title) => {
              return switchMatch(title, {
                default: <th key={`CLVTT${title}`}>{title}</th>,
              });
            })}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};
