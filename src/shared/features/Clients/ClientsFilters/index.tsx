import { Button, Grid, Input } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDispatch } from "react-redux";
import {
  setBDayFilter,
  setFirstNameFilter,
  setLastNameFilter,
  setClientIdFilter,
  setIdentityDocumentNumberFilter,
  resetFilters,
} from "store/slices";
import { useAppSelector } from "store/store";
import { X } from "tabler-icons-react";
import { useEffect } from "react";
import { encodeFilters } from "shared/utils/encodeFilters";

export const ClientsFilters = () => {
  const dispatch = useDispatch();
  const { bDayFilter, firstNameFilter, lastNameFilter, clientIdFilter, identityDocumentNumberFilter, page } =
    useAppSelector(({ clients }) => clients);

  useEffect(() => {
    const filters = encodeFilters({
      bDayFilter,
      firstNameFilter,
      lastNameFilter,
      clientIdFilter,
      identityDocumentNumberFilter,
      page,
    });
    console.log(33, filters);
  }, [bDayFilter, firstNameFilter, lastNameFilter, clientIdFilter, identityDocumentNumberFilter, page]);

  return (
    <div>
      <Grid columns={12}>
        <Grid.Col span={4}>
          <Input
            placeholder="Имя"
            radius={8}
            size="sm"
            value={firstNameFilter}
            onChange={(event: { target: { value: string } }) => dispatch(setFirstNameFilter(event.target.value))}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Input
            placeholder="Фамилия"
            radius={8}
            size="sm"
            value={lastNameFilter}
            onChange={(event: { target: { value: string } }) => dispatch(setLastNameFilter(event.target.value))}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <DatePicker
            radius={8}
            size="sm"
            placeholder="День рождения"
            value={bDayFilter}
            onChange={(d) => {
              dispatch(setBDayFilter(d ? new Date(d) : null));
            }}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <Input
            placeholder="ID Клиента"
            radius={8}
            size="sm"
            value={clientIdFilter}
            onChange={(event: { target: { value: string } }) => dispatch(setClientIdFilter(event.target.value))}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <Input
            placeholder="Номер Дул"
            radius={8}
            size="sm"
            value={identityDocumentNumberFilter}
            onChange={(event: { target: { value: string } }) =>
              dispatch(setIdentityDocumentNumberFilter(event.target.value))
            }
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Button fullWidth variant="default" size="md" radius={8} onClick={() => dispatch(resetFilters())}>
            <X />
          </Button>
        </Grid.Col>
      </Grid>
    </div>
  );
};
