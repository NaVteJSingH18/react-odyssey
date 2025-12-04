function ListGroup(){
    const items=["newyork","bakersfield","columbia"]
    return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>)
}
export default ListGroup;