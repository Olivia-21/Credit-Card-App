<template>
  <div>
    <main>
      <div class="left-panel"></div>
      <div class="right-panel">
        <form action="#" id="myForm">
          <div class="form" v-if="showForm">
            <div class="input-content">
              <label for="Cardname">CardHolder Name</label>
              <input
                type="text"
                placeholder="e.g Jane Appleseed"
                id="CardName"
                maxlength="20"
                v-model="cardHolderName"
                required
              />
              <div class="error"></div>
            </div>
            <div class="input-content">
              <label for="">Card Number</label>
              <input
                id="cardNum"
                type="text"
                placeholder=" e.g 1234 5678 9123 0000"
                required
                maxlength="16"
                v-model="CardNumber"
              />
              <div class="error">{{ cardNumError }}</div>
            </div>
            <div class="flexbox">
              <div class="input">
                <label for="">Exp.date</label>
                <input
                  type="text"
                  id="month"
                  class="exp-input"
                  placeholder="09"
                  maxlength="2"
                  required
                  @input="errorMessages"
                  v-model="expMonth"
                />
                <div class="error">{{ monthError }}</div>
              </div>
              <div class="input">
                <label for="">(mm/yy)</label>
                <input
                  type="text"
                  id="year"
                  class="exp-input"
                  placeholder="YY"
                  maxlength="2"
                  @input="errorMessages"
                  required
                  v-model="expYear"
                />
                <div class="error">{{ yearError }}</div>
              </div>
              <div class="inputcvc">
                <label for="">CVC</label>
                <input
                  type="number"
                  id="cvc"
                  class="cvc-input"
                  placeholder="e.g.123"
                  maxlength="3"
                  @input="errorMessages"
                  required
                  v-model="CvcNumber"
                />
                <div class="error">{{ cvcError }}</div>
              </div>
            </div>

            <button @click="SignUp" type="submit">Confirm</button>
          </div>
        </form>
        <CompleteState v-if="showThankYou" />
      </div>
    </main>
    <div class="cardNum">
      <div class="circles">
        <div class="circle"></div>
        <div class="smallcircle"></div>
      </div>
      <div class="nameDate">
        <div>
          <p class="card">{{ outputCardNum }}</p>
        </div>
        <div class="nameYear">
          <p id="Name">{{ outputCardHolderName }}</p>
          <p class="monthyear">{{ outputMonth }}/{{ outputYear }}</p>
        </div>
      </div>
    </div>
    <div class="cardCvc">
      <p>{{ outputCvc }}</p>
    </div>
  </div>
</template>

<script setup>
import CompleteState from "../components/CompleteState.vue";
import { ref } from "vue";
let cardHolderName = ref("");
let CardNumber = ref("");
let CvcNumber = ref("");
let expYear = ref("");
let expMonth = ref("");
let outputMonth = ref("");
let outputYear = ref("");
let outputCardNum = ref("");
let outputCardHolderName = ref("");
let outputCvc = ref("");
let monthError = ref("");
let yearError = ref("");
let cvcError = ref("");
let cardNumError = ref("");
let showForm = ref(true);
let showThankYou = ref(false);
let SignUp = () => {
  let isNum = /^\d+$/.test(CardNumber.value);
  let isString = /[a-zA-Z]/.test(CardNumber.value);
  let month = Number(expMonth.value);
  let year = Number(expYear.value);
  if (
    CardNumber.value === "" &&
    expMonth.value === "" &&
    expYear.value === ""
  ) {
    document.getElementById("cardNum").style.border = "1px solid red";
    document.getElementById("year").style.border = "1px solid red";
    document.getElementById("month").style.border = "1px solid red";
  } else if (isNum && isString) {
    cardNumError = "Wrong format, numbers only";
    document.getElementById("cardNum").style.border = "1px solid red";
  } else if (isString) {
    cardNumError = "Wrong format, numbers only";
    document.getElementById("cardNum").style.border = "1px solid red";
  } else if (month === "" || month === null) {
    monthError = "can't be blank";
    document.getElementById("month").style.border = "1px solid red";
  } else if (year === "" || year === null) {
    yearError = "can't be blank";
    document.getElementById("year").style.border = "1px solid red";
  } else {
    // Format the card number into groups of 4 digits separated by spaces
    let cardNumber = CardNumber.value.replace(/\D/g, ""); // Remove non-digits
    let formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

    // Assign the formatted card number to the output field
    outputCardNum.value = formattedCardNumber.trim();

    // Assign other values and update the UI
    outputCardHolderName.value = cardHolderName.value;
    outputMonth.value = expMonth.value;
    outputYear.value = expYear.value;
    outputCvc.value = CvcNumber.value;
    showForm = false;
    showThankYou = true;
  }
};
</script>

<style>
main {
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
}

.left-panel {
  background-image: url("../assets/leftimage.png");
  width: 30%;
  height: 100vh;
}

.right-panel {
  background-color: hsl(0, 0%, 100%);
  width: 70%;
  height: 100vh;
}

form {
  /* background: yellow; */
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate("-50%", "-50%");
  padding: 40px;
  width: 40%;
}

form div {
  display: flex;
  flex-direction: column;
}

form .input-content {
  margin-bottom: 10px;
}

form input {
  width: 70%;
  padding: 10px;
  border: 1px solid hsl(249, 99%, 64%);
  border-radius: 6px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.flexbox {
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 10px;
}
.flexbox div {
  display: flex;
}

.input {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 20%;
}

.input input {
  width: 100%;
  padding: 10px;
  margin-right: 10px;
}

.inputcvc input {
  width: 100%;
}

label {
  text-transform: uppercase;
  font-size: smaller;
  margin-bottom: 3px;
}

button {
  width: 70%;
  background-color: hsl(278, 68%, 11%);
  color: hsl(0, 0%, 100%);
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
}

.cardNum {
  background-image: url("../assets/bg-card-front.png");
  background-repeat: no-repeat;
  width: 32%;
  height: 34%;
  background-repeat: no-repeat;
  position: absolute;
  top: 12%;
  left: 10%;
  border-radius: 10px;
}

.error {
  color: hsl(0, 100%, 66%);
  font-size: x-small;
}

.circles {
  display: flex;
  margin: 20px 0 60px 20px;
  gap: 10px;
}

.cardNum .circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
}

.cardNum .smallcircle {
  width: 15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 50%;
  margin-top: 8px;
}
.nameDate {
  /* background-color: green; */
  margin-top: 19%;
  margin-left: 4%;
}
.nameDate p {
  color: hsl(0, 0%, 100%);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin: 8px;
  /* background-color: red; */
  /* margin-bottom: 30px; */
}

.nameYear {
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
}

.nameYear .monthyear {
  margin-right: 35px;
}

.cardCvc {
  background-image: url("../assets/bg-card-back.png");
  width: 32%;
  height: 34%;
  position: absolute;
  top: 50%;
  left: 15%;
  background-repeat: no-repeat;
  border-radius: 10px;
}

.cardCvc p {
  margin-top: 25%;
  margin-left: 80%;
  color: white;
  letter-spacing: 0.1rem;
  /* background-color: red; */
}

@media screen and (max-width: 600px) {
  main {
    display: flex;
    flex-direction: column;
  }
}
</style>
