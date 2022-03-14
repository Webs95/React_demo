const Book = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.create}</p>
      <p>{props.price}</p>
      <p>{props.children}</p>
    </div>
  );
};

export { Book };
