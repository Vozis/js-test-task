import { FC } from 'react';
import { IListItem } from '../types/types';
import Item from './Item';

interface IListProps {
  items: IListItem[];
}

const List: FC<IListProps> = ({ items }) => {
  return Array.isArray(items) && items.length ? (
    <>
      {items.map(item => (
        <ul
          key={item.id}
          style={{
            listStyleType: 'none',
          }}
        >
          <Item item={item} hasChildren={!!item.children.length} />
        </ul>
      ))}
    </>
  ) : null;
};

export default List;
