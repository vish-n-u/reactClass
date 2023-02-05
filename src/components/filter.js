function filters(keyword, data) {
  keyword = keyword.toLowerCase();
  let filteredData = data.filter((restauran) => {
    if (restauran?.data?.name.toLowerCase().includes(keyword)) return restauran;
  });
  return filteredData;
}

export default filters;
