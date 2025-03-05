import { Input } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import ValidationSchema, { Auth } from "@/constants/Validation";
import Timer from "../../Molecules/Timer";

export default function OtpOrganism() {
  const navigate = useNavigate();

  const location = useLocation();
  const forgetPassword = location.state?.forgetPassword || false;

  const otpContainerStyle = {
    columnGap: 16,
    width: 328,
    height: 57,
    marginBottom: 20,
    justifyContent: "center",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = (data) => {
    console.log("Form Submitted:", data);
    if (forgetPassword) {
      navigate("/change-password");
    } else {
      navigate("/merchant-info");
    }
  };

  return (
    <div className={styles.container}>
      <Text
        className={styles.introText}
        i18nKey="authentication_code_message"
      />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="otp"
          control={control}
          defaultValue=""
          rules={ValidationSchema.otp}
          render={({ field }) => (
            <Input.OTP
              {...field}
              formatter={(str) => str.toUpperCase()}
              length={4}
              className={styles.otpInput}
              type="number"
              size="large"
              status={errors.otp ? "error" : ""}
              style={otpContainerStyle}
            />
          )}
        />

        <Timer />

        <div className={styles.btnContainer}>
          <Button title="submit_button" isFullWidth />
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
