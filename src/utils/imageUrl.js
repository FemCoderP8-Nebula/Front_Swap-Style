export const getImageUrl = (imageName) => {
  if (!imageName || imageName === "placeholder") return null;
  return `http://localhost:8080/uploads/${imageName}`;
};