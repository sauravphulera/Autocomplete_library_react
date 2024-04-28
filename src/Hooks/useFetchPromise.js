import { useEffect, useState, useCallback } from "react";

import debounce from 'lodash/debounce';

const useFetchPromise = (query, transformData, debounceWait, autoComplete) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState();


	const fetchData = useCallback( debounce( async (query, transformData, signal) => {
			try {

				const res = await fetch(`https://swapi.py4e.com/api/people?search=${query}`, {signal});
				if(!res.ok) throw new Error(res.statusText);
				const data = await res.json();
				setData(transformData(data));
			} catch(e) {
				console.log(e);
				if(!signal.aborted) {
					setError(e);
				}
			}
		}, debounceWait  // debounce timer
	)  
   ,[]);

	useEffect(() => {
		if(!query || !autoComplete) {
			setData(null);
			setError(null);
			return;
		}

		const controller = new AbortController();
		const signal  = controller.signal;
		fetchData(query, transformData, signal);

		return () => {
			controller.abort();
		}
	}, [query])


	return [data, setData, error];
}

export default useFetchPromise;