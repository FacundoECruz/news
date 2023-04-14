import "./NewsRow.css"

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
      <h3 className="news-title">{title}</h3>
      <img src={urlToImage} alt="news-img" className="news-img"/>
    </div>
  );
}

export default NewsRow;
