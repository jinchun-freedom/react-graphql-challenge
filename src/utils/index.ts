export const resoleVideo = (link: string) => {
  const param = link.split(".")[1].split("/")[1];
  const res = "https://www.youtube.com/embed/" + param;
  return res;
};
