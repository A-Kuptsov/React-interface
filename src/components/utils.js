export const sortedData = (data, order, orderBy, query) => {
  return data
    .sort((a, b) =>
      a[orderBy].toLowerCase() < b[orderBy].toLowerCase()
        ? -1 * order
        : 1 * order
    )
    .filter(item => {
      return (
        item["petName"].toLowerCase().includes(query.toLowerCase()) ||
        item["ownerName"].toLowerCase().includes(query.toLowerCase()) ||
        item["aptNotes"].toLowerCase().includes(query.toLowerCase())
      );
    });
};

export const today = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  return `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
    day < 10 ? `0${day}` : day
  }`;
};

export const currentTime = () => {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};
