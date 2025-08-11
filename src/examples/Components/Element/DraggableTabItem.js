import { useDrag, useDrop } from 'react-dnd';

export default function DraggableTabItem ({
  tabItem,
  index,
  currentIndex,
  moveTab,
  onClick,
}) {
  const [, drag, preview] = useDrag({
    type: 'row',
    item: { ...tabItem, index },
    canDrag: true,
  });

  const [, drop] = useDrop({
    accept: 'row',
    hover (item, monitor) {
      if (item.index === tabItem.index) return;
      moveTab(item.index, index);
      item.index = index;
    },
    drop (item, monitor) {
      if (item.sort === tabItem.sort) return;
    },
  });

  return (
    <>
      <li
        ref={(node) => drag(drop(node))}
        className={`${currentIndex == tabItem.index ? 'active' : ''}`}
        onClick={() => {
          onClick?.(tabItem.index);
        }}
      >
        <a href='javascript:void(0)'>{tabItem.title}</a>
      </li>
    </>
  );
}
