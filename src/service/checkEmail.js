export const checkEmailExists = async (email) => {
  try {
    //const res = await fetch(`http://localhost:5432/accounts?email=${email}`);  --> cambiar por la ruta de la api
    const data = await res.json();
    return data.length > 0;
  } catch (error) {
    return false;
  }
};