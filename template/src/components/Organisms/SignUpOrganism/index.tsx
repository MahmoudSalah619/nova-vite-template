import ValidationSchema, { Auth } from "@/constants/Validation";
import Button from "@/src/components/Atoms/Button";
import Text from "@/src/components/Atoms/Text";
import TextInput from "@/src/components/Atoms/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import eye from "@/src/assets/icons/auth/eye.svg";
import loginHandler from "@/utils/loginHandler";
import { User } from "@/src/apis/types/auth";

export default function SignUpOrganism() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Password Changed Successfully:", data);
    
    const user_type = data.email === "admin@gmail.com" ? "admin" : "seller";
    const dummy_data = {
      user_type,
    };
    loginHandler({
      token: "skshdj36su3h77",
      data: dummy_data as User,
    });
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Text
        i18nKey="Complete_user_register"
        fontSize={20}
        color="primary0E"
        className={styles.introTitle}
      />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Full_Name"
          labelStyle={styles.labelStyle}
          status={errors.fullName ? "error" : "default"}
          reactHookFormProps={{
            ...register("fullName", ValidationSchema.fullName),
          }}
          errorMsg={errors.fullName?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="jobTitle"
          labelStyle={styles.labelStyle}
          status={errors.jobTitle ? "error" : "default"}
          reactHookFormProps={{
            ...register("jobTitle", ValidationSchema.jobTitle),
          }}
          errorMsg={errors.jobTitle?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Email Address"
          labelStyle={styles.labelStyle}
          status={errors.emailOrPhone?.message ? "error" : "default"}
          reactHookFormProps={{
            ...register("emailOrPhone", ValidationSchema.email),
          }}
          errorMsg={errors.emailOrPhone?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="phone_number_label"
          labelStyle={styles.labelStyle}
          status={errors.phoneNumber ? "error" : "default"}
          reactHookFormProps={{
            ...register("phoneNumber", ValidationSchema.phoneNumber),
          }}
          errorMsg={errors.phoneNumber?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="company"
          labelStyle={styles.labelStyle}
          status={errors.companyName ? "error" : "default"}
          reactHookFormProps={{
            ...register("companyName", ValidationSchema.companyName),
          }}
          errorMsg={errors.companyName?.message}
        />

        <TextInput
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
          }}
          errorMsg={errors.newPassword?.message}
          suffixIcon={eye}
        />

        <TextInput
          containerStyle={`${styles.input} ${styles.passwordContainer}`}
          label="Re_password"
          isPasswordInput
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.test}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
          }}
          errorMsg={errors.newPassword?.message}
          suffixIcon={eye}
        />
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="sign_up_button" isFullWidth type="submit" />
        </div>
      </form>
    </div>
  );
}
