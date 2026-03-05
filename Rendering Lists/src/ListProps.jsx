function ListProps(props) {
  const list = props.list;
  const liElement = list.map((element) => {
    return (
      <li key={element?.id}>
        <b>Name:</b> {element?.name}, <b>Calorie:</b> {element?.calorie}
      </li>
    );
  });

  if (list.length === 0) {
    return null;
  }
  return (
    <>
      <h2 className="list-category">{props.category}</h2>
      <ol className="list-items">{liElement}</ol>
    </>
  );
}

export default ListProps;
