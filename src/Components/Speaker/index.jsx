const Speaker = (data) => {
  return (
    <article className="flex flex-row my-2 py-2 items-center border-b border-gray-300">
      <div className="w-1/5"><img src={`https://ada.bunam.unam.mx/iagen-api/static/speakers/${data.data.photo}`} alt={data.data.name} className="rounded shadow" /></div>
      <div className="w-4/5 px-2 pl-8">
        <h3 className="text-xl mb-2 text-orange-600">{data.data.name}</h3>
        <p>{data.data.bio}</p>
      </div>
    </article>
  );
}

export default Speaker;