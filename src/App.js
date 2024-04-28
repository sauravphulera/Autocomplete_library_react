import './App.css';
import ListBox from './components/Listbox/Listbox';
import Searchbox from './components/SearchBox/Searchbox';

function App() {
  const transformData = (data) => data.results|| [];
  return (
    <div className="wrapper">
          <Searchbox
            id="personName"
            name="personName"
            label="Enter Person Name"
            placeHolder="Enter fav character"
            autoComplete = {true}
            maxItems = {5}
            styles={{
              label: "label",
              input: "input",
            }}
            debounceWait={400}
            listBox={(items, activeIndex) => <ListBox  items={items} activeIndex={activeIndex}/>}
            noItemMessage={() => <>Sorry no data found!</>}
            errorMessage={() => <>Something went wrong!</>}
            transformData={transformData}
          />
    </div>
  );
}

export default App;
