const getReq = async (url: string) => {
  const rData = await fetch(url);
  return await rData.json();
};

export { getReq };
