import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInput from "@/src/components/Atoms/TextInput";
import Button from "@/src/components/Atoms/Button";
import ValidationSchema, { Auth } from "@/constants/Validation";

export default function ForgetPasswordOrganism() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);

    navigate("/ChangePassword", {
      state: {
        forgetPassword: true,
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <Text
          i18nKey="forget_password_title"
          fontSize={20}
          color="primary0E"
          className={styles.introTitle}
        />

        <Text
          i18nKey="forget_password_subtitle"
          fontSize={14}
          color="grey500"
          fontFamily="font400"
          className={styles.introSubTitle}
        />
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={styles.input}
          label="Email Address"
          inputStyle={styles.emailInput}
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.email),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />

        {/* Buttton */}
        <div className={styles.btnContainer}>
          <Button type="submit" title="Reset Password" isFullWidth />
        </div>
      </form>
    </div>
  );
}
