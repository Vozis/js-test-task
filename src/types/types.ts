export interface IDataItem {
  id: number;
  head: number | null;
  name: string;
  node: number;
  price: number;
  sorthead: number;
}

export interface IData {
  services: IDataItem[]
}

export interface IListItem extends IDataItem {
  children: IListItem[]
}