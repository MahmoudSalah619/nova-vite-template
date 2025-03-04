import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/template/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import TextInput from "@/template/src/components/Atoms/TextInput";
import Button from "@/template/src/components/Atoms/Button";
import HyperLink from "@/template/src/components/Atoms/HyperLink";
import PasswordValidationRole from "@/template/src/components/Molecules/PasswordValidationRole";
import ValidationSchema, { Auth } from "@/template/constants/Validation";
import useAutoCompleteTranslation from "@/template/hooks/useAutoCompleteTranslation";

export default function SignUpOrganism() {
  const { t } = useAutoCompleteTranslation();
  const [isChecked, setIsChecked] = useState(false); // Manage checkbox state

  const onCheckboxChange: CheckboxProps["onChange"] = (e) => {
    setIsChecked(e.target.checked); // Update the state when checkbox changes
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Auth>();

  const password = watch("newPassword");

  const hasUppercase = (value: string) => {
    return /[A-Z]/.test(value);
  };

  const hasEightLetters = (value: string) => {
    return value?.length >= 8;
  };

  const hasNumber = (value: string) => {
    return /\d/.test(value);
  };

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Password Changed Successfully:", data);
    navigate("/otp", {
      state: {
        forgetPassword: false,
      },
    }); // Redirect to a success page or another route
  };

  return (
    <div className={styles.container}>
      <Text className={styles.introText} i18nKey="create_account_heading" />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="brand_name_label"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
          status={errors.brandName ? "error" : "default"}
          reactHookFormProps={{
            ...register("brandName", ValidationSchema.brandName),
          }}
          errorMsg={errors.brandName?.message}
        />
        <TextInput
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Email Address"
          labelStyle={styles.labelStyle}
          inputStyle={styles.emailInput}
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
          inputStyle={styles.emailInput}
          status={errors.phoneNumber ? "error" : "default"}
          reactHookFormProps={{
            ...register("phoneNumber", ValidationSchema.phoneNumber),
          }}
          errorMsg={errors.phoneNumber?.message}
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
        />
        <div className={styles.validationContainer}>
          <Text
            fontSize={12}
            fontFamily="font500"
            color="grey900"
            i18nKey="password_requirements_heading"
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
        </div>
        <div className={styles.rowContainer}>
          <Checkbox
            className={styles.checkboxStyle}
            onChange={onCheckboxChange} // Handle checkbox change manually
          >
            {t("agree_terms")}{" "}
            <HyperLink to="/" title={t("terms_and_conditions")} fontSize={16} />
          </Checkbox>
        </div>
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button
            disabled={!isChecked}
            title="sign_up_button"
            isFullWidth
            type="submit"
          />
        </div>

        <div className={styles.signUpContainer}>
          <Text className={styles.signUpText}>
            {t("already_have_account")}
            <HyperLink
              to="/login"
              title={t("sign_in_link")}
              fontSize={14}
              className={styles.space}
            />
          </Text>
        </div>
      </form>
    </div>
  );
}
