const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const orderGalery = document.getElementById("gallery")
const arr =[]
images.forEach((image) => {
    
    const el = document.createElement('li')
    const picture = document.createElement('img')
    picture.src = image.url
    picture.alt = image.alt
    picture.width = 640;
    el.appendChild(picture)
    arr.push(el)
    console.log(el);
    
})

orderGalery.append(...arr)
orderGalery.classList.add('picture')