<template>
  <div class="withdrawal-wrapper">
  <div class="withdrawal-container">
    <header>
      <img src="assets/logo.png" alt="Die Lansemann Bank Logo" class="logo" />
      <h1>Geld abheben</h1>
    </header>
    <form @submit.prevent="handleWithdrawal">
      <div class="form-group">
        <label for="account">Kontostand</label>
        <input type="text" id="balance" :value="currentBalance" disabled>
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
import { ref } from 'vue'

const accountNumber = ref('')
const amount = ref('')

const handleWithdrawal = () => {
  // Logic for handling withdrawal
  alert(`Withdrawing ${amount.value} from account ${accountNumber.value}`)
}
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
