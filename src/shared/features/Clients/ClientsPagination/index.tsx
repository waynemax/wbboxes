import { Pagination } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "store/store";
import { setPage } from "store/slices";
import { useMemo } from "react";

export const ClientsPagination = () => {
  const dispatch = useAppDispatch();
  const { countAll, page, pageSize } = useAppSelector(({ clients }) => clients);

  return useMemo(
    () => (
      <Pagination
        page={page}
        total={Math.ceil(countAll / pageSize)}
        onChange={(pageNumber) => dispatch(setPage(pageNumber))}
        radius={8}
        size="md"
      />
    ),
    [page, countAll, pageSize],
  );
};
