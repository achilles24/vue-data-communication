<template>
  <section>
    <span>Employee Count:&nbsp;</span>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        <employee-detail></employee-detail>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      employees: [
        {
          id: 1,
        },
      ],
    };
  },
};
</script>