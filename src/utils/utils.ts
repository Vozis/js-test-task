import {IDataItem, IListItem} from '../types/types';

export const arrayToTree = (array: IDataItem[]) => {
  const map: Record<number, number> = {};
  const root: IListItem[] = [];
  let item: IListItem | null = null;
  const newArr: IListItem[] = [];

  for (let i = 0; i < array.length; i++) {
    newArr[i] = {
      ...array[i],
      children:[],
    }
    map[array[i].id] = i;
    item = newArr[i]
    if (item.head !== null) {
      const index = map[item.head]
      newArr[index].children.push(item)
    } else {
      root.push(item)
    }
  }

  const sortArray = sort(root);
  return sortArray;
}

export const sort = (array: IListItem[]): IListItem[] => {
  return array.reduce<IListItem[]>((acc,item) => {
    if (item.children.length > 0) {
      item.children = sort(item.children)
    }
    acc.push(item)
    return acc.sort((a, b) => a.sorthead - b.sorthead)
  }, [])
}

