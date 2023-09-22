const Speaker = (data) => {
  return (
    <article className="flex flex-row my-2">
      <div className="w-1/5"><img src="" alt="" /></div>
      <div className="w-4/5">
        <h3 className="text-xl mb-2">{data.data.name}</h3>
        <p>{data.data.bio}</p>
      </div>
    </article>
  );
}

export default Speaker;