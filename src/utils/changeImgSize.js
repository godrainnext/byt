export default function changeImgSize(imgUrl, size = 'small') {
  return `${imgUrl}?type=${size}`;
}
