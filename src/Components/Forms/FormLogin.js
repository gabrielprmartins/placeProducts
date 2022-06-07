import React from "react";
import Input from "./FormComponents/Input";
import Button from "./FormComponents/Button";
import useForm from "../../Hooks/useForm";
import { USER_LOGIN } from "../../api/api";

const FormLogin = () => {
  const username = useForm("");
  const password = useForm("");

  async function handleSubmit() {
    if (username.validate() && password.validate()) {
      try {
        const { url, options } = USER_LOGIN({ username, password });
        const response = "rf";
      } catch (err) {
      } finally {
      }
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="Username" type="text" id="username" {...username} />
        {username.value}
        <Input name="Password" type="password" id="password" {...password} />
        {password.value}
        <Button>Sign In</Button>
      </form>
    </section>
  );
};

export default FormLogin;
