<template>
  <div class="complete">
    <div class="image">
      <img :src="Image" alt="completeicon" />
    </div>
    <div class="text">
      <h3>Thank You!</h3>
      <p>{{ msg }}</p>
    </div>
    <button class="butt">Continue</button>
  </div>
</template>

<script setup>
import Image from "../assets/iconcomplete.svg";
let msg = "We've added your card details";
</script>

<style>
.complete {
  /* background-color: red; */
  position: relative;
  width: 50%;
  top: 30%;
  left: 28%;
  /* background-color: red; */
  /* padding: 30px; */
}
.image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.complete img {
  width: 60px;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 15px;
}

.butt {
  background-color: hsl(278, 68%, 11%);
  color: white;
  margin-left: 15%;
}
</style>
