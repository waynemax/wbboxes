export type TClient = {
  status: string;
  clientId: string;
  lastName: string;
  firstName: string;
  bDay: string | null;
  email: string | null;
  phone: string | null;
  identityDocumentNumber: string | null;
};

export type TClientDetails = TClient & {
  ip: string;
  emailContact: string;
  patronymic: string;
  registrationAddress: string;
  actualAddress: string;
  citizenship: string;
  registrationDate: string;
  lastVisit: string;
};

export type TClientViewProps = {
  cid: string;
};
