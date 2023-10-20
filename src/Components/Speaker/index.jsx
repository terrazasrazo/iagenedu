const Speaker = (data) => {
  return (
    <article className="flex flex-row my-2 py-2 xl:w-2/3 border-b border-gray-300">
      <div className="w-1/3 lg:w-1/6">
        <img
          src={`https://ada.bunam.unam.mx/iagen-api/static/speakers/${data.data.photo}`}
          alt={data.data.name}
          className="rounded shadow"
        />
      </div>
      <div className="w-2/3 lg:w-5/6 pl-4">
        <div>
          <h3 className="text-xl mb-2 text-orange-600">{data.data.name}</h3>
          <p>{data.data.bio}</p>
        </div>
      </div>
    </article>
  );
};

export default Speaker;
