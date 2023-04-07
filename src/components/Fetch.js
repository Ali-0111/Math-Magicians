const category = 'computers';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const key = '5mroOYTtdSrGNo7sB2jelA==SfwZctlRXYVoqTQr';

async function Fetch(setData, setIsLoading, setHasError) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'X-Api-Key': key },
      contentType: 'application/json',
    });
    setIsLoading(false);
    const data = await response.json();
    setData(data);
    return data;
  } catch (err) {
    setIsLoading(false);
    setHasError(true);
  }
}

export default Fetch;
