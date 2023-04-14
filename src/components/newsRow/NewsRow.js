function NewsRow({ data }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = data;

  return (
    <>
      <h3>{title}</h3>
      <img src={urlToImage} alt="news-img" />
    </>
  );
}

export default NewsRow;
