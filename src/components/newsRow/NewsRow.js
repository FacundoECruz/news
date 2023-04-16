import "./NewsRow.css";

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
    <div className="news-row-container">
      <div className="news-header">
        <h3 className="news-title">{title}</h3>
        {author 
        ? <p className="news-author">{author}</p>
        : null}
        <p>{source.name}</p>
      </div>
      <img src={urlToImage} alt="news-img" className="news-img" />
    </div>
  );
}

export default NewsRow;
