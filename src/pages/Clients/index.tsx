import { ClientsFilters, ClientsListView } from "shared/features";
import { ClientsPagination } from "shared/features/Clients/ClientsPagination";
import { useEffect } from "react";
import { Title } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "store/store";
import { resetFilters } from "store/slices";
import { Padding } from "../../components/ui/universal/PaddingWrapper";
import { Spacer } from "../../components/ui/universal/Spacer/Spacer";

export const Clients = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ clients }) => clients.clients);

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);

  return (
    <Padding horizontal={4} vertical={3}>
      <Title order={1}>Клиенты</Title>
      <Spacer size={6} />
      <ClientsFilters />
      <Spacer size={6} />
      <ClientsPagination />
      <Spacer size={6} />
      <ClientsListView data={data} />
      <Spacer size={6} />
      <ClientsPagination />
      <Spacer size={6} />
    </Padding>
  );
};
