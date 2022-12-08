import { Select } from "@mantine/core";
import { useState } from "react";

export const SelectRole = () => {
  const roles = [
    {
      label: "Поддержка",
      value: "support",
    },
    {
      label: "Казначей",
      value: "treasurer",
    },
    {
      label: "Главный казначей",
      value: "main_treasurer",
    },
    {
      label: "Админ",
      value: "admin",
    },
    {
      label: "Операционист",
      value: "operator",
    },
    {
      label: "Комплаенс менеджер",
      value: "compliance",
    },
  ];

  const [currentRole, setCurrentRole] = useState(roles[0].value);

  return (
    <div style={{ display: "inline-block" }}>
      <Select
        size="md"
        radius={12}
        value={currentRole}
        onChange={(d: string) => setCurrentRole(d)}
        placeholder="Выберите роль"
        data={roles}
        width={100}
      />
    </div>
  );
};
