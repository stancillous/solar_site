<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3" style="border-bottom: 1px solid #e5e5e5">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="/">Solar Ireland</a>
        <button class="navbar-toggler border-0" type="button" @click="toggleNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Desktop Navigation -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav align-items-center d-none d-lg-flex">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="mobile-nav-link" href="/solar-calculator">Solar Calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/solar-installers">For Suppliers</a>
            </li>
            <li class="nav-item ms-3">
              <a href="/get-quote">
                <button class="btn btn-sm btn-primary px-4" href="#">Get a Free Estimate</button>
              </a>
            </li>
          </ul>
        </div>

        <!-- Mobile Navigation -->
        <div class="mobile-nav" :class="{ 'active': isNavOpen }">
          <div class="mobile-nav-header p-3 d-flex justify-content-between align-items-center">
            <a class="navbar-brand fw-bold fs-4" href="/">Solar Ireland</a>
            <button class="btn-close" @click="toggleNav"></button>
          </div>
          <ul class="list-unstyled p-3">
            <li class="mb-3">
              <a class="mobile-nav-link" href="/">Home</a>
            </li>
            <li class="mb-3">
              <a class="mobile-nav-link" href="/solar-calculator">Solar Calculator</a>
            </li>
            <li class="mb-3">
              <a class="mobile-nav-link" href="/solar-installers">For Suppliers</a>
            </li>
            <li class="mt-4">
              <a href="/get-quote">
                <button class="btn btn-sm btn-primary px-4 w-100" href="#">Get a Free Estimate</button>
              </a>
            </li>
          </ul>
        </div>

        <!-- Overlay -->
        <div class="mobile-nav-overlay" :class="{ 'active': isNavOpen }" @click="toggleNav"></div>
      </div>
    </nav>


    <slot/>

    <!-- Footer -->
    <footer class="bg-light py-4 mt-5" style="border-top: 1px solid #e5e5e5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <h5 class="fw-bold mb-3">Solar Ireland</h5>
            <p class="text-muted mb-0">Making clean energy accessible to every Irish home.</p>
          </div>
          <div class="col-lg-2">
            <h6 class="fw-bold mb-3">Quick Links</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2"><a href="/" class="text-decoration-none text-muted">Home</a></li>
              <li class="mb-2"><a href="/solar-calculator" class="text-decoration-none text-muted">Solar Calculator</a></li>
              <li class="mb-2"><a href="/solar-installers" class="text-decoration-none text-muted">For Suppliers</a></li>
              <li class="mb-2"><a href="get-quote" class="text-decoration-none text-muted">Get a Quote</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h6 class="fw-bold mb-3">Contact</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2 text-muted">Dublin, Ireland</li>
              <li class="mb-2"><a href="mailto:info@solarireland.ie" class="text-decoration-none text-muted">info@solarireland.ie</a></li>
              <li class="mb-2"><a href="tel:+353123456789" class="text-decoration-none text-muted">+353 1 234 5678</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h6 class="fw-bold mb-3">Follow Us</h6>
            <div class="d-flex gap-3">
              <a href="#" class="text-muted"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-muted"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-muted"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <hr class="my-4">
        <div class="row">
          <div class="col-12 text-center">
            <p class="text-muted small mb-0">&copy; {{ new Date().getFullYear() }} Solar Ireland. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
  if (isNavOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Add Bootstrap CSS
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css'
    }
  ],
  script: [
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
    }
  ]
})
</script>

<style>
/* Mobile Navigation Styles */
.mobile-nav {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: white;
  z-index: 1050;
  transition: left 0.3s ease;
}

.mobile-nav.active {
  left: 0;
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1040;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav-link {
  color: #333;
  text-decoration: none;
  /* font-size: 1.1rem; */
  transition: color 0.2s ease;
}

.mobile-nav-link:hover {
  text-decoration: underline;
}

@media (min-width: 992px) {
  .mobile-nav,
  .mobile-nav-overlay {
    display: none;
  }

  .mobile-nav-link{
    font-size: 14px !important;
  }
}
</style>