const getCounts = counts => {
  if (counts >= 10 ** 9) {
    return `${Math.floor(counts / 10 ** 9)}B`;
  }
  if (counts >= 10 ** 6) {
    return `${Math.floor(counts / 10 ** 6)}M`;
  }
  if (counts >= 10 ** 3) {
    return `${Math.floor(counts / 10 ** 3)}K`;
  }
  return `${counts}`;
};

export default getCounts;
