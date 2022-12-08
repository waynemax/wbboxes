import { switchMatch } from "shared/utils";
import { copyText } from "shared/utils/clipboard";
import cogoToast from "cogo-toast";
import { Skeleton, Text, Tooltip, Badge } from "@mantine/core";
import { shortId } from "shared/utils/shortId";
import { Copy } from "tabler-icons-react";
import { Spacer } from "../../ui/universal/Spacer/Spacer";

export type TFieldTreatmentProps = {
  name: string;
  children: string | null;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const NulledField = <Skeleton height={12} animate={false} radius={0} />;

const isEmptyField = (value: string | null) => value === null || value === "";

export const FieldTreatment = ({ name, children: value, onClick }: TFieldTreatmentProps) => {
  return switchMatch(name, {
    status: !isEmptyField(value) ? (
      <Badge
        size="sm"
        className="cursor_default"
        sx={{ fontSize: "11px", textTransform: "none" }}
        variant="gradient"
        gradient={switchMatch(value!.toLowerCase(), {
          success: { from: "lime", to: "green", deg: 150 },
          new: { from: "blue", to: "blue", deg: 90 },
          pending: { from: "yellow", to: "yellow", deg: 105 },
          default: { from: "gray", to: "gray", deg: 0 },
        })}>
        {switchMatch(value!.toLowerCase(), {
          new: "Новый",
          pending: "Ожидание",
          default: value,
        })}
      </Badge>
    ) : (
      NulledField
    ),
    email: isEmptyField(value) ? (
      NulledField
    ) : (
      <Tooltip label="Написать письмо" color="violet" withArrow>
        <a href={`mailto:${value}`}>
          <Text weight={800} color="violet">
            {value}
          </Text>
        </a>
      </Tooltip>
    ),
    clientId: !isEmptyField(value) ? (
      <div className="display_flex cursor_pointer no_select">
        <Text weight={800} color="violet" onClick={onClick}>
          {shortId(value!)}{" "}
        </Text>
        <Spacer size={2} direction="horizontal" />
        <Copy
          size={17}
          color="gray"
          onClick={() => {
            copyText(value!);
            cogoToast.success("Copied!");
          }}
        />
      </div>
    ) : (
      NulledField
    ),
    default: isEmptyField(value) ? NulledField : value,
  });
};
