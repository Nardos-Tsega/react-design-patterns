const HiddenAuthor = ({author}) => {
    const {name, dateOfBirth} = author
    return (
        <>
        <p>
            name : {name}
        </p>
        <p>
            DOB : {dateOfBirth}
        </p>
        </>
    )
}

export default HiddenAuthor;