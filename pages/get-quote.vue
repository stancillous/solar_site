<template>
    <div class="container py-5">
        <div class="row g-5 align-items-center">
            <!-- Form Column -->
            <div class="col-lg-6 order-lg-1">
                <div class="pe-lg-4">
                    <h2 class="display-6 mt-2 mb-4 lh-sm fw-normal">Get Your Free Solar Quote</h2>
                    <p class="lead fs-6 mb-4">Fill out the form below and we'll get back to you with a customized solar solution for your home.</p>

                    <div class="bg-light p-4 rounded">
                        <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="fullName" 
                                    v-model="formData.fullName"
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

                            <div class="mb-3">
                                <label for="address" class="form-label">Home Address</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="address" 
                                    v-model="formData.address"
                                    required
                                    placeholder="Street address"
                                >
                            </div>

                            <div class="mb-4">
                                <label class="form-label d-block">Do you own your home?</label>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="ownerStatus" 
                                        id="owner" 
                                        value="yes"
                                        v-model="formData.ownsHome"
                                        required
                                    >
                                    <label class="form-check-label" for="owner">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="ownerStatus" 
                                        id="renter" 
                                        value="no"
                                        v-model="formData.ownsHome"
                                    >
                                    <label class="form-check-label" for="renter">No</label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Get My Quote</button>

                            <p class="form-text text-center mt-3 mb-0">
                                We respect your privacy and will never share your information.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Image Column -->
            <div class="col-lg-6  order-lg-2">
                <div class="position-relative">
                    <img 
                        src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9QZEZFVWs3Z25IR2JxbTg2b2RFeC5qcGcifQ:sunrun:xtSwgw13r1fM9u0gJPUdGRAhAvQySdebjXG1PoU022E?width=1680&format=webp" 
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
                                <p class="mb-0 small">Join thousands of satisfied customers</p>
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
    fullName: '',
    email: '',
    phone: '',
    address: '',
    ownsHome: null
});

const submitForm = () => {
    // Handle form submission
    console.log('Form submitted:', formData.value);
    // Here you would typically send the data to your backend
};
</script>

<style scoped>
.form-control:focus {
    box-shadow: none;
    border-color: var(--bs-primary);
}

.form-check-input:checked {
    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
}

.form-check-input:focus {
    box-shadow: none;
    border-color: var(--bs-primary);
}
</style>