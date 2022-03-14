import "./styles.css";
import { Book } from "./Book";

const App = () => {
  return (
    <div>
      <Book name="The first element" create="11/03/22 17:43" price="1500 $" />
      <Book name="The second element" create="14/02/21 13:43" price="1230 $" />
      Some text here
      <Book name="The therd element" create="15/03/22 12:43" price="1705 $" />
    </div>
  );
};

export default App;
