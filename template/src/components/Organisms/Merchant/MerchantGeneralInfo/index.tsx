import { SubmitHandler, useForm } from "react-hook-form";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";
import TextInput from "@/template/src/components/Atoms/TextInput";
import RichTextEditor from "@/template/src/components/Molecules/RichTextEditor";
import CardWrapper from "@/template/src/components/Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import ValidationSchema, { MerchantInfo } from "@/template/constants/Validation";
import PasswordValidationRole from "@/template/src/components/Molecules/PasswordValidationRole";

export default function MerchantGeneralInfo() {
  const { t } = useAutoCompleteTranslation();

  const onSubmit: SubmitHandler<MerchantInfo> = (data) => {
    console.log("🚀 ~ MerchantInfoOrganism ~ data:", data);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<MerchantInfo>();
  const { setValue } = useForm<MerchantInfo>();

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
            label="Merchant Name"
            labelStyle={styles.titleCon}
            reactHookFormProps={{
              ...register("name", ValidationSchema.brandName),
            }}
            status={errors.name ? "error" : "default"}
            errorMsg={errors.name?.message}
          />
          <TextInput
            type="password"
            inputStyle={styles.input}
            containerStyle={styles.inputContainer}
            label="Password"
            labelStyle={styles.titleCon}
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
            labelStyle={styles.titleCon}
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
            labelStyle={styles.titleCon}
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
            labelStyle={styles.titleCon}
            label="phone_number_label"
            reactHookFormProps={{
              ...register("phoneNumber", ValidationSchema.phoneNumber),
            }}
            status={errors.phoneNumber ? "error" : "default"}
            errorMsg={errors.phoneNumber?.message}
          />

          <RichTextEditor
            label="Merchant Bio"
            containerStyle={styles.inputContainer}
            onChange={(value) => setValue("bio", value)}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          that button is just for testing
        </button>
      </form>
    </CardWrapper>
  );
}
