export default function Searcher({handlerDisplay}) {
  return (
    <div className=" h-7 mx-2 flex items-center">
      <input
        onChange={handlerDisplay}
        className="h-8 w-[200px] rounded-tl-md rounded-bl-md"
        type="text"
        placeholder="Buscar servicios y productos"
      />
      <span className="h-8 rounded-tr-md rounded-br-md bg-white px-2 gris place-content-center">
        🔍
      </span>
    </div>
  );
}
