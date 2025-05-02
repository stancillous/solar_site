<template>
    <div>

         <form @submit.prevent="submitForm" class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="full_name" class="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="full_name" 
                                    :disabled="loading"
                                    v-model="formData.full_name"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    v-model="formData.email_address"
                                    required
                                    :disabled="loading"
                                >
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    class="form-control" 
                                    id="phone" 
                                    :disabled="loading"
                                    v-model="formData.phone_number"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="address" class="form-label">Home Address</label>
                                <input 
                                    type="text" 
                                    :disabled="loading"
                                    class="form-control" 
                                    id="address" 
                                    v-model="formData.home_address"
                                    required
                                    placeholder="Street address"
                                >
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">County</label>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    id="address" 
                                    :disabled="loading"
                                    v-model="formData.county"
                                    required
                                    placeholder="Enter your county"
                                >
                            </div>

                            <!-- <button type="submit" class="btn btn-primary w-100">Get My Quote</button> -->
                             <button type="submit" class="btn btn-primary w-100 d-flex justify-content-center align-items-center" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            {{ loading ? 'Submitting...' : 'Get Quote' }}
                        </button>
                            <p class="form-text text-center mt-3 mb-0">
                                We respect your privacy and will never share your information.
                            </p>
                        </form>

    </div>
</template>

<script setup lang="ts">
// import axios from 'axios';
import { axiosInstance } from '@/utils';

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast({
    position: 'top-right',
    duration: 10000
});
// let instance = $toast.success('You did it!');

const loading = ref(false);

const formData = ref({
    full_name: '',
    email_address: '',
    phone_number: '',
    home_address: '',
    county: ''
});

const submitForm = async () => {
    try {
        // make sure every field in formData is present
        if (!formData.value.full_name || !formData.value.email_address || !formData.value.phone_number || !formData.value.home_address || !formData.value.county) {
            $toast.error('Please fill out all fields.');
            return;
        }
        loading.value = true;
        const response = await axiosInstance.post('http://localhost:8000/solar-ireland/api/client', formData.value);
        console.log('Form submitted successfully:', response.data);
        $toast.success('Form submitted successfully! Please check your email for a response.');
        formData.value = {
            full_name: '',
            email_address: '',
            phone_number: '',
            home_address: '',
            county: ''
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