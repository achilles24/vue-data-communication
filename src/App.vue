<template>
  <section>
    <h1>{{ title }}</h1>
    <employee-form></employee-form>
    <employee-list></employee-list>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Employee Form",
    };
  },
};
</script>
<style>
section {
  text-align: center;
}
</style>