export default function ListItem({item, handleCheckboxChange}) {
  return (
    <div className="flex border-b-2 justify-between">
      <div>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(item.id)}
          id={item.id}
          value={item.price}
        />
        <label htmlFor={item.id}>{item.name}</label>
      </div>
      <span>Q.{item.price}</span>
    </div>
  );
}
