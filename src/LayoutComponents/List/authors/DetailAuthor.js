const DetailAuthor = ({author}) => {
    const {name, dateOfBirth,genres} = author;
    return (
        <>
        <h4>{name}</h4>
        <h6>{dateOfBirth}</h6>
        <ul>
            {genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
        </>
    )
}

export default DetailAuthor;