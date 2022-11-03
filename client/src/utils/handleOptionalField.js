export const handleOptionalField = (data) => {
  if (typeof data !== "object") return data;

  for (let key in data) {
    data = {
      ...data,
      [key]: data[key] || null,
    };
  }

  return data;
};
