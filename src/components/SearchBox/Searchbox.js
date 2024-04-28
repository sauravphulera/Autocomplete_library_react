import { useState } from 'react';
import './SearchBox.css';
import useFetchPromise from '../../Hooks/useFetchPromise';




function Searchbox({id, name, label, placeHolder, autoComplete, maxItems, styles,debounceWait, listBox, noItemMessage, errorMessage, transformData}) {

  const [query, setQuery] = useState('');
  const [isAutoComplete, setIsAutoComplete] = useState(autoComplete);
  const [activeIndex, setActiveIndex] = useState(null);


  const handleKeyUp = (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      // user enter
      if (activeIndex === null) return;
      console.log(data[activeIndex].name);
      setQuery(data[activeIndex].name);
      setData(null);
      setActiveIndex(null);
      setIsAutoComplete(false);
      return;
    }
    setIsAutoComplete(true);
    if (!data || data.length === 0) return;
    if (keyCode === 40) {
      // move down
      if (activeIndex === null || activeIndex === data.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    } else if (keyCode === 38) {
      // move up
      if (activeIndex === 0) setActiveIndex(data.length - 1);
      else setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };



  const handleChange = (e) => {
			setQuery(e.target.value);
  }

  const [data, setData, error] = useFetchPromise(query, transformData, debounceWait, autoComplete);
  return (
    <div className="searchboxwrapper">
		<label className={styles.label} htmlFor={name}>{label}</label>
		<br/>
		<input autoComplete='off' name={name} className={styles.input} id={id} placeholder={placeHolder} value={query} onChange={handleChange} onKeyUp={handleKeyUp} />
		
		{data && data.length > 0 && listBox(data, activeIndex)}
    {query && data && data.length === 0 && noItemMessage()}
    {error && errorMessage()}
    </div>
  );
}

export default Searchbox;