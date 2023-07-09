export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "6b2780dde8mshd7b06d95647d609p1ec0d8jsn04c86f5715cb",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
