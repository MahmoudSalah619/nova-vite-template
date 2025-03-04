import { SubmitHandler, useForm } from "react-hook-form";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import TextInput from "@/template/src/components/Atoms/TextInput";
import CardWrapper from "@/template/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import ValidationSchema, { UserInfo } from "@/template/constants/Validation";
import PasswordValidationRole from "@/template/src/components/Molecules/PasswordValidationRole";

export default function UserGeneralInfo() {
  const { t } = useAutoCompleteTranslation();

  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    console.log("🚀 ~ MerchantInfoOrganism ~ data:", data);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>();

  const password = watch("confirmPassword");

  const hasUppercase = (value: string) => {
    return /[A-Z]/.test(value);
  };

  const hasEightLetters = (value: string) => {
    return value?.length >= 8;
  };

  const hasNumber = (value: string) => {
    return /\d/.test(value);
  };
  return (
    <CardWrapper title={t("General Info")}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputsHolder}>
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="user_Name"
            reactHookFormProps={{
              ...register("userName", ValidationSchema.userName),
            }}
            status={errors.userName ? "error" : "default"}
            errorMsg={errors.userName?.message}
          />
          <TextInput
            type="password"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Password"
            reactHookFormProps={{
              ...register("password", ValidationSchema.NewPassword),
            }}
            status={errors.password ? "error" : "default"}
            errorMsg={errors.password?.message}
          />
          <PasswordValidationRole
            title="Minimum 8 characters"
            isValid={hasEightLetters(password)}
          />
          <PasswordValidationRole
            title="At least 1 Number"
            isValid={hasNumber(password)}
          />
          <PasswordValidationRole
            title="At least 1 uppercase letter"
            isValid={hasUppercase(password)}
          />
          <TextInput
            type="password"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="confirm password"
            status={errors.confirmPassword ? "error" : "default"}
            reactHookFormProps={{
              ...register(
                "confirmPassword",
                ValidationSchema.confirmPassword(watch)
              ),
            }}
            errorMsg={errors.confirmPassword?.message}
          />
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Email Address"
            reactHookFormProps={{
              ...register("email", ValidationSchema.email),
            }}
            status={errors.email ? "error" : "default"}
            errorMsg={errors.email?.message}
          />
          <TextInput
            type="number"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="phone_number_label"
            reactHookFormProps={{
              ...register("phoneNumber", ValidationSchema.phoneNumber),
            }}
            status={errors.phoneNumber ? "error" : "default"}
            errorMsg={errors.phoneNumber?.message}
          />
          <TextInput
            type="text"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Home_address"
            reactHookFormProps={{
              ...register("homeAddress", ValidationSchema.homeAddress),
            }}
            status={errors.homeAddress ? "error" : "default"}
            errorMsg={errors.homeAddress?.message}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          that button is just for testing
        </button>
      </form>
    </CardWrapper>
  );
}
