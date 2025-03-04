import { SubmitHandler, useForm } from "react-hook-form";
import ValidationSchema, { Auth } from "@/template/constants/Validation";
import styles from "./styles.module.scss";
import Text from "@/template/src/components/Atoms/Text";
import TextInput from "@/template/src/components/Atoms/TextInput";
import Button from "@/template/src/components/Atoms/Button";
import CardWrapper from "../../Wrappers/CardWrapper";

function AddUserForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Auth>({ mode: "all" });

  //   const password = watch("password");

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);
    // dispatch(login("skshdj36su3h77"));
  };

  return (
    <div>
      <div className={styles.AddUsers}>
        <Text fontSize={32} fontFamily="font600">
          Add User
        </Text>
        <div className={styles.AddUsersBtns}>
          <Button
            title="Discard_Changes"
            variant="transparent-grey"
            color="ErrorRed400"
            paddingBlock={10}
            customStyle={styles.discardBtn}
            onClick={() => reset()}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            title="Create_New_User"
            variant="primary"
            paddingBlock={8}
          />
        </div>
      </div>
      <CardWrapper>
        <Text>General Info</Text>
        <form className={styles.form}>
          <TextInput
            containerStyle={styles.input}
            label="user_Name"
            status={errors.userName?.message ? "error" : "default"}
            reactHookFormProps={{
              ...register("userName", ValidationSchema.userName),
            }}
            errorMsg={errors.userName?.message}
          />
          <TextInput
            containerStyle={`${styles.input} ${styles.passwordContainer}`}
            label="Password"
            isPasswordInput
            type="password"
            labelStyle={styles.labelStyle}
            inputStyle={styles.test}
            status={errors.UserPassword ? "error" : "default"}
            reactHookFormProps={{
              ...register("UserPassword", ValidationSchema.UserPassword),
            }}
            errorMsg={errors.newPassword?.message}
          />
          <TextInput
            containerStyle={styles.input}
            label="Confirm Password"
            type="password"
            labelStyle={styles.labelStyle}
            inputStyle={styles.emailInput}
            status={errors.ConfirmUserPassword ? "error" : "default"}
            reactHookFormProps={{
              ...register(
                "ConfirmUserPassword",
                ValidationSchema.ConfirmUserPassword(watch)
              ),
            }}
            errorMsg={errors.ConfirmUserPassword?.message}
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
            containerStyle={styles.input}
            label="Home_address"
            status={errors.homeAddress?.message ? "error" : "default"}
            reactHookFormProps={{
              ...register("homeAddress", ValidationSchema.homeAddress),
            }}
            errorMsg={errors.homeAddress?.message}
          />
        </form>
      </CardWrapper>
    </div>
  );
}

export default AddUserForm;
