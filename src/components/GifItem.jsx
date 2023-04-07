

export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <li><img src={url} alt={title} /></li>
        <p>{title}</p>
    </div>
  )
}

export default GifItem
