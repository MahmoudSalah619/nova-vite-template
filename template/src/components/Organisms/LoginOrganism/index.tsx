import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/template/src/components/Atoms/Text";
import TextInput from "@/template/src/components/Atoms/TextInput";
import Button from "@/template/src/components/Atoms/Button";
import HyperLink from "@/template/src/components/Atoms/HyperLink";
import ValidationSchema, { Auth } from "@/template/constants/Validation";
import styles from "./styles.module.scss";
// import { login } from "@/reducers/authReducer";
import loginHandler from "@/template/utils/loginHandler";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import { User } from "@/template/src/apis/types/auth";

export default function LoginOrganism() {
  const { t } = useAutoCompleteTranslation();
  const onChange: CheckboxProps["onChange"] = () => {};
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);
    const user_type =
      data.emailOrPhone === "admin@gmail.com" ? "admin" : "seller";
    const dummy_data = {
      user_type,
    };
    loginHandler({
      token: "skshdj36su3h77",
      data: dummy_data as User,
    });
    navigate("/");
    // dispatch(login("skshdj36su3h77"));
  };
  return (
    <div className={styles.container}>
      <Text className={styles.introText} i18nKey="welcome_message" />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={styles.input}
          label="email_or_phone_label"
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.emailOrPhone),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
          status={errors.password?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("password", ValidationSchema.passwordLogin),
          }}
          errorMsg={errors.password?.message}
        />
        <div className={styles.rowContainer}>
          <Checkbox className={styles.checkboxStyle} onChange={onChange}>
            {t("remember_me")}
          </Checkbox>

          <HyperLink
            to="/forget-password"
            title={t("forgot_password")}
            fontSize={12}
          />
        </div>
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="Login" isFullWidth type="submit" />
        </div>

        <div className={styles.signUpContainer}>
          <Text className={styles.signUpText}>
            {t("sign_up_prompt")}
            <HyperLink
              to="/sign-up"
              title={t("sign_up_link")}
              fontSize={14}
              className={styles.space}
            />
          </Text>
        </div>
      </form>
    </div>
  );
}
