import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import TextInput from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import ValidationSchema, { Auth } from "@/constants/Validation";
import styles from "./styles.module.scss";
// import { login } from "@/reducers/authReducer";
import loginHandler from "@/utils/loginHandler";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import eye from "@/src/assets/icons/auth/eye.svg";
import { User } from "@/src/apis/types/auth";

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
    const user_type = data.email === "admin@gmail.com" ? "admin" : "seller";
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
      <div className={styles.formHeader}>
        <Text
          i18nKey="login_title"
          fontSize={20}
          color="primary0E"
          className={styles.introTitle}
        />

        <Text
          i18nKey="login_subtitle"
          fontSize={14}
          color="grey500"
          fontFamily="font400"
          className={styles.introSubTitle}
        />
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={styles.input}
          label="email_address"
          status={errors.email?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.email),
          }}
          errorMsg={errors.email?.message}
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
          suffixIcon={eye}

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
      </form>
    </div>
  );
}
