export const getPublicUrl = (path) => {
  return process.env.PUBLIC_URL + path;
}

export const isActive = (current, exact = false) => {
  return (match, location) => {
    if (!exact && location.pathname.startsWith(current)) {
      return true;
    } else if (exact && location.pathname === current) {
      return true;
    } else {
      return false;
    }
  };
}
