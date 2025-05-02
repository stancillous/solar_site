<template>
    <div class="container py-5">
        <div class="pb-4" style="max-width: 600px">

            <h2  class="mt-2 mb-4">Join our network of solar installers</h2>
            <p class="lead fs-6 mb-4">Partner with us to grow your business and help more homes transition to clean energy.</p>
        </div>
        <div class="row g-4">
            <div class="col-md-5">
                <div class="bg-light p-4 rounded">
                    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                        <div class="mb-3">
                            <label for="company_name" class="form-label">Company Name</label>
                            <input 
                                type="text" 
                                :disabled="loading"
                                class="form-control" 
                                id="company_name" 
                                v-model="formData.company_name" 
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label for="contact_person" class="form-label">Contact Person</label>
                            <input 
                                type="text" 
                                :disabled="loading"
                                class="form-control" 
                                id="contact_person" 
                                v-model="formData.contact_person" 
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input 
                                type="email" 
                                :disabled="loading"
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
                                :disabled="loading"
                                class="form-control" 
                                id="phone" 
                                v-model="formData.phone_number" 
                                required
                            >
                        </div>

                        <!-- @solar-installers.vue#L56-57 add loading spinner when loading is still true. and disable edits on the input fields and the button. have a loading spinner type thing on the button
 -->
                        <!-- <button type="submit" class="btn btn-primary w-100" :disabled="loading">Submit Application</button> -->
                        <button type="submit" class="btn btn-primary w-100 d-flex justify-content-center align-items-center" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            {{ loading ? 'Submitting...' : 'Submit Application' }}
                        </button>

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
import axios from 'axios';
import { axiosInstance } from '@/utils';

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const loading = ref(false)
const $toast = useToast({
    position: 'top-right',
    duration: 10000
});
const formData = ref({
    company_name: '',
    contact_person: '',
    email: '',
    phone_number: ''
});

const submitForm = async () => {
    try {
        // make sure every field in formData is present
        if (!formData.value.company_name || !formData.value.contact_person || !formData.value.email || !formData.value.phone_number) {
            $toast.error('Please fill out all fields.');
            return;
        }
        loading.value = true;
        const response = await axiosInstance.post('/installer', formData.value);
        console.log('Form submitted successfully:', response.data);
        $toast.success('Form submitted successfully! Please check your email for a response.');
        formData.value = {
            company_name: '',
            contact_person: '',
            email: '',
            phone_number: ''
        };
    } catch (error: unknown) {
        const errorMessage = error.response?.data?.message || 'Error submitting form';
        console.error('Error submitting form:', error);
        $toast.error(errorMessage);
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>

</style>