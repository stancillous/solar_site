<template>
  <div class="min-vh-100 bg-white">

    <!-- Hero Section -->
    <section class="py-5 hero-section-image">
      <div class="container">
        <div class="text-center d-flex align-items-center justify-content-center">
          <div class="py-5">
            <h1 class="display-4 fw-bold mb-4">Find top solar deals from trusted, top-rated installers{{ county ? ` in ${county}` : '.' }}</h1>
            <p class="lead fs-6 text- fw-bold mb-4 mx-auto" style="max-width: 800px;">
             Ready to lower your electricity bills and make your home more energy-efficient? Fill out a short form and we’ll connect you with top-rated, pre-vetted solar installers in your area. It’s fast, free, and there’s absolutely no obligation — just real quotes from real pros who care about quality and savings.
            </p>
            <a href="/get-quote">
              <button class="btn btn-sm btn-primary btn-lg px-4 ">Get a Free Estimate</button>
            </a>

          </div>
        </div>

       
      </div>
    </section>


    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Find top solar installers in Ireland</h2>
        <div class="row justify-content-center g-4">
          <!-- Efficient Property Ownership Card -->
          <div class="col-md-4">
            <div class="card h-100 border-0 rounded-3 p-4">
              <div class="card-body text-center">
                <i class="material-icons fs-1 text-primary">request_quote</i>
                <h5 class="mb-3">Request quotes</h5>
                <p class="text-muted">Fill out a short form and we’ll connect you with top-rated, pre-vetted solar installers in your area.</p>
              </div>
            </div>
          </div>
          <!-- Increased Profitability Card -->
          <div class="col-md-4">
            <div class="card h-100 border-0 rounded-3 p-4 shadow">
              <div class="card-body text-center">
                <i class="material-icons fs-1 text-primary">receipt_long</i>
                <h5 class=" mb-3">Get quote</h5>
                <p class="text-muted">We'll match you with the best solar installers in your area.</p>
              </div>
            </div>
          </div>
          <!-- Informed Investment Decisions Card -->
          <div class="col-md-4">
            <div class="card h-100 border-0 rounded-3 p-4">
              <div class="card-body text-center">
                <i class="material-icons fs-1 text-primary">check_circle</i>
                <h5 class="mb-3">Choose and save</h5>
                <p class="text-muted">Compare quotes and choose the best option for your home.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
           <a href="/get-quote">
            <button class="btn btn-sm btn-primary btn-lg px-4 mb-5">Get a Free Estimate</button>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQs Section -->
    <section id="faqs" class="py-5 bg-light">
      <div class="container">
        <div class="row justify-content-between align-items-start g-5">
          <!-- Left Column with Title -->
          <div class="col-lg-4">
            <h2 class="mt-2 mb-4 ">Everything you need to know about going solar — answered.</h2>
          </div>
          
          <!-- Right Column with Accordion -->
          <div class="col-lg-7">
            <div class="accordion" id="faqAccordion">
              <div v-for="(faq, index) in faqs" :key="index" class="accordion-item border-0 mb-3 ">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button collapsed bg-white" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    :data-bs-target="'#collapse' + index"
                    :aria-expanded="index === 0"
                    :aria-controls="'collapse' + index">
                    {{ faq.question }}
                  </button>
                </h2>
                <div 
                  :id="'collapse' + index" 
                  class="accordion-collapse collapse" 
                  :class="{ 'show': index === 0 }"
                  data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-muted">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <!-- <section id="about-us" class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-4 mb-4 mb-lg-0">
            <h2 class="display-6 mt-2 mb-4 lh-sm fw-normal">
              Connecting homeowners with trusted solar installers
            </h2>
          </div>

          <div class="col-lg-7 offset-lg-1">
            <div class="row g-4">
              <div class="col-12">
                <p class="text-muted">Established in 2023, our platform specializes in generating high-quality solar leads by connecting homeowners and businesses with reliable, certified solar installation companies. We simplify the process of going solar by helping customers easily find, compare, and choose the best solar solutions tailored to their energy needs.</p>
              </div>

              <div class="col-md-6">
                <p class="text-muted">Our core service revolves around collecting detailed project information directly from users through a simple online form. This data is carefully verified and passed on to licensed solar professionals who are best suited to handle the customer's specific requirements — helping both parties save time and get better results.</p>
                <p class="text-muted">With a growing network of vetted installers and a deep understanding of regional solar trends, we help make the transition to clean energy faster, smoother, and more affordable. Whether it's a residential rooftop system or a commercial solar project, our platform acts as the bridge between interested buyers and expert solar providers.</p>
              </div>

              <div class="col-md-6">
                <p class="text-muted">In addition to lead generation, we provide solar education resources, cost-saving tips, and updates on government incentives to help consumers make informed choices.</p>
                <p class="text-muted">Through our transparent process, commitment to quality, and customer-first approach, we've positioned ourselves as a valuable partner for both solar buyers and installers across the region.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    
    <!-- Form Section -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Column with Title and Steps -->
          <div class="col-lg-6 pe-lg-5">
            <h2 class="mt-2 mb-4">Your home energy, customized</h2>
            
            <div class="position-relative ps-4 mt-5">
              
              <!-- Steps -->
              <div v-for="(step, index) in steps" :key="index" class="d-flex mb-4">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center position-absolute" 
                     style="width: 32px; height: 32px; left: 0;">
                  {{ index + 1 }}
                </div>
                <div class="ps-5">
                  <p class="mb-0 fw-normal">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column with Form -->
          <div class="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
            <div class="bg-light p-4 rounded">
              <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                <div class="mb-3">
                  <label for="fullName" class="form-label">Your Name</label>
                  <input type="text" class="form-control" id="fullName" v-model="formData.fullName" required>
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email" required>
                </div>

                <div class="row mb-3">
                  <div class="">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="phone" v-model="formData.phone" required>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label d-block">Do you own your own home?</label>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="ownYes" value="yes" v-model="formData.ownsHome">
                    <label class="form-check-label" for="ownYes">Yes</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="ownNo" value="no" v-model="formData.ownsHome">
                    <label class="form-check-label" for="ownNo">No</label>
                  </div>
                </div>

                <!-- <div class="form-text mb-3">
                  By clicking below, I authorize Cascade to call me via recorded message, text message, and/or push notification. I understand these calls may be generated using an automated technology and that consent is not required to make a purchase. You can opt out anytime. You can agree to our Terms of Service.
                </div> -->

                <button type="submit" class="btn btn-primary w-100">Start your quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-2">Why Choose Us</h2>
        <p class="text-center text-muted mb-5">We make going solar simple, affordable, and hassle-free</p>
  
        <div class="row g-4">
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">euro</i>
              </div>
              <div>
                <h5 class="mb-2">Best Value Guaranteed</h5>
                <p class="text-muted mb-0">Access exclusive deals from Ireland's leading solar installers in your area.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">verified</i>
              </div>
              <div>
                <h5 class="mb-2">SEAI Certified</h5>
                <p class="text-muted mb-0">Work with fully registered and approved SEAI solar installation experts.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">format_list_bulleted</i>
              </div>
              <div>
                <h5 class="mb-2">Compare Options</h5>
                <p class="text-muted mb-0">Receive multiple competitive quotes from vetted installers in your area.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">euro_symbol</i>
              </div>
              <div>
                <h5 class="mb-2">Zero Cost Service</h5>
                <p class="text-muted mb-0">Our quote comparison service is completely free for homeowners.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">thumb_up</i>
              </div>
              <div>
                <h5 class="mb-2">No Commitments</h5>
                <p class="text-muted mb-0">Review quotes with no pressure - you're free to choose what works best.</p>
              </div>
            </div>
          </div>
  
          <div class="col-md-4">
            <div class="d-flex gap-3">
              <div class="flex-shrink-0">
                <i class="material-icons text-primary">schedule</i>
              </div>
              <div>
                <h5 class="mb-2">Quick & Easy</h5>
                <p class="text-muted mb-0">Save time with our streamlined process for going solar.</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="text-center mt-5">
          <a href="/get-quote">
            <button class="btn btn-sm btn-primary btn-lg px-4">Get Started Today</button>
          </a>
        </div>
      </div>
    </section>
  
    
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-2">We Cover All Counties</h2>
        <p class="text-center text-muted mb-5">We have trusted Solar PV Installers in your county. Click on any county to get started.</p>
        
        <div class="row justify-content-center g-3">
          <div v-for="county in counties" :key="county" class="col-md-3 col-sm-6">
            <a :href="`/?county=${county}`" class="text-decoration-none">
              <div class="card border-0 bg-white h-100 hover-shadow transition">
                <div class="card-body text-center py-3">
                  <span class="text-dark">Solar Panels {{ county }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  
    
  
      <!-- Testimonials Section -->
      <section class="py-5">
        <div class="container">
          <div style="max-width: 400px">
            <h2  class=" mt-2 mb-4 ">Easy Process. Happy Customers.</h2>
          </div>
          
          <div class="bg-light rounded-3 p-5 position-relative">
            <div class="text-center">
              <div class="d-flex justify-content-center mb-3">
                <div class="text-primary">
                  <i v-for="star in 5" :key="star" class="bi bi-star-fill"></i>
                </div>
              </div>
              <p class="fs-3 mb-3">{{ testimonials[currentTestimonialIndex].content }}</p>
              <p class="text-muted mb-4">{{ testimonials[currentTestimonialIndex].name }}, {{ testimonials[currentTestimonialIndex].location }}</p>
              
              <div class="d-flex justify-content-center align-items-center gap-3">
                <button class="btn btn-outline-dark rounded-circle p-2" @click="previousTestimonial" style="width: 40px; height: 40px;">
                  <i class="bi bi-arrow-left"></i>
                </button>
                <div class="d-flex gap-2">
                  <span v-for="(_, index) in testimonials" :key="index" 
                        class="dot" 
                        :class="{ 'active': index === currentTestimonialIndex }"
                        @click="currentTestimonialIndex = index"></span>
                </div>
                <button class="btn btn-outline-dark rounded-circle p-2" @click="nextTestimonial" style="width: 40px; height: 40px;">
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  
      <!-- Articles Section -->
      <section class="py-5">
        <div class="container">
          <div class="row g-4">
            <div v-for="(article, index) in articles" :key="index" class="col-md-6 col-lg-3">
              <div class="article-card">
                <div class="article-content  p-2" 
                     :style="{ backgroundImage: `url(${article.image})` }">
                  <a href="" class="text-dark text-decoration-none">
                    <div class="article-text d-flex align-items-end bg-white p-3 ">
                      <h5 class="card-title text-dark mb-0">{{ article.title }}</h5>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>



</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const county = computed(() => {
  const countyParam = route.query.county as string;
  return counties.includes(countyParam) ? countyParam : null;
});

const counties = [
  'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin', 'Galway',
  'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick',
  'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly',
  'Roscommon', 'Sligo', 'Tipperary', 'Waterford', 'Westmeath',
  'Wexford', 'Wicklow'
];

const steps = [
  'Learn about the incentives in your state',
  'Find your ideal panel',
  'Get your cost to go solar today'
];

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  ownsHome: null
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
};

