export default function ListItem({item, handleCheckboxChange,check}) {
  return (
    <div className="flex border-b-2 justify-between">
      <div>
        <input
          type="checkbox"
          checked={check}
          onChange={() => handleCheckboxChange(item._id)}
          id={item._id}
          value={item.price}
        />
        <label htmlFor={item._id}>{item.name}</label>
      </div>
      <span>Q.{item.price}</span>
    </div>
  );
}
