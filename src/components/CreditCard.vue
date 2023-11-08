<template>
  <main>
    <div class="left-panel"></div>
    <div class="right-panel">
      <form action="#">
        <div class="input-content">
          <label for="Cardname">Card Holder Name</label>
          <input type="text" name="Cardname" maxlength="20" />
          <div class="error"></div>
        </div>
        <div class="input-content">
          <label for="">Card Number</label>
          <input type="text" required maxlength="16" />
          <div class="error"></div>
        </div>
        <div class="flexbox">
          <div class="input">
            <label for="">EXP.DATE(MM/YY)</label>
            <input
              type="text"
              class="exp-input"
              placeholder="09"
              maxlength="2"
            />
            <input
              type="text"
              class="exp-input"
              placeholder="YY"
              maxlength="2"
            />
            <label for="">CVC</label>
            <input type="contact" class="cvc-input" placeholder="e.g.123" />
          </div>
        </div>

        <button>Confirm</button>
      </form>
    </div>
  </main>
  <div class="cardNum">
    <div class="circles">
      <div class="circle"></div>
      <div class="smallcircle"></div>
    </div>
    <div class="nameDate">
      <div><p class="card">Num</p></div>
      <div class="nameYear">
        <p>The lions den</p>
        <p>The Heirs</p>
      </div>
    </div>
  </div>
  <div class="cardCvc"><p>Dom</p></div>
</template>

<script setup>
// let SignUp = () => {};
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
  top: 32%;
  left: 50%;
  transform: translate("-50%", "-50%");
  padding: 40px;
  gap: 60%;
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

form input:active {
  border: none;
}

.flexbox {
  display: flex;
  flex-direction: column;
}

.input {
  margin-top: 22px;
  display: flex;
  flex-flow: wrap;
}

.input input {
  width: 15%;
  margin-right: 10px;
}

label {
  text-transform: uppercase;
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
  width: 30%;
  height: 30%;
  position: absolute;
  top: 15%;
  left: 10%;
  border-radius: 10px;
}

.circles {
  display: flex;
  /* background-color: red; */
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
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 10px;
  /* background-color: green; */
}

.nameYear {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  /* background-color: red; */
}

.cardCvc {
  background-image: url("../assets/bg-card-back.png");
  width: 30%;
  height: 30%;
  position: absolute;
  top: 48%;
  left: 15%;
  border-radius: 10px;
}

.cardCvc p {
  margin-top: 28%;
  margin-left: 88%;
}
</style>
