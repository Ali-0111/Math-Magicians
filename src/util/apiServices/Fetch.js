const url = process.env.REACT_APP_url;
const key = process.env.REACT_APP_key;

const apiHeadConfig = {
  method: 'GET',
  headers: { 'X-Api-Key': key },
  contentType: 'application/json',
};

async function fetchData(setFunction) {
  let parameter;
  try {
    const response = await fetch(url, apiHeadConfig);
    const data = await response.json();

    parameter = {
      body: data, isLoading: false,
    };
  } catch (err) {
    parameter = {
      hasError: true, isLoading: false,
    };
  }

  setFunction(parameter);
}

export default fetchData;
