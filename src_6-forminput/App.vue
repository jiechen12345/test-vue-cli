<!-- app.vue -->
<template>
  <div id="app" class="container">
    <form id="bookingForm" @submit.prevent="submitForm" class="needs-validation" novalidate autocomplete="off">
      <div class="row">
        <div class="col-12 col-md-6">
          <FormInputComponent label="User" id="inputUser" name="user" type="text" placeholder="Your name" required />
        </div>
        <div class="col-12 col-md-6">
          <FormInputComponent label="Email" id="inputEmail" name="email" type="email" placeholder="Enter email"
            required />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <FormInputComponent label="Phone" id="inputPhone" name="phone" type="tel" placeholder="099xxxxxxx" required />
        </div>
        <div class="col-12 col-md-6">
          <MultiTextComponent></MultiTextComponent>
        </div>
        <div class="col-12 col-md-6">
          <MultiTextComponent></MultiTextComponent>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <FormInputComponent label="Date" id="inputDate" name="date" type="date" placeholder="YYYY/MM/DD" required />
        </div>
      </div>

      <button class="btn btn-primary btn-block col-lg-2" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import FormInputComponent from './components/FormInputComponent';
import MultiTextComponent from './components/MultiTextComponent';

export default {
  name: 'App',
  components: {
    FormInputComponent,
    MultiTextComponent
  },
  methods: {
    submitForm() {
      const form = document.getElementById('bookingForm');
      if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        const invalidElements = form.querySelectorAll(':invalid');
        invalidElements.forEach(element => {
          element.dispatchEvent(new Event('invalid', { bubbles: true }));
        });
      } else {
        console.log('Form submitted');
      }
    }
  }
};
</script>

<style>
.container {
  padding-top: 20px;
}

.row {
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

/*redio*/
.custom-radio-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.custom-radio-btn input[type="radio"] {
  display: none;
}

.custom-radio-btn.selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
