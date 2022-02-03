import { createApp } from "vue";
import App from "./App.vue";
import EmployeeForm from "./component/EmployeeForm";
import EmployeeList from "./component/EmployeeList";
import EmployeeDetail from "./component/EmployeeDetail";

const app = createApp(App);
app.component("employee-form", EmployeeForm);
app.component("employee-list", EmployeeList);
app.component("employee-detail", EmployeeDetail);
app.mount("#app");
