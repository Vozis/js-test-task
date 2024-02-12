import { FC, useState } from 'react';
import { IListItem } from '../types/types';
import List from './List';

interface IItemProps {
  item: IListItem;
  hasChildren: boolean;
}

const Item: FC<IItemProps> = ({ item, hasChildren }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        style={{
          position: 'relative',
        }}
      >
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              border: 'none',
              background: 'none',
              position: 'absolute',
              top: '-3px',
              left: '-40px',
              bottom: 0,
            }}
          >
            <img
              style={
                isOpen
                  ? {
                      transform: 'rotate(-90deg)',
                    }
                  : {}
              }
              src={'arrow.svg'}
            />
          </button>
        )}
        <p>
          {item.name}
          {item.node === 0 && `(${item.price})`} - {item.sorthead}
        </p>
      </div>
      {isOpen && <List items={item.children} />}
    </li>
  );
};

export default Item;
