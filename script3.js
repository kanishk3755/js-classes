let div=document.createElement("div");
let h3 = document.createElement("h3");
let p1= document.createElement("p");
let p2= document.createElement("p");
let p3= document.createElement("p");
let br=document.createElement("br");
let hr=document.createElement("hr");

h3.textContent="We are learning about DOM";
p1.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis veniam alias vitae obcaecati numquam necessitatibus dolor architecto similique beatae temporibus, tenetur quidem ex, consequuntur id quaerat voluptatem esse quae.";
p2.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis veniam alias vitae obcaecati numquam necessitatibus dolor architecto similique beatae temporibus, tenetur quidem ex, consequuntur id quaerat voluptatem esse quae.";
p3.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis veniam alias vitae obcaecati numquam necessitatibus dolor architecto similique beatae temporibus, tenetur quidem ex, consequuntur id quaerat voluptatem esse quae.";

h3.style.color="blue";
p1.style.color="green";
p2.style.color="blue";
p3.style.color="red";
div.style.backgroundColor="aqua";

let div2=document.createElement("div");
let h = document.createElement("h3");
let p= document.createElement("p");
let br2=document.createElement("br");
let hr2=document.createElement("hr");
let img=document.createElement("img");
let img2=document.createElement("img");

let div3=document.createElement("div");

img.src="https://yt3.googleusercontent.com/ytc/AIdro_k7CMY7TJWlKb4p9-cE3wR4lluDRUTZXc0XBEW1_3s-nw=s900-c-k-c0x00ffffff-no-rj";
img.style.height="100px";
img.style.width="100px";

img2.src="https://topperskit.com/cdn/shop/files/104_28aebe97-1b4e-4eec-9a59-d30041e42907.jpg?v=1708058290";
img2.style.height="100px";
img2.style.width="100px";

h.textContent="We are learning about DOM";
p.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veritatis veniam alias vitae obcaecati numquam necessitatibus dolor architecto similique beatae temporibus, tenetur quidem ex, consequuntur id quaerat voluptatem esse quae.";

h.style.color="blue";
p.style.color="green";
div.style.backgroundColor="aqua";

div.append(h3,hr,p1,p2,p3,br);
div2.append(h,p,br2,img);
div3.append(img,img2);
div3.style.backgroundColor="#00308F";
div3.style.display="flex";
div3.style.gap="20px";
div3.style.justifyContent="space-between";
div3.style.border="2px solid black";
div3.style.marginTop="20px";
div3.style.padding="20px";
document.body.append(div,div2,div3);


