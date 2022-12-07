const fetchedData = () => fetch('https://northwind.vercel.app/api/product');



async function add(data, num) {
	try {
		return await axios.get(data);
	} catch (err) {
		if (num === 1) {
			throw err;
		}
		return await add(data, num - 1);
	}
}

const fetchWithRetries = add(fetchData, 4);

fetchWithRetries();
