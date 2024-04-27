const MainList = ({items, ItemComponent, sourceName}) => {
    return (
        <>
        {
            items.map((item, i) => <ItemComponent key={i} {...{[sourceName]:item}} />)
        }
        </>
    )
}

export default MainList;