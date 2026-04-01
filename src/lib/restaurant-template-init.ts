// @ts-nocheck
export function initRestaurantTemplatePage(): void {
    const scrollArrow = document.getElementById("scrollArrow");
    const heroVideo = document.querySelector(".hero-video-bg");
    const curtain = document.getElementById("pageCurtain");
    const coffeeSection = document.getElementById("erlebnis");
    const coffeeVideo = document.getElementById("coffeeVideo");
    const coffeeOverlay = document.getElementById("coffeeOverlay");
    const coffeePlayWrap = document.getElementById("coffeePlayWrap");
    const coffeePlayBtn = document.getElementById("coffeePlayBtn");
    const coffeeSpinner = document.getElementById("coffeeSpinner");
    const coffeeControls = document.getElementById("coffeeControls");
    const coffeePlayPause = document.getElementById("coffeePlayPause");
    const coffeeProgress = document.getElementById("coffeeProgress");
    const coffeeProgressFill = document.getElementById("coffeeProgressFill");
    const coffeeTime = document.getElementById("coffeeTime");
    const coffeeMuteBtn = document.getElementById("coffeeMuteBtn");
    const coffeeFullscreenBtn = document.getElementById("coffeeFullscreenBtn");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileMedia = window.matchMedia("(max-width: 768px)");
    let isTransitioning = false;
    let animationObserver = null;
    let coffeePreloadObserver = null;
    let coffeeVisibilityObserver = null;
    let controlsHideTimer = null;
    let isSeekingCoffee = false;

    const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

    function formatTime(seconds) {
      const safe = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
      const mins = Math.floor(safe / 60);
      const secs = safe % 60;
      return `${mins}:${String(secs).padStart(2, "0")}`;
    }

    function showCoffeeSpinner() {
      if (coffeeSpinner) {
        coffeeSpinner.classList.add("visible");
      }
    }

    function hideCoffeeSpinner() {
      if (coffeeSpinner) {
        coffeeSpinner.classList.remove("visible");
      }
    }

    function setCoffeePlayingUI(isPlaying) {
      if (!coffeeSection || !coffeeOverlay || !coffeePlayWrap || !coffeePlayPause) {
        return;
      }

      coffeeSection.classList.toggle("playing", isPlaying);
      coffeePlayPause.textContent = isPlaying ? "❚❚" : "▶";
      if (!isPlaying) {
        if (coffeeControls) {
          coffeeControls.classList.toggle("visible", mobileMedia.matches);
        }
      } else {
        queueHideCoffeeControls();
      }
    }

    function updateCoffeeProgress() {
      if (!coffeeVideo || !coffeeProgressFill || !coffeeProgress || !coffeeTime) {
        return;
      }

      const duration = coffeeVideo.duration || 0;
      const current = coffeeVideo.currentTime || 0;
      const percent = duration > 0 ? (current / duration) * 100 : 0;
      coffeeProgressFill.style.width = `${percent}%`;
      coffeeProgress.setAttribute("aria-valuenow", String(Math.round(percent)));
      coffeeTime.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
    }

    function seekCoffeeByClientX(clientX) {
      if (!coffeeProgress || !coffeeVideo) {
        return;
      }

      const rect = coffeeProgress.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      coffeeVideo.currentTime = ratio * (coffeeVideo.duration || 0);
      updateCoffeeProgress();
    }

    function showCoffeeControls(force = false) {
      if (!coffeeControls || !coffeeVideo) {
        return;
      }

      if (controlsHideTimer) {
        clearTimeout(controlsHideTimer);
      }

      const shouldShow = force || !coffeeVideo.paused || (mobileMedia.matches && coffeeVideo.paused);
      coffeeControls.classList.toggle("visible", shouldShow);
    }

    function queueHideCoffeeControls() {
      if (!coffeeControls || !coffeeVideo) {
        return;
      }

      if (controlsHideTimer) {
        clearTimeout(controlsHideTimer);
      }

      if (coffeeVideo.paused) {
        coffeeControls.classList.add("visible");
        return;
      }

      controlsHideTimer = window.setTimeout(() => {
        if (!coffeeVideo.paused) {
          coffeeControls.classList.remove("visible");
        }
      }, 3000);
    }

    function rampCoffeeVolumeTo(targetVolume, durationMs) {
      if (!coffeeVideo) {
        return;
      }

      const startVolume = coffeeVideo.volume;
      const delta = targetVolume - startVolume;
      const start = performance.now();

      function step(now) {
        const progress = Math.min((now - start) / durationMs, 1);
        coffeeVideo.volume = startVolume + (delta * progress);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }

    async function playCoffeeWithFade() {
      if (!coffeeVideo) {
        return;
      }

      try {
        coffeeVideo.muted = false;
        coffeeVideo.volume = 0;
        showCoffeeSpinner();
        await coffeeVideo.play();
        setCoffeePlayingUI(true);
        rampCoffeeVolumeTo(1, 1500);
      } catch {
        setCoffeePlayingUI(false);
      }
    }

    function setupCoffeeObservers() {
      if (!coffeeSection || !coffeeVideo) {
        return;
      }

      coffeePreloadObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (coffeeVideo.preload === "none") {
              coffeeVideo.preload = "metadata";
              coffeeVideo.load();
            }
            coffeePreloadObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0,
        rootMargin: "400px 0px 400px 0px",
      });

      coffeeVisibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            coffeeVideo.preload = "auto";
            if (!coffeeSection.classList.contains("animate-visible")) {
              coffeeSection.classList.remove("animate-hidden");
              coffeeSection.classList.add("animate-visible");
            }
            coffeeSection.classList.add("coffee-stage-visible");
          }
        });
      }, {
        threshold: 0.3,
      });

      coffeePreloadObserver.observe(coffeeSection);
      coffeeVisibilityObserver.observe(coffeeSection);
    }

    function setupCoffeeCeremonyPlayer() {
      if (!coffeeSection || !coffeeVideo) {
        return;
      }

      coffeeVideo.controls = false;
      updateCoffeeProgress();
      showCoffeeControls(mobileMedia.matches);
      setupCoffeeObservers();

      if (coffeePlayBtn) {
        coffeePlayBtn.addEventListener("click", () => {
          playCoffeeWithFade();
        });
      }

      if (coffeePlayPause) {
        coffeePlayPause.addEventListener("click", () => {
          if (coffeeVideo.paused) {
            playCoffeeWithFade();
          } else {
            coffeeVideo.pause();
          }
        });
      }

      if (coffeeMuteBtn) {
        coffeeMuteBtn.addEventListener("click", () => {
          coffeeVideo.muted = !coffeeVideo.muted;
          coffeeMuteBtn.textContent = coffeeVideo.muted ? "🔇" : "🔊";
        });
      }

      if (coffeeFullscreenBtn) {
        coffeeFullscreenBtn.addEventListener("click", async () => {
          if (!document.fullscreenElement) {
            await coffeeSection.requestFullscreen();
          } else {
            await document.exitFullscreen();
          }
        });
      }

      if (coffeeProgress) {
        coffeeProgress.addEventListener("pointerdown", (event) => {
          isSeekingCoffee = true;
          seekCoffeeByClientX(event.clientX);
        });

        window.addEventListener("pointermove", (event) => {
          if (isSeekingCoffee) {
            seekCoffeeByClientX(event.clientX);
          }
        }, { passive: true });

        window.addEventListener("pointerup", () => {
          isSeekingCoffee = false;
        }, { passive: true });
      }

      coffeeVideo.addEventListener("timeupdate", updateCoffeeProgress);
      coffeeVideo.addEventListener("loadedmetadata", updateCoffeeProgress);
      coffeeVideo.addEventListener("canplay", hideCoffeeSpinner);
      coffeeVideo.addEventListener("playing", () => {
        hideCoffeeSpinner();
        setCoffeePlayingUI(true);
      });
      coffeeVideo.addEventListener("pause", () => {
        setCoffeePlayingUI(false);
      });
      coffeeVideo.addEventListener("waiting", showCoffeeSpinner);

      coffeeSection.addEventListener("mousemove", () => {
        if (!mobileMedia.matches && !coffeeVideo.paused) {
          showCoffeeControls(true);
          queueHideCoffeeControls();
        }
      }, { passive: true });

      coffeeSection.addEventListener("click", (event) => {
        const target = event.target;
        const clickedControls = coffeeControls && coffeeControls.contains(target);
        const clickedPlay = coffeePlayBtn && coffeePlayBtn.contains(target);
        if (clickedControls || clickedPlay) {
          return;
        }

        if (mobileMedia.matches) {
          if (coffeeVideo.paused) {
            playCoffeeWithFade();
          } else {
            coffeeVideo.pause();
          }
          showCoffeeControls(true);
        } else if (!coffeeVideo.paused) {
          showCoffeeControls(true);
          queueHideCoffeeControls();
        }
      });

      if (coffeeControls) {
        coffeeControls.addEventListener("pointerdown", () => {
          showCoffeeControls(true);
          queueHideCoffeeControls();
        });
      }

      document.addEventListener("fullscreenchange", () => {
        showCoffeeControls(true);
        queueHideCoffeeControls();
      });
    }

    function setAnimationDelays() {
      document.querySelectorAll('[data-animate="menu-tab"]').forEach((el, index) => {
        el.style.setProperty("--anim-delay", `${index * 0.1}s`);
      });

      document.querySelectorAll('[data-animate="menu-card"]').forEach((el, index) => {
        el.style.setProperty("--anim-delay", `${index * 0.15}s`);
      });

      document.querySelectorAll('[data-animate="team-card"]').forEach((el, index) => {
        el.style.setProperty("--anim-delay", `${index * 0.2}s`);
      });

      document.querySelectorAll('[data-animate^="review-"]').forEach((el, index) => {
        el.style.setProperty("--anim-delay", `${index * 0.15}s`);
      });

      document.querySelectorAll('[data-animate="gallery-item"]').forEach((el, index) => {
        el.style.setProperty("--anim-delay", `${index * 0.1}s`);
      });

      document.querySelectorAll(".coffee-word").forEach((el, index) => {
        el.style.setProperty("--word-delay", `${index * 0.15}s`);
      });
    }

    function animateCountUp(statItem) {
      const numberEl = statItem.querySelector(".stat-number");
      if (!numberEl || statItem.dataset.countStarted === "true") {
        return;
      }

      statItem.dataset.countStarted = "true";
      const finalValue = Number(statItem.dataset.count || 0);
      const suffix = statItem.dataset.suffix || "";
      const duration = 2000;
      const startTime = performance.now();

      function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(finalValue * eased);
        numberEl.textContent = `${value}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(updateCount);
        }
      }

      window.requestAnimationFrame(updateCount);
    }

    function markVisible(element) {
      if (element.dataset.animated === "true") {
        return;
      }

      element.dataset.animated = "true";
      element.classList.remove("animate-hidden");
      element.classList.add("animate-visible");

      if (element.dataset.animate === "stats-item") {
        animateCountUp(element);
      }
    }

    function initScrollAnimations() {
      const animatedElements = document.querySelectorAll("[data-animate]");
      if (prefersReducedMotion) {
        animatedElements.forEach((element) => {
          if (element.dataset.animate === "coffee-cinematic") {
            element.classList.remove("animate-hidden");
            element.classList.add("animate-visible", "coffee-stage-visible");
            return;
          }
          element.classList.remove("animate-hidden");
          element.classList.add("animate-visible");
          if (element.dataset.animate === "stats-item") {
            animateCountUp(element);
          }
        });
        return;
      }

      animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target);
            animationObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      });

      animatedElements.forEach((element) => {
        if (element.dataset.animate === "coffee-cinematic") {
          return;
        }
        animationObserver.observe(element);
      });
    }

    async function playCurtainTransition(action) {
      if (isTransitioning) {
        return;
      }

      if (prefersReducedMotion || !curtain) {
        action();
        return;
      }

      isTransitioning = true;
      curtain.classList.remove("leaving", "intro-leaving", "mid", "show-subtitle", "intro-active");
      void curtain.offsetWidth;
      curtain.classList.add("entering");

      await wait(500);
      curtain.classList.add("mid");
      await wait(200);
      action();
      curtain.classList.remove("entering");
      curtain.classList.add("leaving");
      curtain.classList.remove("mid");
      await wait(500);
      curtain.classList.remove("leaving");
      isTransitioning = false;
    }

    function navigateToHash(hash) {
      const target = document.querySelector(hash);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: "auto", block: "start" });
      if (window.location.hash !== hash) {
        history.pushState(null, "", hash);
      }
    }

    function bindInternalLinkTransitions() {
      document.querySelectorAll('a[href]').forEach((link) => {
        const href = link.getAttribute("href") || "";
        const isHashLink = href.startsWith("#");
        const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

        if (!isHashLink || isExternal) {
          return;
        }

        link.addEventListener("click", (event) => {
          event.preventDefault();
          navLinks.classList.remove("open");
          playCurtainTransition(() => navigateToHash(href));
        });
      });
    }

    async function runInitialPageAnimation() {
      if (!curtain) {
        return;
      }

      if (prefersReducedMotion) {
        curtain.style.display = "none";
        return;
      }

      const introSeen = sessionStorage.getItem("restaurant-template-intro-seen") === "1";

      if (introSeen) {
        curtain.classList.remove("intro-active", "intro-leaving", "mid", "show-subtitle");
        return;
      }

      curtain.classList.add("intro-active");
      void curtain.offsetWidth;
      await wait(300);
      curtain.classList.add("mid");
      await wait(400);
      curtain.classList.add("show-subtitle");
      await wait(500);
      curtain.classList.remove("mid", "show-subtitle");
      curtain.classList.add("intro-leaving");
      await wait(700);
      curtain.classList.remove("intro-active", "intro-leaving");
      sessionStorage.setItem("restaurant-template-intro-seen", "1");
    }

    window.addEventListener("load", () => {
      if (heroVideo) {
        const playPromise = heroVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            // Ignore autoplay rejection; muted video usually starts automatically.
          });
        }
      }
    });

    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const toTopBtn = document.getElementById("toTop");

    function onScroll() {
      const scrolled = window.scrollY > 40;
      navbar.classList.toggle("scrolled", scrolled);
      toTopBtn.classList.toggle("show", window.scrollY > 380);
      if (scrollArrow) {
        scrollArrow.classList.toggle("faded", window.scrollY > 20);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    setAnimationDelays();
    initScrollAnimations();
    bindInternalLinkTransitions();
    setupCoffeeCeremonyPlayer();
    runInitialPageAnimation();

    const tabs = document.querySelectorAll(".tab-btn");
    const menuCards = document.querySelectorAll(".menu-card");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const filter = tab.dataset.filter;

        menuCards.forEach((card) => {
          const category = card.dataset.category;
          const show = filter === "alle" || category === filter || category === "alle";
          card.classList.toggle("hidden", !show);
        });
      });
    });

    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");

    galleryItems.forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });

    const reservationForm = document.getElementById("reservationForm");
    const successMessage = document.getElementById("successMessage");

    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      successMessage.style.display = "block";
      reservationForm.reset();
      window.setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    });

    const reviewsTrack = document.getElementById("reviewsTrack");
    let reviewIndex = 0;

    function updateReviewCarousel() {
      if (window.innerWidth > 768) {
        reviewsTrack.style.transform = "translateX(0)";
        return;
      }
      reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
    }

    function startCarousel() {
      window.setInterval(() => {
        if (window.innerWidth <= 768) {
          reviewIndex = (reviewIndex + 1) % 3;
          updateReviewCarousel();
        }
      }, 4000);
    }

    window.addEventListener("resize", () => {
      updateReviewCarousel();
    });
    updateReviewCarousel();
    startCarousel();

    window.addEventListener("pagehide", () => {
      if (animationObserver) {
        animationObserver.disconnect();
      }
      if (coffeePreloadObserver) {
        coffeePreloadObserver.disconnect();
      }
      if (coffeeVisibilityObserver) {
        coffeeVisibilityObserver.disconnect();
      }
      if (controlsHideTimer) {
        clearTimeout(controlsHideTimer);
      }
    });

}
