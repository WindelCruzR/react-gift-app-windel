

export const GifItem = ({id, title, url}) => {
  return (

    // A manera de card, se imprimirá cada gif.
    <div className="card" key={id}>
             {/* La imagen, junto al título. */}
            <img src={url} alt={title} />
            <p> {title} </p>
    </div>
  )
}
