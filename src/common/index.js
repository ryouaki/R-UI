export const getPublicUrl = (path) => {
  return process.env.PUBLIC_URL + path;
}

export const isActive = (current) => {
  return (match, location) => {
    if (location.pathname === current) {
      return true;
    } else {
      return false;
    }
  };
}
