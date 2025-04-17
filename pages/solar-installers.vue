<template>
    <div class="container py-5">
        <div class="pb-4" style="max-width: 600px">

            <h2  class="mt-2 mb-4">Join Our Network of Solar Installers</h2>
            <p class="lead fs-6 mb-4">Partner with us to grow your business and help more homes transition to clean energy.</p>
        </div>
        <div class="row g-4">
            <div class="col-md-5">
                <div class="bg-light p-4 rounded">
                    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="companyName" class="form-label">Company Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="companyName" 
                                v-model="formData.companyName" 
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label for="contactPerson" class="form-label">Contact Person</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="contactPerson" 
                                v-model="formData.contactPerson" 
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="email" 
                                v-model="formData.email" 
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                class="form-control" 
                                id="phone" 
                                v-model="formData.phone" 
                                required
                            >
                        </div>

                        <button type="submit" class="btn btn-primary w-100">Submit Application</button>
                    </form>
                </div>
            </div>
            <div class="col-md-7">
                 <div class="position-relative">
                    <img 
                        src="https://solar.advinfra.com/wp-content/uploads/sites/8/2025/01/installer-1-1024x683.webp" 
                        alt="Solar panels on a modern home" 
                        class="w-100 rounded-4" 
                        style="height: 600px; object-fit: cover;"
                    >
                    <div class="position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                         style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                        <div class="d-flex align-items-center gap-2">
                            <i class="bi bi-shield-check fs-4"></i>
                            <div>
                                <p class="mb-0"><strong>Trusted by Irish Homeowners</strong></p>
                                <p class="mb-0 small">Join hundreds of solar installers</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: ''
});

const submitForm = () => {
    // Handle form submission
    console.log('Form submitted:', formData.value);
};
</script>

<style scoped>

</style>