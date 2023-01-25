export const GetHash = () => {
  return location.hash;
};
export const ReplaceHash = (hash = "#hash") => {
  if (history.pushState) {
    history.pushState(null, null, hash);
  } else {
    location.hash = hash;
  }
};
