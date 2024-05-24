<template>
  <div class="withdrawal-wrapper">
  <div class="withdrawal-container">
    <header>
      <img src="assets/logo.png" alt="Die Lansemann Bank Logo" class="logo" />
      <h1>Geld abheben</h1>
    </header>
      <form @submit.prevent="handleWithdrawal">
        <div class="form-group">
          <label for="balance">Kontostand</label>
          <input type="text" id="balance" :value="result?.card_money" disabled>
        </div>
        <div class="form-group">
          <label for="amount">So viel möchte ich abheben:</label>
          <input type="number" id="amount" v-model="amount" required />
        </div>
        <button type="submit" class="btn-submit">Abheben</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Axios } from 'axios';

const accountNumber = ref('')
const amount = ref('')
const result = ref(null)
const error = ref(null)
const nuxtApp = useNuxtApp()

const handleWithdrawal = () => {
  // Logic for handling withdrawal
  alert(`Withdrawing ${amount.value} from the account with balance ${result.value.card_money}`)
}

onMounted(async () => {
  try {
    const card = '78654321'; // Replace with the actual card value you want to check
    const response = await nuxtApp.$axios.get(`/insert_card.php?card=${card}`)
    result.value = response
  } catch (err) {
    error.value = err.response ? err.response.data : err.message
  }
})

</script>

<style scoped>

textarea{
  font-family: 'Grundschrift';
}

.withdrawal-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Grundschrift'; /* Anwendung der Grundschrift */
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 100px;
  margin-bottom: 10px;
}

h1 {
  color: #003366; /* Blau aus dem Logo */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #003366; /* Blau aus dem Logo */
  font-family: 'Grundschrift';
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Grundschrift';
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #ff6600; /* Orange aus dem Logo */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Grundschrift';
}

.btn-submit:hover {
  background-color: #cc5200; /* Dunkleres Orange für Hover */
}
</style>