const HiddenBook = ({book}) => {
    const {author, publicationYear} = book
    return (
        <>
        <p>
            author : {author}
        </p>
        <p>
            year : {publicationYear}
        </p>
        </>
    )
}

export default HiddenBook;