const testimonials = [
  {
    name: 'Siobhán',
    location: 'Galway, County Galway',
    content: 'Very happy with the entire process. The team was professional and explained everything clearly. I’m already seeing savings on my electricity bill.'
  },
  {
    name: 'Eoin',
    location: 'Tralee, County Kerry',
    content: 'Smooth experience from start to finish. The installers were courteous and efficient. I’d definitely recommend them to others considering solar.'
  },
  {
    name: 'Aisling',
    location: 'Ennis, County Clare',
    content: 'I was unsure at first, but I’m so glad I made the switch. The whole process was easy and the support team answered all my questions.'
  },
  {
    name: 'Ronan',
    location: 'Letterkenny, County Donegal',
    content: 'Great service and even better results. The panels were installed faster than I expected and they look fantastic on the roof.'
  },
  {
    name: 'Niamh',
    location: 'Dundalk, County Louth',
    content: 'Professional, friendly, and honest. The team walked me through the entire solar process and made it stress-free.'
  },
  {
    name: 'Cillian',
    location: 'Kilkenny, County Kilkenny',
    content: 'Excellent job from the team. The system is working perfectly and I feel good knowing I’m helping the environment.'
  },
  {
    name: 'Aoife',
    location: 'Sligo Town, County Sligo',
    content: 'Top-notch service. They were transparent about the costs and benefits, and the system is already performing beyond expectations.'
  },
  {
    name: 'Darragh',
    location: 'Cork City, County Cork',
    content: 'Highly recommend! Installation was quick, and the savings are very real. Great investment overall.'
  }
];


