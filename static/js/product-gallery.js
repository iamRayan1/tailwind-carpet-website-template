const images = [
    "static/images/product-images/1/farsh-mahsare-atarina-zamine-abi-main.png",
    "static/images/product-images/1/farsh-mahsare-atarina-zamine-abi-tn1.png",
    "static/images/product-images/1/farsh-mahsare-atarina-zamine-abi-tn2.png",
    "static/images/product-images/1/farsh-mahsare-atarina-zamine-abi-tn3.png"
  ];

  const mainImage = document.getElementById("mainImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const modal = document.getElementById("modal");
  const modalGallery = document.getElementById("modalGallery");
  const modalPreview = document.getElementById("modalPreview");
  const moreBtn = document.getElementById("moreBtn");

  const mainSrc = images[0];
  const otherImages = images.slice(1);
  let currentIndex = 0;

  mainImage.src = mainSrc;

  otherImages.forEach(src => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "hidden lg:block w-20 xl:w-25  h-20 xl:h-25 object-cover rounded-lg border border-ash-6 p-2.5 cursor-pointer";
    thumb.addEventListener("click", () => openModalWith(src));
    thumbnailContainer.insertBefore(thumb, moreBtn);
  });

  moreBtn.addEventListener("click", () => openModalWith());

  function openModalWith(src = images[0]) {
    modal.classList.remove("hidden");
    currentIndex = images.indexOf(src);
    modalPreview.src = src;
    renderModalGallery();
  }

  function openModal() {
    openModalWith(mainSrc);
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  function renderModalGallery() {
    modalGallery.innerHTML = "";
    images.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.className = "w-20 h-20 object-cover rounded-lg border-2 cursor-pointer";
      thumb.addEventListener("click", () => {
        modalPreview.src = src;
        currentIndex = index;
      });
      modalGallery.appendChild(thumb);
    });
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalPreview.src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalPreview.src = images[currentIndex];
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });