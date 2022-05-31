import React from "react";
import style from "./AuthForm.module.scss";
import CSS from "csstype";
import MyButton from "../UI/MyButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
const { Wrap, _Field } = style;

type Props = {};

interface IFormValues {
  username: string;
  password: string;
}

export default function AuthForm({}: Props) {
  const formStyles: CSS.Properties = {
    width: "25rem",
    height: "25rem",
    padding: "1rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  };
  const fieldStyle: CSS.Properties = {
    width: "100%",
    padding: "5px",
  };
  const fieldRequire = (field: string) => {
    return <div>{field} require</div>;
  };

  const initialValues: IFormValues = { username: "", password: "" };

  return (
    <div className={Wrap}>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {} as IFormValues;
          if (!values.username) {
            errors.username = "Required Username";
          }
          if (!values.password) {
            errors.password = "Required Password";
          }
          return errors;
        }}
        onSubmit={(values, {}) => {}}
      >
        {({ isSubmitting, isValid }) => (
          <Form style={formStyles}>
            <div className={_Field}>
              <Field
                type="text"
                placeholder="Username"
                name="username"
                style={{ ...fieldStyle }}
              />
              <ErrorMessage
                name="username"
                render={() => fieldRequire("username")}
              />
            </div>
            <div className={_Field}>
              <Field
                type="password"
                placeholder="Password"
                name="password"
                style={{ ...fieldStyle }}
              />
              <ErrorMessage
                name="password"
                component="div"
                render={() => fieldRequire("username")}
              />
            </div>

            <MyButton type="submit">Submit</MyButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
