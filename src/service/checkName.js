export const checkNameExists = async (name) => {
  try {
    //const res = await fetch(`http://localhost:3000/accounts?name=${name}`); --> poner la api nuestra
    const data = await res.json();
    return data.length > 0;
  } catch (error) {
    return false;
  }
};