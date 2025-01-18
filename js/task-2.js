// Image data
const images = [
    { 
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat"
    },
    { 
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    { 
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running"
    },
    { 
      url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      alt: "Alpine Spring Meadows"
    },
    { 
      url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      alt: "Nature Landscape"
    },
    { 
      url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      alt: "Lighthouse Coast Sea"
    }
  ];
  
  // Select the gallery element
  const gallery = document.querySelector('.gallery');
  
  // Create the gallery items and append them in one operation
  const galleryItems = images.map(image => {
    const li = document.createElement('li');
    li.classList.add('gallery-item'); // Add the class for styling
  
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
  
    li.appendChild(img);
    
    return li;
  });
  
  // Append all gallery items at once
  gallery.append(...galleryItems);
  
  // Add styles directly to the document
  const style = document.createElement('style');
  document.head.appendChild(style);
  style.textContent = `
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 100px 156px;
      width: 1440px;
      height: 848px;
      list-style-type: none;
      margin: 0;
    }
  
    .gallery-item {
       width: calc(33.33% - 24px);
       margin-bottom: 48px;
    }
  
    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
  
  