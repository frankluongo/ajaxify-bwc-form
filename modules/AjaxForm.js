import serialize from "./serialize";

export default class AjaxForm {
  constructor() {
    this.observeForm();
  }

  observeForm() {
    this.estimateForm.addEventListener(
      "submit",
      this.handleSubmission.bind(this)
    );
  }

  handleSubmission(event) {
    event.preventDefault();
    this.sendFormData();
  }

  sendFormData() {
    try {
      fetch(this.formData.action, {
        body: this.formData.formValues,
        method: this.formData.method
      })
        .then(response => {
          return response;
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  get estimateForm() {
    return document.querySelector('[data-js="EstimateForm"]');
  }

  get formData() {
    return {
      action: this.estimateForm.action,
      formValues: serialize(this.estimateForm),
      method: this.estimateForm.method
    };
  }
}
