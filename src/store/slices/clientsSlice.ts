import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TClient, TClientDetails } from "shared/types/clients";
import { uuidv4 } from "shared/utils/uuidv4";

const mocks = {
  clientDetails: {
    clientId: uuidv4(),
    firstName: "Джон",
    lastName: "Доешников",
    status: "new",
    identityDocumentNumber: "1233112223",
    bDay: "12.12.1999",
    email: "johndoe@by.by",
    phone: "+79199190011",
    registrationDate: "12.12.2022",
    registrationAddress: "г. Минск, ул. Маршалла Ушакова",
    actualAddress: "г. Минск, ул. Пролетарская",
    emailContact: "John@by.by",
    citizenship: "РБ",
    lastVisit: "12.12.2022",
    patronymic: "Джонович",
  } as TClientDetails,
  clients: [
    {
      clientId: uuidv4(),
      firstName: "Джон",
      lastName: "Доешников",
      status: "new",
      identityDocumentNumber: "1233112223",
      bDay: "12.12.1999",
      email: "johndoe@by.by",
      phone: "+79199190011",
    },
    {
      clientId: uuidv4(),
      firstName: "Джейн",
      lastName: "Доешникова",
      status: "success",
      identityDocumentNumber: "2333112223",
      bDay: "12.12.1998",
      email: "janedoe@by.by",
      phone: "+79189190011",
    },
    {
      clientId: uuidv4(),
      firstName: "Иван",
      lastName: "Белов",
      status: "pending",
      identityDocumentNumber: "8333112223",
      bDay: "12.12.1995",
      email: "ivan@by.by",
      phone: "+78189130011",
    },
    {
      clientId: uuidv4(),
      firstName: "Мария",
      lastName: "Козлова",
      status: "pending",
      identityDocumentNumber: "6333112223",
      bDay: "12.12.1993",
      email: "maria@by.by",
      phone: "+77389130011",
    },
    {
      clientId: uuidv4(),
      firstName: "Андрей",
      lastName: "Иванов",
      status: "new",
      identityDocumentNumber: "5333112223",
      bDay: "12.12.1993",
      email: "",
      phone: "",
    },
    {
      clientId: uuidv4(),
      firstName: "Анастаия",
      lastName: "Моковская",
      status: "new",
      identityDocumentNumber: "5333112223",
      bDay: "12.12.1943",
      email: "anas@by.by",
      phone: "+79389130022",
    },
  ] as [] | TClient[],
};

const initialState: {
  page: number;
  countAll: number;
  pageSize: number;
  clients: [] | TClient[];
  clientDetails: TClientDetails | {};
  firstNameFilter: string;
  lastNameFilter: string;
  bDayFilter: Date | null;
  identityDocumentNumberFilter: string;
  clientIdFilter: string;
} = {
  page: 1 as number,
  countAll: 100 as number,
  pageSize: 20 as number,
  clients: [...mocks.clients] as [] | TClient[],
  clientDetails: mocks.clientDetails as TClientDetails | {},
  firstNameFilter: "" as string,
  lastNameFilter: "" as string,
  bDayFilter: null as Date | null,
  identityDocumentNumberFilter: "" as string,
  clientIdFilter: "" as string,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setCountAll(state, action: PayloadAction<number>) {
      state.countAll = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    setClients(state, action: PayloadAction<[] | TClient[]>) {
      state.clients = action.payload;
    },
    setClientDetail(state, action: PayloadAction<{} | TClientDetails>) {
      state.clientDetails = action.payload;
    },
    setFirstNameFilter(state, action: PayloadAction<string>) {
      state.firstNameFilter = action.payload;
    },
    setLastNameFilter(state, action: PayloadAction<string>) {
      state.lastNameFilter = action.payload;
    },
    setIdentityDocumentNumberFilter(state, action: PayloadAction<string>) {
      state.identityDocumentNumberFilter = action.payload;
    },
    setClientIdFilter(state, action: PayloadAction<string>) {
      state.clientIdFilter = action.payload;
    },
    setBDayFilter(state, action: PayloadAction<Date | null>) {
      state.bDayFilter = action.payload;
    },
    resetFilters(state) {
      state.bDayFilter = null;
      state.clientIdFilter = "";
      state.identityDocumentNumberFilter = "";
      state.lastNameFilter = "";
      state.firstNameFilter = "";
      state.page = 1;
    },
  },
});

export const {
  setPage,
  setClients,
  setCountAll,
  setPageSize,
  resetFilters,
  setBDayFilter,
  setClientDetail,
  setLastNameFilter,
  setClientIdFilter,
  setFirstNameFilter,
  setIdentityDocumentNumberFilter,
} = clientsSlice.actions;
export const clientsReducer = clientsSlice.reducer;
