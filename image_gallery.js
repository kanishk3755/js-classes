const images = [
  "https://yt3.googleusercontent.com/ytc/AIdro_k7CMY7TJWlKb4p9-cE3wR4lluDRUTZXc0XBEW1_3s-nw=s900-c-k-c0x00ffffff-no-rj",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
  "https://via.placeholder.com/300x200?text=Image+5",
  "https://via.placeholder.com/300x200?text=Image+6",
  "https://via.placeholder.com/300x200?text=Image+7",
  "https://via.placeholder.com/300x200?text=Image+8",
  "https://via.placeholder.com/300x200?text=Image+9",
  "https://via.placeholder.com/300x200?text=Image+10",
  "https://via.placeholder.com/300x200?text=Image+11",
  "https://via.placeholder.com/300x200?text=Image+12",
  "https://via.placeholder.com/300x200?text=Image+13",
  "https://via.placeholder.com/300x200?text=Image+14",
  "https://via.placeholder.com/300x200?text=Image+15"
];

const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet;

sheet.insertRule(`body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f0f0f0;
}`, sheet.cssRules.length);

sheet.insertRule(`.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  box-sizing: border-box;
}`, sheet.cssRules.length);

sheet.insertRule(`.gallery-item {
  flex: 0 0 calc(33.333% - 10.666px); /* 3 columns with gap */
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease;
}`, sheet.cssRules.length);

sheet.insertRule(`.gallery-item:hover {
  transform: scale(1.03);
}`, sheet.cssRules.length);

sheet.insertRule(`.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}`, sheet.cssRules.length);

const container = document.createElement('div');
container.className = 'gallery-container';
document.body.appendChild(container);

const maxItems = 5 * 3;
for (let i = 0; i < maxItems; i++) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  if (images[i]) {
    const img = document.createElement('img');
    img.src = images[i];
    img.alt = `Image ${i + 1}`;
    item.appendChild(img);
  }

  container.appendChild(item);
}
