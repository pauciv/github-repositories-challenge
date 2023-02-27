const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      if (num < 99000) {
        return `${(num / 1000).toFixed(1)}K`;
      }
      return `${Math.round(num / 1000)}K`;
    }
    return num.toString();
}

export default formatNumber