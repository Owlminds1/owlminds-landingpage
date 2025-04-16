import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidPhoneNumber } from "react-phone-number-input";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import FormWrapper from "@/components/form-elements/FormWrapper";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import CustomNumberInput from "@/components/common/CustomNumberInput";
import { childGradeData, pointersChildGradeData } from "@/constants/data";
import LogoNav from "@/assets/images/owlmindsLogoNew1.png";
const nodeEnv = process.env.NODE_ENV;
const baseUrl =
  nodeEnv === "production"
    ? "https://api.owlminds.com/"
    : "https://dev-api.owlminds.com/";

// Month mapping for converting digits to strings
const monthMap = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

const validationSchemaStep3 = Yup.object({
  childName: Yup.string().required("Child Name is required"),
  parentName: Yup.string().required("Parent Name is required"),
  parentEmail: Yup.string().required("Parent Email is required"),
});

const validationSchemaStep2 = Yup.object({
  selectDate: Yup.string().required("Date is required"),
  selectSlot: Yup.string().required("Slot is required"),
});

const validationSchemaStep1 = Yup.object({
  whatsAppNumber: Yup.string()
    .required("Phone Number is required")
    .test(
      "is-valid-phone",
      "Please enter a valid phone number",
      (value) => !value || isValidPhoneNumber(value)
    ),
  selectGrade: Yup.string().required("Grade is required"),
});

export default function Home() {
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState({
    slots: [],
    selectedDate: [],
  });
  const [error, setError] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(
      step === 1
        ? validationSchemaStep1
        : step === 2
        ? validationSchemaStep2
        : validationSchemaStep3
    ),
    mode: "onBlur",
  });

  // Fetch slots function
  const fetchDateSlot = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        baseUrl + "api/public/index.php?action=get_slots"
      );
      const slots = response.data.slots || [];
      setAvailableSlots({
        slots: slots,
        selectedDate: slots.length > 0 ? slots[0].date : null, // Default to first date
      });
      // Set default form value after fetching
      if (slots.length > 0) {
        setValue("selectDate", slots[0].date);
      }
    } catch (error) {
      console.error("Failed to fetch slots:", error);
      setError("Failed to load available slots. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch slots when stepping to Step 2
  useEffect(() => {
    if (step === 2) {
      fetchDateSlot();
    }
  }, [step]);

  const handleApiCall = async (url, payload) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("API Call Error:", error.message);
      let errorMessage = "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    try {
      if (step === 1) {
        const values = getValues();
        const payload = {
          owl_id: Math.random().toString(36).substring(2, 7),
          grade: values.selectGrade,
          whatsapp_number: values.whatsAppNumber,
        };

        await handleApiCall(
          baseUrl + "api/public/index.php?action=confirm",
          payload
        );

        reset({}, { keepValues: true });
        setStep(step + 1);
      } else if (step === 2) {
        const values = getValues();
        const payload = {
          owl_id: Math.random().toString(36).substring(2, 7),
          slot_date: values.selectDate,
          slot_time: values.selectSlot,
        };

        await handleApiCall(
          baseUrl + "api/public/index.php?action=select_slot",
          payload
        );

        reset({}, { keepValues: true });
        setStep(step + 1);
      }
    } catch (error) {
      console.error("Failed to proceed to next step:", error);
    }
  };

  const getProgress = () => {
    switch (step) {
      case 1:
        return 30;
      case 2:
        return 60;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        child_name: data.childName,
        parent_name: data.parentName,
        email: data.parentEmail,
        // phone: data.phoneNumber,
      };

      await handleApiCall(
        baseUrl + "api/public/index.php?action=contact",
        payload
      );
      setShowModal(true);
    } catch (error) {
      console.error("Final submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const Step1Form = () => (
    <FormWrapper
      title={
        <span>
          Book a <span style={{ color: "rgba(127, 0, 255, 1)" }}>Free</span>{" "}
          Trial Class Now!
        </span>
      }
      pointersData={pointersChildGradeData}
      pointerTitle={
        <span style={{ position: "relative", display: "inline-block" }}>
          <span className="hidden sm:inline">
            Start your Child's Journey to Becoming a{" "}
            <span style={{ position: "relative", zIndex: 2 }}>
              CREATOR
              <svg
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "-10px",
                  width: "calc(100% + 20px)",
                  height: "calc(100% + 10px)",
                  zIndex: 1,
                }}
                width="210"
                height="64"
                viewBox="0 0 210 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4006 55.352C83.6404 55.0443 84.867 54.5463 86.1134 54.4584C97.1324 53.726 108.185 53.3817 119.17 52.2904C127.776 51.4334 136.329 49.8294 144.868 48.2913C154.667 46.5262 164.526 44.9588 174.166 42.4173C182.957 40.0955 191.848 37.7151 199.85 32.6833C200.838 32.0607 201.813 31.4162 202.761 30.7277C207.919 26.963 206.626 22.3267 202.86 18.8623C198.001 14.3945 192.007 12.5708 185.981 10.9741C174.524 7.93451 162.875 6.36711 151.14 5.40762C131.191 3.78163 111.248 3.56923 91.2649 4.69717C73.8016 5.67862 56.5172 8.081 39.3788 11.7651C30.4615 13.6841 21.6237 16.1231 13.449 20.6421C10.7373 22.1436 8.20469 24.2384 5.94387 26.4943C3.14602 29.2921 3.34492 32.8737 5.93724 35.9646C10.2666 41.1282 15.9949 43.7723 21.637 46.4969C32.1389 51.5653 43.1247 55.0297 54.3161 57.6078C60.7273 59.08 67.2445 59.9736 73.7021 61.1748C75.2734 61.4677 76.8182 61.9292 78.4956 62.3466C70.7783 65.562 63.2069 63.3281 55.7084 61.9951C45.1402 60.1127 34.7908 57.1537 24.8525 52.6639C17.3275 49.2655 9.94174 45.5301 3.79576 39.4875C-2.13806 33.6501 -0.580016 26.1061 4.78363 21.4405C12.6004 14.6362 22.0282 11.6992 31.5952 9.40669C36.7533 8.16889 41.9181 6.95305 47.116 5.94963C52.3006 4.95352 57.5184 4.18447 62.7362 3.45204C64.0091 3.26893 65.3417 3.60585 66.0644 3.65712C67.6622 3.28358 68.776 3.02723 69.8833 2.75624C71.5673 2.3534 73.4634 2.39002 74.9883 2.36805C77.2425 2.33143 79.5298 0.449087 82.0095 2.16297C82.9443 2.80751 84.7742 1.77478 86.2062 1.64294C89.866 1.2987 93.5323 1.00572 97.1987 0.734725C101.13 0.449078 105.068 0.0755391 109.007 0.00229626C111.374 -0.0416495 113.74 0.558947 116.114 0.624865C117.897 0.676135 119.688 0.178089 121.471 0.207387C124.382 0.251332 127.285 0.610215 130.196 0.668809C132.052 0.705431 134.055 -0.12221 135.745 0.397814C140.181 1.75281 144.649 0.991085 149.085 1.30603C154.502 1.68689 159.925 2.21424 165.308 2.99794C177.368 4.74844 189.494 6.36711 200.639 12.2998C202.794 13.4497 204.883 15.0391 206.573 16.8994C211.983 22.8687 210.823 30.8376 204.253 35.1662C195.422 40.9817 185.755 44.2556 175.797 46.4456C163.021 49.2581 150.152 51.5726 137.35 54.2533C125.363 56.7655 113.276 57.974 101.097 57.8862C95.4749 57.8422 89.8593 57.1244 84.2371 56.663C83.6338 56.6117 83.057 56.2382 82.4669 56.0111C82.447 55.7914 82.4271 55.5717 82.4073 55.352H82.4006Z"
                  fill="#FFC633"
                />
              </svg>
            </span>{" "}
            for Life!
          </span>
          <span className="sm:hidden text-white">Start your Child's Journey</span>
        </span>
      }
      page={step}
      note="We'll send the class link and details via email and WhatsApp"
      secondryNote1="Laptop or desktop is compulsory for this class."
      secondryNote2="By proceeding further, you agree to our Terms & Conditions and our Privacy Policy."
      getProgress={getProgress}
      isLoading={isLoading}
      error={error}
    >
      <form onSubmit={handleSubmit(handleNextStep)}>
        <CustomInput
          name="whatsAppNumber"
          label="Enter WhatsApp Number"
          placeholder=""
          control={control}
          error={errors.whatsAppNumber?.message}
          inputType="mobile"
        />

        <CustomNumberInput
          data={childGradeData}
          label="Select Child's Grade"
          name="selectGrade"
          control={control}
          error={errors.selectGrade?.message}
        />

        <CustomButton
          label="Confirm Slot"
          icon={false}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </FormWrapper>
  );

  const Step2Form = () => {
    const selectedFormDate = watch("selectDate"); // Track form-selected date
    // Format date for display (remove year, convert month digit to string)
    const formatDateLabel = (dateStr) => {
      const [year, month, day] = dateStr.split("-");
      const monthName = monthMap[month] || month; // Convert month to string
      return `${day} ${monthName}`;
    };

    const dateOptions = availableSlots.slots.map((slot) => ({
      id: slot.date,
      label: slot.label,
      value: formatDateLabel(slot.date),
    }));

    const timeOptions = selectedFormDate
      ? availableSlots.slots
          .find((s) => s.date === selectedFormDate)
          ?.times.map((time) => ({
            id: time,
            value: time,
          })) ?? []
      : [];

    return (
      <FormWrapper
        title={"Select Slot for Free Class"}
        pointersData={pointersChildGradeData}
        pointerTitle={
          <span style={{ position: "relative", display: "inline-block" }}>
            <span className="hidden sm:inline">
              Start your Child's Journey to Becoming a{" "}
              <span style={{ position: "relative", zIndex: 2 }}>
                CREATOR
                <svg
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-10px",
                    width: "calc(100% + 20px)",
                    height: "calc(100% + 10px)",
                    zIndex: 1,
                  }}
                  width="210"
                  height="64"
                  viewBox="0 0 210 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M82.4006 55.352C83.6404 55.0443 84.867 54.5463 86.1134 54.4584C97.1324 53.726 108.185 53.3817 119.17 52.2904C127.776 51.4334 136.329 49.8294 144.868 48.2913C154.667 46.5262 164.526 44.9588 174.166 42.4173C182.957 40.0955 191.848 37.7151 199.85 32.6833C200.838 32.0607 201.813 31.4162 202.761 30.7277C207.919 26.963 206.626 22.3267 202.86 18.8623C198.001 14.3945 192.007 12.5708 185.981 10.9741C174.524 7.93451 162.875 6.36711 151.14 5.40762C131.191 3.78163 111.248 3.56923 91.2649 4.69717C73.8016 5.67862 56.5172 8.081 39.3788 11.7651C30.4615 13.6841 21.6237 16.1231 13.449 20.6421C10.7373 22.1436 8.20469 24.2384 5.94387 26.4943C3.14602 29.2921 3.34492 32.8737 5.93724 35.9646C10.2666 41.1282 15.9949 43.7723 21.637 46.4969C32.1389 51.5653 43.1247 55.0297 54.3161 57.6078C60.7273 59.08 67.2445 59.9736 73.7021 61.1748C75.2734 61.4677 76.8182 61.9292 78.4956 62.3466C70.7783 65.562 63.2069 63.3281 55.7084 61.9951C45.1402 60.1127 34.7908 57.1537 24.8525 52.6639C17.3275 49.2655 9.94174 45.5301 3.79576 39.4875C-2.13806 33.6501 -0.580016 26.1061 4.78363 21.4405C12.6004 14.6362 22.0282 11.6992 31.5952 9.40669C36.7533 8.16889 41.9181 6.95305 47.116 5.94963C52.3006 4.95352 57.5184 4.18447 62.7362 3.45204C64.0091 3.26893 65.3417 3.60585 66.0644 3.65712C67.6622 3.28358 68.776 3.02723 69.8833 2.75624C71.5673 2.3534 73.4634 2.39002 74.9883 2.36805C77.2425 2.33143 79.5298 0.449087 82.0095 2.16297C82.9443 2.80751 84.7742 1.77478 86.2062 1.64294C89.866 1.2987 93.5323 1.00572 97.1987 0.734725C101.13 0.449078 105.068 0.0755391 109.007 0.00229626C111.374 -0.0416495 113.74 0.558947 116.114 0.624865C117.897 0.676135 119.688 0.178089 121.471 0.207387C124.382 0.251332 127.285 0.610215 130.196 0.668809C132.052 0.705431 134.055 -0.12221 135.745 0.397814C140.181 1.75281 144.649 0.991085 149.085 1.30603C154.502 1.68689 159.925 2.21424 165.308 2.99794C177.368 4.74844 189.494 6.36711 200.639 12.2998C202.794 13.4497 204.883 15.0391 206.573 16.8994C211.983 22.8687 210.823 30.8376 204.253 35.1662C195.422 40.9817 185.755 44.2556 175.797 46.4456C163.021 49.2581 150.152 51.5726 137.35 54.2533C125.363 56.7655 113.276 57.974 101.097 57.8862C95.4749 57.8422 89.8593 57.1244 84.2371 56.663C83.6338 56.6117 83.057 56.2382 82.4669 56.0111C82.447 55.7914 82.4271 55.5717 82.4073 55.352H82.4006Z"
                    fill="#FFC633"
                  />
                </svg>
              </span>{" "}
              for Life!
            </span>
            <span className="sm:hidden">Start your Child's Journey</span>
          </span>
        }
        page={step}
        getProgress={getProgress}
        isLoading={isLoading}
        error={error}
      >
        <form onSubmit={handleSubmit(handleNextStep)}>
          <CustomNumberInput
            name="selectDate"
            label="Select Date"
            control={control}
            error={errors.selectDate?.message}
            data={dateOptions}
          />

          <CustomNumberInput
            name="selectSlot"
            label="Select Time"
            control={control}
            error={errors.selectSlot?.message}
            data={timeOptions}
          />

          <CustomButton
            label="Confirm Slot"
            icon={false}
            disabled={isLoading}
          />
        </form>
      </FormWrapper>
    );
  };

  const Step3Form = () => (
    <FormWrapper
      title={"Contact Details"}
      note="We'll send the class link and details via email and WhatsApp"
      pointersData={pointersChildGradeData}
      pointerTitle={
        <span style={{ position: "relative", display: "inline-block" }}>
          <span className="hidden sm:inline">
            Start your Child's Journey to Becoming a{" "}
            <span style={{ position: "relative", zIndex: 2 }}>
              CREATOR
              <svg
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "-10px",
                  width: "calc(100% + 20px)",
                  height: "calc(100% + 10px)",
                  zIndex: 1,
                }}
                width="210"
                height="64"
                viewBox="0 0 210 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4006 55.352C83.6404 55.0443 84.867 54.5463 86.1134 54.4584C97.1324 53.726 108.185 53.3817 119.17 52.2904C127.776 51.4334 136.329 49.8294 144.868 48.2913C154.667 46.5262 164.526 44.9588 174.166 42.4173C182.957 40.0955 191.848 37.7151 199.85 32.6833C200.838 32.0607 201.813 31.4162 202.761 30.7277C207.919 26.963 206.626 22.3267 202.86 18.8623C198.001 14.3945 192.007 12.5708 185.981 10.9741C174.524 7.93451 162.875 6.36711 151.14 5.40762C131.191 3.78163 111.248 3.56923 91.2649 4.69717C73.8016 5.67862 56.5172 8.081 39.3788 11.7651C30.4615 13.6841 21.6237 16.1231 13.449 20.6421C10.7373 22.1436 8.20469 24.2384 5.94387 26.4943C3.14602 29.2921 3.34492 32.8737 5.93724 35.9646C10.2666 41.1282 15.9949 43.7723 21.637 46.4969C32.1389 51.5653 43.1247 55.0297 54.3161 57.6078C60.7273 59.08 67.2445 59.9736 73.7021 61.1748C75.2734 61.4677 76.8182 61.9292 78.4956 62.3466C70.7783 65.562 63.2069 63.3281 55.7084 61.9951C45.1402 60.1127 34.7908 57.1537 24.8525 52.6639C17.3275 49.2655 9.94174 45.5301 3.79576 39.4875C-2.13806 33.6501 -0.580016 26.1061 4.78363 21.4405C12.6004 14.6362 22.0282 11.6992 31.5952 9.40669C36.7533 8.16889 41.9181 6.95305 47.116 5.94963C52.3006 4.95352 57.5184 4.18447 62.7362 3.45204C64.0091 3.26893 65.3417 3.60585 66.0644 3.65712C67.6622 3.28358 68.776 3.02723 69.8833 2.75624C71.5673 2.3534 73.4634 2.39002 74.9883 2.36805C77.2425 2.33143 79.5298 0.449087 82.0095 2.16297C82.9443 2.80751 84.7742 1.77478 86.2062 1.64294C89.866 1.2987 93.5323 1.00572 97.1987 0.734725C101.13 0.449078 105.068 0.0755391 109.007 0.00229626C111.374 -0.0416495 113.74 0.558947 116.114 0.624865C117.897 0.676135 119.688 0.178089 121.471 0.207387C124.382 0.251332 127.285 0.610215 130.196 0.668809C132.052 0.705431 134.055 -0.12221 135.745 0.397814C140.181 1.75281 144.649 0.991085 149.085 1.30603C154.502 1.68689 159.925 2.21424 165.308 2.99794C177.368 4.74844 189.494 6.36711 200.639 12.2998C202.794 13.4497 204.883 15.0391 206.573 16.8994C211.983 22.8687 210.823 30.8376 204.253 35.1662C195.422 40.9817 185.755 44.2556 175.797 46.4456C163.021 49.2581 150.152 51.5726 137.35 54.2533C125.363 56.7655 113.276 57.974 101.097 57.8862C95.4749 57.8422 89.8593 57.1244 84.2371 56.663C83.6338 56.6117 83.057 56.2382 82.4669 56.0111C82.447 55.7914 82.4271 55.5717 82.4073 55.352H82.4006Z"
                  fill="#FFC633"
                />
              </svg>
            </span>{" "}
            for Life!
          </span>
          <span className="sm:hidden">Start your Child's Journey</span>
        </span>
      }
      page={step}
      getProgress={getProgress}
      isLoading={isLoading}
      error={error}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          name="childName"
          label="Please Enter Following Details."
          placeholder="Enter Child's Name"
          control={control}
          error={errors.childName?.message}
        />
        <CustomInput
          name="parentName"
          label=""
          placeholder="Enter Parent Name"
          control={control}
          error={errors.parentName?.message}
        />

        <CustomInput
          name="parentEmail"
          label=""
          placeholder="Parent Email ID"
          control={control}
          error={errors.parentEmail?.message}
        />
        {/* <CustomInput
          name="phoneNumber"
          label=""
          placeholder=""
          control={control}
          error={errors.phoneNumber?.message}
          inputType="mobile"
        /> */}

        <CustomButton
          label="Book my free class!"
          icon={false}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </FormWrapper>
  );

  const currentForm = () => {
    switch (step) {
      case 1:
        return <Step1Form />;
      case 2:
        return <Step2Form />;
      case 3:
        return <Step3Form />;
      default:
        return <Step1Form />;
    }
  };

  return (
    <div
      className={`relative ${
        step === 1
          ? "bg-[url(../assets/images/form-bg-mobile-1.jpeg)] sm:bg-[url(../assets/images/form-bg-1.jpeg)]"
          : step === 2
          ? "bg-[url(../assets/images/form-bg-mobile-2.jpeg)] sm:bg-[url(../assets/images/form-bg-2.jpeg)]"
          : "bg-[url(../assets/images/form-bg-mobile-3.jpeg)] sm:bg-[url(../assets/images/form-bg-3.jpeg)]"
      } aspect-[395/1600] sm:aspect-[16/9] bg-no-repeat bg-cover bg-top w-full flex justify-center items-start sm:items-center`}
    >
      

      <div className="absolute sm:mx-24 sm:mt-20 mt-20">
        {/* Logo in top left corner */}
      <div className="absolute top-[-80] sm:left-[-4] sm:py-0 py-2 z-50">
        <Link href="/">
          <Image
            src={LogoNav}
            alt="Logo"
            width={136}
            height={38}
            priority
            className="w-auto h-auto ml-5 p-2 sm:hidden !w-[180px]"
          />
          <Image
            src={LogoNav}
            alt="Logo"
            width={207}
            height={58}
            priority
            className="w-auto h-auto ml-3 sm:block hidden !w-[200px]"
          />
        </Link>
      </div>
        <div>{currentForm()}</div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Success!
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Your details have been successfully submitted. We'll contact you
                shortly.
              </p>
              <Link href="/">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-violet-600 cursor-pointer py-2 rounded-lg flex justify-center items-center gap-2"
                >
                  Okay
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-red-100 rounded-lg p-4 max-w-md w-full mx-4">
            <p className="text-red-800 text-center">{error}</p>
            <button
              onClick={() => setError(null)}
              className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