const currentTestimonialIndex = ref(0);

const previousTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + testimonials.length) % testimonials.length;
};

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.length;
};

const articles = [
  {
    title: 'What Size Solar System Do I Need for My Home?',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
  },
  {
    title: 'What is the Best Solar Panel for My Roof?',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
  },
  {
    title: '5 Things to Know Before Installing Solar Panels on Your Home',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80'
  },
  {
    title: 'How Long Do Solar Panels Last? (+Maintenance Tips)',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  }
];

const faqs = [
  {
    question: 'How does your service work?',
    answer: 'We collect information about your home and energy needs, then match you with verified solar installers in your area. You’ll receive quotes directly from them — no middlemen, no pressure.'
  },
  {
    question: 'Is this service really free?',
    answer: 'Yes, 100% free for homeowners and businesses. We’re paid by solar installers who want to connect with serious customers like you.'
  },
  {
    question: 'Do I have to commit to anything after submitting my information?',
    answer: 'Not at all. Getting matched with installers and receiving quotes is completely obligation-free. You choose whether or not to proceed with any provider.'
  },
  {
    question: 'How long does it take to get quotes?',
    answer: 'Most users hear from installers within 24–48 hours after submitting their information.'
  }
];

</script>

<style scoped>

.hero-section-image{
  position: relative;
  background-image: url('https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9EbzZqOFVMY1JiSEtDYXNQQmNmSi5qcGcifQ:sunrun:tAHXMLcRVBx-8FymD7oQMYwMxW2HYF40Udl8mDVrQC0?width=1440&format=webp');
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.hero-section-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-section-image > * {
  position: relative;
  z-index: 2;
}

.accordion-button:not(.collapsed) {
  background-color: white;
  color: black;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0, 0, 0, 0.125);
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ff8c00'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.article-card {
  height: 100%;
}

.article-content {
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
}


.article-text {
  width: calc(100% - 30px);
  margin-bottom: 15px;
}

button{
  border-radius: 1px !important;
}

.form-control {
  border-radius: 1px;
  padding: 0.75rem;
}

.form-control:focus {
  border-color: #ff8c00;
  box-shadow: 0 0 0 0.25rem rgba(255, 140, 0, 0.25);
}

.step-number {
  z-index: 1;
}
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #dee2e6;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .dot.active {
    background-color: #212529;
  }
</style>