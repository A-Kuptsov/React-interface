import React from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";
import { sortedData } from "./utils";

function App() {
  const [data, setData] = React.useState([]);
  const [isShowAddItemForm, setShowAddItemForm] = React.useState(false);
  const [lastIndex, setLastIndex] = React.useState(0);
  const [orderBy, setOrderBy] = React.useState("petName");
  const [orderDirection, setOrderDirection] = React.useState("asc");
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const res = result.map((item, i) => {
          item.aptId = i++;
          return item;
        });
        setData(res);
        setLastIndex(res.length);
      });
  }, []);

  const addItem = item => {
    item.aptId = lastIndex;
    setLastIndex(lastIndex + 1);
    setData([...data, item]);
  };

  const deleteItem = item => {
    setData(prevData => prevData.filter(i => i !== item));
  };

  const order = orderDirection === "asc" ? 1 : -1;

  let filteredApts = sortedData(data, order, orderBy, query);

  const updateItem = (name, value, id) => {
    setData(
      data.map(item =>
        item.aptId === id ? { ...item, [name]: value } : { ...item }
      )
    );
  };

  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments
                isShowAddItemForm={isShowAddItemForm}
                setShowAddItemForm={setShowAddItemForm}
                addItem={addItem}
              />
              <SearchAppointments
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                orderDirection={orderDirection}
                setOrderDirection={setOrderDirection}
                query={query}
                setQuery={setQuery}
              />
              <ListAppointments
                items={filteredApts}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
