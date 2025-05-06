document.addEventListener("DOMContentLoaded", () => {
    // ===== BURGER MENU =====
    const menuButton = document.querySelector(".hamburger-menu");
    const mobileMenu = document.getElementById("mobileMenu");
    const overlay = document.querySelector(".overlay");
    const closeButton = document.querySelector("#mobileMenu .w-8.h-8");
  
    function openMenu() {
      mobileMenu.classList.remove("right-[-100%]");
      mobileMenu.classList.add("right-0");
      overlay.classList.remove("hidden");
    }
  
    function closeMenu() {
      mobileMenu.classList.remove("right-0");
      mobileMenu.classList.add("right-[-100%]");
      overlay.classList.add("hidden");
    }
  
    if (menuButton && mobileMenu && overlay && closeButton) {
      menuButton.addEventListener("click", openMenu);
      overlay.addEventListener("click", closeMenu);
      closeButton.addEventListener("click", closeMenu);
    }
  
    // ===== SWIPER SLIDER FOR HOME PAGE =====
    if (document.querySelector("#homepage-carpets-swiper")) {
      new Swiper("#homepage-carpets-swiper", {
        slidesPerView: 1.125,
        spaceBetween: 10,
        breakpoints: {
          425: { slidesPerView: 1.5, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        },
      });
    }

    // ===== SWIPER SLIDER FOR PRODUCT PAGE =====
    if (document.querySelector("#swiper-similar-carpets ")) {
      new Swiper("#swiper-similar-carpets ", {
        slidesPerView: 1.3,
        spaceBetween: 10,
        breakpoints: {
          425: { slidesPerView: 1.6, spaceBetween: 20 },
          640: { slidesPerView: 2.6, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        },
      });
    }
  
    // ===== PASSWORD TOGGLE =====
    function setupTogglePassword(toggleBtnId, inputId, eyeIconId) {
      const toggleBtn = document.getElementById(toggleBtnId);
      const input = document.getElementById(inputId);
      const eyeIcon = document.getElementById(eyeIconId);
  
      if (toggleBtn && input && eyeIcon) {
        toggleBtn.addEventListener("click", () => {
          const isPassword = input.type === "password";
          input.type = isPassword ? "text" : "password";
          eyeIcon.setAttribute("href", isPassword ? "#eye" : "#eye-slash");
        });
      }
    }
  
    setupTogglePassword("togglePassword", "register-password", "eyeUse");
    setupTogglePassword("toggleRePassword", "re-password", "eyeUseRePassword");
    setupTogglePassword("toggleLoginPassword", "login-password", "eyeUseLogin");
  
    // ===== BOTTOM SHEET (MOBILE REGISTER) =====
    const loginButton = document.getElementById("login-button");
    const bottomSheet = document.getElementById("bottom-sheet");
    
    if (loginButton && bottomSheet) {
      loginButton.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.innerWidth >= 1024) {
          window.location.href = "register.html";
        } else {
          bottomSheet.classList.remove("translate-y-full");
          bottomSheet.classList.add("translate-y-0");
          document.body.style.overflow = "hidden";
        }
      });
    
      window.addEventListener("click", (e) => {
        if (
          window.innerWidth < 1024 &&
          !bottomSheet.contains(e.target) &&
          e.target.id !== "login-button"
        ) {
          bottomSheet.classList.remove("translate-y-0");
          bottomSheet.classList.add("translate-y-full");
          document.body.style.overflow = "";
        }
      });
    }
    
  
    // ===== SWITCH BETWEEN FORMS =====
    const switchToLoginLink = document.querySelector("#switch-to-login");
    const switchToRegisterLink = document.querySelector("#switch-to-register");
    const registerForm = document.getElementById("register-form-wrapper");
    const loginForm = document.getElementById("login-form-wrapper");
    
    if (switchToLoginLink && switchToRegisterLink && registerForm && loginForm) {
      switchToLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
    
        registerForm.classList.remove("flex");
        registerForm.classList.add("hidden");
    
        loginForm.classList.remove("hidden");
        loginForm.classList.add("flex");
      });
    
      switchToRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
    
        loginForm.classList.remove("flex");
        loginForm.classList.add("hidden");
    
        registerForm.classList.remove("hidden");
        registerForm.classList.add("flex");
      });
    }
    
                                                                                              
    
  });
  