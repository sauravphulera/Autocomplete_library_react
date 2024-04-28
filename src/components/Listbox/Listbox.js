import './ListBox.css';

function ListBox({items, activeIndex}) {

  return (
    <ul className='listBoxContainer'>
      {items.map((item, index) => 
      <li key={index} className={`listBoxItem ${index === activeIndex ? "activeItem" : ""}`}>
        {item.name}
      </li>)}
    </ul>
  );
}

export default ListBox;