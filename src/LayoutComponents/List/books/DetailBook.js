const DetailBook = ({book}) => {
    const {title, publicationYear,description} = book;
    return (
        <>
        <h4>{title}</h4>
        <h6>{publicationYear}</h6>
        <p>{description}</p>
        </>
    )
}

export default DetailBook;