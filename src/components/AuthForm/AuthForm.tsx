import CSS from "csstype";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import style from "./AuthForm.module.scss";
import { observer } from "mobx-react-lite";
import store from "../../store/RootStore";
import { IFormValues, IField, stateType } from "./types";
import MyLoader from "../MyLoader/MyLoader";
import React, { SyntheticEvent } from "react";
import MyButton from "../UI/MyButton";
import useAuth from "../../hooks/useAuth";
import { Formik, Form, Field, ErrorMessage, replace } from "formik";
const { Wrap, _Field, Err_Message, Field_Inner, Head } = style;

const ErrorMsg = ({ msg }: { msg: string }) => {
  return <div className={Err_Message}>Введите {msg}</div>;
};

const MyFormField = ({ field }: { field: IField }) => {
  return (
    <div className={_Field}>
      <Field
        type={field.type}
        placeholder={field.name}
        name={field.id}
        className={Field_Inner}
      />
      <ErrorMessage
        name={field.id}
        component="div"
        render={() => <ErrorMsg msg={field.name} />}
      />
    </div>
  );
};

const fields: IField[] = [
  { id: "username", name: "имя пользователя", type: "text", initialValue: "" },
  { id: "password", name: "пароль", type: "password", initialValue: "" },
];

function AuthForm() {
  const { validationUser } = useAuth();
  const location = useLocation();
  let navigate = useNavigate();
  const state = location.state as stateType;
  const onSubmitRedirect = ()=>{navigate(state?.from?.pathname)}

  const onClose = (e: SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      navigate("/");
    }
  };

  const onSubmit = async (
    values: IFormValues,
    actions: { setSubmitting: (a: boolean) => void }
  ) => {
    const user = await validationUser(values);

    if (user) {
      store.authStore.signin(user.username,onSubmitRedirect);
      actions.setSubmitting(true);
    }
  };

  const validation = (values: IFormValues) => {
    const errors = {} as IFormValues;
    if (!values.username) {
      errors.username = "Required Username";
    }
    if (!values.password) {
      errors.password = "Required Password";
    }
    return errors;
  };

  const formStyles: CSS.Properties = {
    width: "25rem",
    height: "25rem",
    padding: "1rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
  };

  const initialValues: IFormValues = Object.fromEntries(
    fields.map((field: IField) => {
      return [field.id, field.initialValue];
    })
  );
  const showSubmitIcon = (isSubmitting: boolean) => {
    if (isSubmitting) {
      return <MyLoader color="white" size="sm" />;
    } else {
      return "Submit";
    }
  };

  return (
    <div onClick={onClose} className={Wrap}>
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, values }) => {
          return (
            <Form style={formStyles}>
              <div className={Head}>
                <h1>Auth</h1>
                <i onClick={onClose} className="fa-solid fa-xmark"></i>
              </div>
              {fields.map((field) => (
                <MyFormField key={field.id} field={field} />
              ))}
              <MyButton type="submit">{showSubmitIcon(isSubmitting)}</MyButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export function RequireAuth({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  let location = useLocation();

  if (!store.authStore.isAuth) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}

export default observer(AuthForm);
