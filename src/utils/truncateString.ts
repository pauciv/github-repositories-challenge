const truncateString = (string: string, maxCharacters: number): string => {
    if (string.length <= maxCharacters) {
      return string;
    }
    return string.slice(0, maxCharacters) + "...";
}

export default truncateString