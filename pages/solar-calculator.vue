<template>
  <div class="min-vh-100 bg-white py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h2 class="mb-2">Solar Savings Calculator</h2>
            <p class="text-muted">Estimate your potential solar savings and system size based on your specific needs</p>
          </div>

          <!-- Calculator Form -->
          <div class="bg-light rounded-3 p-4 p-md-5">
            <form @submit.prevent="calculateResults" class="row g-4">
              <div class="col-md-6">
                <label class="form-label">Roof Size (m²)</label>
                <input 
                  v-model.number="roofSize" 
                  type="number" 
                  class="form-control" 
                  required
                  min="1"
                  placeholder="e.g. 20"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Roof Orientation</label>
                <select v-model="orientation" class="form-select" required>
                  <option value="">Select orientation</option>
                  <option value="south">South</option>
                  <option value="southeast">Southeast</option>
                  <option value="southwest">Southwest</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                  <option value="flat">Flat</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Annual Electricity Usage (kWh)</label>
                <input 
                  v-model.number="usage" 
                  type="number" 
                  class="form-control"
                  required
                  min="1"
                  placeholder="e.g. 4200"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label">Battery Storage</label>
                <select v-model="battery" class="form-select" required>
                  <option value="">Select option</option>
                  <option :value="true">Yes</option>
                  <option :value="false">No</option>
                </select>
              </div>

              <div class="col-12">
                <label class="form-label">Are you home during the day?</label>
                <select v-model="daytimeOccupancy" class="form-select" required>
                  <option value="">Select option</option>
                  <option :value="true">Yes</option>
                  <option :value="false">No</option>
                </select>
              </div>

              <div class="col-12 text-center mt-4">
                <button type="submit" class="btn btn-primary btn-lg px-5">Calculate Savings</button>
              </div>
            </form>

            <!-- Results Section -->
            <Transition name="fade">
              <div v-if="showResults && hasCalculated" class="mt-5 pt-4 border-top">
                <h3 class="h4 mb-4 text-center">Your Solar Estimate</h3>
                
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="bg-white p-4 rounded-3 h-100">
                      <h4 class="h5 mb-3">System Details</h4>
                      <ul class="list-unstyled mb-0">
                        <li class="mb-2"><strong>System Size:</strong> {{ systemSize.toFixed(2) }} kW</li>
                        <li class="mb-2"><strong>Annual Generation:</strong> {{ annualGeneration.toFixed(0) }} kWh</li>
                        <li class="mb-2"><strong>Self-Consumption Rate:</strong> {{ (selfConsumptionRate * 100).toFixed(0) }}%</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="col-md-6">
                    <div class="bg-white p-4 rounded-3 h-100">
                      <h4 class="h5 mb-3">Financial Overview</h4>
                      <ul class="list-unstyled mb-0">
                        <li class="mb-2"><strong>Annual Savings:</strong> €{{ savings.toFixed(0) }}</li>
                        <li class="mb-2"><strong>SEAI Grant:</strong> €{{ seaiGrant.toFixed(0) }}</li>
                        <li class="mb-2"><strong>Net Cost:</strong> €{{ netCost.toFixed(0) }}</li>
                        <li class="mb-2"><strong>Payback Period:</strong> {{ payback.toFixed(1) }} years</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <p class="text-muted small mb-4">These calculations are estimates based on average Irish solar conditions and current electricity rates.</p>
                  <a href="/get-quote" class="btn btn-outline-dark px-4">Get a Detailed Quote</a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const roofSize = ref('')
const orientation = ref('')
const usage = ref('')
const battery = ref('')
const daytimeOccupancy = ref('')
const hasCalculated = ref(false)

const calculateResults = () => {
  hasCalculated.value = true
}

// System size in kW (1 panel = 1.7 m², each ≈ 0.35kW)
const systemSize = computed(() => {
  const panelCount = roofSize.value / 1.7
  return panelCount * 0.35
})

// Orientation efficiency adjustment (e.g., South = 100%)
const orientationFactor = computed(() => {
  const map = {
    south: 1.0,
    southeast: 0.95,
    southwest: 0.95,
    east: 0.85,
    west: 0.85,
    flat: 0.9
  }
  return map[orientation.value] || 1
})

// Annual generation estimate (Ireland avg = 950 kWh/kW/year)
const annualGeneration = computed(() => {
  return systemSize.value * 950 * orientationFactor.value
})

// Self-consumption rate
const selfConsumptionRate = computed(() => {
  if (battery.value) return 0.75
  if (daytimeOccupancy.value) return 0.45
  return 0.30
})

// Savings based on €0.35/kWh
const savings = computed(() => {
  return annualGeneration.value * selfConsumptionRate.value * 0.35
})

// Cost estimate (€1,700/kW)
const cost = computed(() => {
  return systemSize.value * 1700
})

// SEAI grant calculation
const seaiGrant = computed(() => {
  const size = systemSize.value
  if (size <= 2) return size * 900
  if (size <= 4) return 2 * 900 + (size - 2) * 300
  return 2400
})

// Final cost after grant
const netCost = computed(() => {
  return cost.value - seaiGrant.value
})

// Payback period
const payback = computed(() => {
  return savings.value > 0 ? netCost.value / savings.value : 0
})

const showResults = computed(() => roofSize.value > 0 && usage.value > 0)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.form-control,
.form-select {
  border: 1px solid #dee2e6;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
}

.hover-shadow {
  transition: box-shadow 0.3s ease;
}

.hover-shadow:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
