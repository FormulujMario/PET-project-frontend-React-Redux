const rewrite = (item) => {
  return item
    .toLowerCase()
    .replace(/[^\w ]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s/g, "-");
};

export default rewrite;
