export interface IUserData {
  img: string;
  name: string;
  mail: string;
}

export interface IDropDown {
  onClickChip: (user: any) => void;
  userData: IUserData[];
}
