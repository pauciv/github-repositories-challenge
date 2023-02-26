const formatUpdatedAt = (updatedAt: string): string => {
  const now = new Date();
  const updatedAtDate = new Date(updatedAt);
  const timeDiff = Math.abs(now.getTime() - updatedAtDate.getTime());
  const diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffDays === 0) {
    return "Updated today";
  } else if (diffDays === 1) {
    return "Updated yesterday";
  } else if (diffDays < 7) {
    return `Updated ${diffDays} days ago`;
  } else if (diffWeeks > 0 && diffWeeks < 5) {
    return `Updated ${diffWeeks} ${diffWeeks === 1 ? 'week' : 'weeks'} ago`;
  } else {
    return `Updated on ${updatedAtDate.toLocaleString("default", { month: "short", day: "numeric" })}`;
  }
}

export default formatUpdatedAt