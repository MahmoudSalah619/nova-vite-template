import ValidationSchema, { Auth } from "@/constants/Validation";
import Button from "@/src/components/Atoms/Button";
import Text from "@/src/components/Atoms/Text";
import TextInput from "@/src/components/Atoms/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import loginHandler from "@/utils/loginHandler";
import { User } from "@/src/apis/types/auth";

export default function ChangPasswordOrganism() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Auth>();

  // Handle Form Submission
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
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Enter_New_Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
          }}
          errorMsg={errors.newPassword?.message}
        />

        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Confirm_Password"
          type="password"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.confirmPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register(
              "confirmPassword",
              ValidationSchema.confirmPassword(watch)
            ),
          }}
          errorMsg={errors.confirmPassword?.message}
        />

        {/* Buttton */}
        <div className={styles.btnContainer}>
          <Button type="submit" title="update_password" isFullWidth />
        </div>
      </form>
    </div>
  );
}
