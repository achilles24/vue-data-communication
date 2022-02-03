<template>
  <form v-on:submit="submitForm">
    <div>
      <label for="emp-id">Id:&nbsp;</label>
      <input type="number" id="emp-id" v-model="id" />
    </div>
    <div>
      <label for="emp-name">Name:&nbsp;</label>
      <input type="text" id="emp-name" v-model="name" />
    </div>
    <div>
      <label for="emp-tel">Phone No:&nbsp;</label>
      <input type="tel" id="emp-tel" v-model="contact" />
    </div>
    <div>
      <label for="emp-mail">Mail:&nbsp;</label>
      <input type="text" id="emp-mail" v-model="mail" />
    </div>
    <div><span></span><button type="submit">Submit</button></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      contact: "",
      mail: "",
    };
  },
};
</script>
<style>
form {
  position: relative;
  margin: 4px;
  background-color: aqua;
  padding: 16px;
  width: 400px;
}
div {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
}
</style>