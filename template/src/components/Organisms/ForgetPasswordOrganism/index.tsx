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

    navigate("/otp", {
      state: {
        forgetPassword: true,
      },
    });
  };
  return (
    <div className={styles.container}>
      <Text
        className={styles.introText}
        i18nKey="To reset your password, please enter the email address of your ardi account"
      />

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
          <Button
            type="submit"
            title="Reset Password"
            isFullWidth
            variant="dark"
          />
        </div>

        <div className={styles.btnContainer}>
          <Button
            onClick={() => navigate("/login")}
            title="Go Back"
            isFullWidth
            variant="transparent-grey"
          />
        </div>
      </form>
    </div>
  );
}
