import styles from "./Appointment.module.css";

import HomeLogo from "../../components/HomeLogo/HomeLogo";
import Button from "../../components/Button/Button";
import InputAppointment from "../../components/AppoitmentComponents/InputAppointment/InputAppointment";
import InputRadioA from "../../components/AppoitmentComponents/InputRadioA/InputRadioA";
import InputNumberA from "../../components/AppoitmentComponents/InputNumberA/InputNumberA";
import TextAreaA from "../../components/AppoitmentComponents/TextAreaA/TextAreaA";
import CheckboxTerms from "../../components/AppoitmentComponents/CheckboxTerms/CheckboxTerms";

import { isEmpty, isMobile, isText, isTelegramId } from "../../util/Validation";
import { useInput } from "../../hooks/useInput";

import { useRef } from "react";

function Appointment() {
  const formRef = useRef();
  const messageRef = useRef("");

  const {
    handleEditedState: handleFullNameEditedState,
    handleValidate: handleFullNameValidate,
    error: fullNameError,
    handleReset: handleFullNameReset,
  } = useInput();
  const {
    handleEditedState: handlePhoneEditedState,
    handleValidate: handlePhoneValidate,
    error: phoneError,
    handleReset: handlephoneReset,
  } = useInput();

  const {
    handleEditedState: handleTelegramIdEditedState,
    handleValidate: handleTelegramIdValidate,
    error: telegramIdError,
    handleReset: handleTelegramIdReset,
  } = useInput();

  const {
    handleEditedState: handleSicknessEditedState,
    handleValidate: handleSicknessValidate,
    error: sicknessError,
    handleReset: handleSicknessReset,
  } = useInput();

  const {
    handleEditedState: handlePracticeEditedState,
    handleValidate: handlePracticeValidate,
    error: practiceError,
    handleReset: handlePracticeReset,
  } = useInput();
  const {
    handleEditedState: handleGoalEditedState,
    handleValidate: handleGoalValidate,
    error: goalError,
    handleReset: handleGoalReset,
  } = useInput();
  const {
    handleEditedState: handlePainEditedState,
    handleValidate: handlePainValidate,
    error: painError,
    handleReset: handlePainReset,
  } = useInput();
  const {
    handleEditedState: handleSupplementEditedState,
    handleValidate: handleSupplementValidate,
    error: supplementError,
    handleReset: handleSupplementReset,
  } = useInput();

  const {
    handleEditedState: handleAllergytEditedState,
    handleValidate: handleAllergyValidate,
    error: allergyError,
    handleReset: handleAllergyReset,
  } = useInput();

  const {
    handleEditedState: handleTimeEditedState,
    handleValidate: handleTimeValidate,
    error: timeError,
    handleReset: handleTimeReset,
  } = useInput();

  const {
    handleEditedState: handleMessageEditedState,
    handleValidate: handleMessageValidate,
    error: messageError,
    handleReset: handleMessageReset,
  } = useInput();

  const {
    handleEditedState: handleTermsEditedState,
    handleValidate: handleTermsValidate,
    error: termsError,
    handleReset: handleTermsReset,
  } = useInput();

  const {
    handleEditedState: handleAgeEditedState,
    handleValidate: handleAgeValidate,
    error: ageError,
    handleReset: handleAgeReset,
  } = useInput();

  const {
    handleEditedState: handleWeightEditedState,
    handleValidate: handleWeightValidate,
    error: weightError,
    handleReset: handleWeightReset,
  } = useInput();

  const {
    handleEditedState: handleHeightEditedState,
    handleValidate: handleHeightValidate,
    error: heightError,
    handleReset: handleHeightReset,
  } = useInput();

  function getData() {
    const myfd = new FormData(formRef.current);
    const data = Object.fromEntries(myfd.entries());
    return data;
  }

  const telegramToken = "7518817928:AAEoq0B3xQ5a5wXbUXzc-eFSLYs1K_6tihY";
  const telegramId = "-1002674251393";

  async function handleSenMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramId,
          text: message,
        }),
      });
      if (response.ok) {
        console.log("پیام با موفقیت ارسال شد.");
      } else {
        console.error("خطا در ارسال پیام");
      }
    } catch (error) {
      console.error("خطا:", error);
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    const data = getData();
    console.log("data before check empty: ", data);
    let exist = false;

    const invalidFullname = fullNameError || isEmpty(data.fullName);
    if (invalidFullname) {
      handleFullNameEditedState(true);
      handleFullNameValidate(false);
      exist = true;
    }

    const invalidPhone = phoneError || isEmpty(data.phone);
    if (invalidPhone) {
      handlePhoneEditedState(true);
      handlePhoneValidate(false);
      exist = true;
    }

    const invalidTelegram = telegramIdError || isEmpty(data.telegram);
    if (invalidTelegram) {
      handleTelegramIdEditedState(true);
      handleTelegramIdValidate(false);
      exist = true;
    }

    const invalidSickness = sicknessError || isEmpty(data.sickness);
    if (invalidSickness) {
      handleSicknessEditedState(true);
      handleSicknessValidate(false);
      exist = true;
    }

    const invalidPractice = practiceError || isEmpty(data.practice);
    if (invalidPractice) {
      handlePracticeEditedState(true);
      handlePracticeValidate(false);
      exist = true;
    }

    const invalidGoal = goalError || isEmpty(data.goal);
    if (invalidGoal) {
      handleGoalEditedState(true);
      handleGoalValidate(false);
      exist = true;
    }

    const invalidPain = painError || isEmpty(data.pain);
    if (invalidPain) {
      handlePainEditedState(true);
      handlePainValidate(false);
      exist = true;
    }

    const invalidSepplement = supplementError || isEmpty(data.supplement);
    if (invalidSepplement) {
      handleSupplementEditedState(true);
      handleSupplementValidate(false);
      exist = true;
    }

    const invalidAllergy = allergyError || isEmpty(data.allergy);
    if (invalidAllergy) {
      handleAllergytEditedState(true);
      handleAllergyValidate(false);
      exist = true;
    }

    const invalidTime = timeError || isEmpty(data.time);
    if (invalidTime) {
      handleTimeEditedState(true);
      handleTimeValidate(false);
      exist = true;
    }

    const invalidMessage = messageError || isEmpty(data.message);
    if (invalidMessage) {
      handleMessageEditedState(true);
      handleMessageValidate(false);
      exist = true;
    }

    const invalidTerms = termsError || !data.terms;
    if (invalidTerms) {
      handleTermsEditedState(true);
      handleTermsValidate(false);
      exist = true;
    }
    const invalidAge = ageError || isEmpty(data.age);
    if (invalidAge) {
      handleAgeEditedState(true);
      handleAgeValidate(false);
      exist = true;
    }

    const invalidHeight = heightError || isEmpty(data.height);
    if (invalidHeight) {
      handleHeightEditedState(true);
      handleHeightValidate(false);
      exist = true;
    }

    const invalidWeight = weightError || isEmpty(data.weight);
    if (invalidWeight) {
      handleWeightEditedState(true);
      handleWeightValidate(false);
      exist = true;
    }

    if (exist) {
      console.log("invakid form");
      return;
    }

    console.log("form ok : ", data);

    messageRef.current = "";
    for (const key in data) {
      const edited = (data[key] || "").trim();
      messageRef.current += `${key} : ${edited}\n`;
    }

    console.log("message to telegram is: ", messageRef.current);
    handleSenMessageToTelegram(messageRef.current);

    handleFullNameReset();
    handlephoneReset();
    handleTelegramIdReset();
    handleSicknessReset();
    handlePracticeReset();
    handleGoalReset();
    handlePainReset();
    handleSupplementReset();
    handleAllergyReset();
    handleTimeReset();
    handleMessageReset();
    handleTermsReset();
    handleAgeReset();
    handleHeightReset();
    handleWeightReset();
    formRef.current.reset();
  }
  return (
    <div className={styles.appointment}>
      <HomeLogo />
      <div className={styles.content}>
        <h2 className={styles.title}>فرم سفارش برنامه:</h2>
        <form className={styles.form} ref={formRef} onSubmit={handleSubmitForm}>
          <InputAppointment
            label="نام و نام خانوادگی"
            id="fullName"
            name="fullName"
            error={fullNameError && "باید حداقل شش کاراکتر و عدد باشد."}
            onFocus={() => {
              handleFullNameEditedState(false);
            }}
            onBlur={() => {
              handleFullNameEditedState(true);
              handleFullNameValidate(isText(getData().fullName));
            }}
          />
          <InputAppointment
            label="شماره تماس"
            id="phone"
            name="phone"
            error={phoneError && "شماره تماس 11 عدد می باشد."}
            onFocus={() => {
              handlePhoneEditedState(false);
            }}
            onBlur={() => {
              handlePhoneEditedState(true);
              handlePhoneValidate(isMobile(getData().phone));
            }}
          />

          <InputAppointment
            label="آیدی تلگرام"
            id="telegram"
            name="telegram"
            error={telegramIdError && "فرمت وارد شده صحیح نیست."}
            onFocus={() => {
              handleTelegramIdEditedState(false);
            }}
            onBlur={() => {
              handleTelegramIdEditedState(true);
              handleTelegramIdValidate(isTelegramId(getData().telegram));
            }}
          />

          <div className={styles.gender}>
            <p>جنسیت :</p>
            <InputRadioA
              id="female"
              value="female"
              name="gender"
              label="خانم"
            />
            <InputRadioA id="male" value="male" name="gender" label="آقا" />
          </div>

          <div className={styles.reserve}>
            <p>رزرو نوبت :</p>
            <InputRadioA
              id="peresent"
              value="peresent"
              name="appointment"
              label="حضوری"
            />
            <InputRadioA
              id="online"
              value="online"
              name="appointment"
              label="غیر حضوری"
            />
          </div>

          <div className={styles.programm}>
            <div className={styles.content}>
              <p>نوع برنامه :</p>
              <InputRadioA
                id="exercise"
                value="exercise"
                name="program"
                label="تمرینی"
              />
              <InputRadioA
                id="feeding"
                value="feeding"
                name="program"
                label="تغذیه"
              />
              <InputRadioA
                id="exercise-feeding"
                value="exercise-feeding"
                name="program"
                label="تمرین و تغذیه"
              />
            </div>
          </div>
          <div className={styles.price}>
            <p>هزینه پرداختی</p>
            <Button className={styles["btn-price"]}>
              {(getData().program === "exercise" && "800,000") ||
                (getData().program === "feeding" && "400,000") ||
                (getData().program === "exercise-feeding" && "1,200,000") ||
                "800,000"}
              {" تومان "}
            </Button>
          </div>
          <div className={styles.questions}>
            <p className={styles["title-q"]}>سوالات:</p>
            {/* سوالات مشترک */}
            <div className={styles.details}>
              <InputNumberA
                name="age"
                id="age"
                label="سن"
                placeholder={20}
                min={8}
                max={100}
                error={ageError && "حداقل 8 و حداکثر 100 "}
                onFocus={() => handleAgeEditedState(false)}
                onBlur={() => {
                  handleAgeEditedState(true);
                  handleAgeValidate(8 <= getData().age <= 100);
                }}
              />
              <InputNumberA
                name="height"
                id="height"
                label="قد"
                placeholder={100}
                min={70}
                max={230}
                error={heightError && "حداقل 70 و حداکثر 230 "}
                onFocus={() => handleHeightEditedState(false)}
                onBlur={() => {
                  handleHeightEditedState(true);
                  handleHeightValidate(70 <= getData().height <= 230);
                }}
              />
              <InputNumberA
                name="weight"
                id="weight"
                label="وزن"
                placeholder={50}
                min={20}
                max={220}
                error={weightError && "حداقل 20 و حداکثر 220 "}
                onFocus={() => handleWeightEditedState(false)}
                onBlur={() => {
                  handleWeightEditedState(true);
                  handleWeightValidate(20 <= getData().weight <= 220);
                }}
              />
            </div>

            {/* سوالات مخصوص تمرین */}
            <InputAppointment
              label="سابقه بیماری"
              id="sickness"
              name="sickness"
              placeholder="مثال دیابت دارم"
              error={sicknessError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handleSicknessEditedState(false);
              }}
              onBlur={() => {
                handleSicknessEditedState(true);
                handleSicknessValidate(isText(getData().sickness));
              }}
            />
            <InputAppointment
              label="سابقه تمرین"
              id="practice"
              name="practice"
              placeholder="مثال یک سال یا ندارم"
              error={practiceError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handlePracticeEditedState(false);
              }}
              onBlur={() => {
                handlePracticeEditedState(true);
                handlePracticeValidate(isText(getData().practice));
              }}
            />
            <InputAppointment
              label="هدف از تمرین"
              id="goal"
              name="goal"
              placeholder="مثال کاهش وزن یا ..."
              error={goalError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handleGoalEditedState(false);
              }}
              onBlur={() => {
                handleGoalEditedState(true);
                handleGoalValidate(isText(getData().goal));
              }}
            />
            <InputAppointment
              label="درد یا آسیب"
              id="pain"
              name="pain"
              placeholder="مثال در دست چپ پلاتین یا درد دارم"
              error={painError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handlePainEditedState(false);
              }}
              onBlur={() => {
                handlePainEditedState(true);
                handlePainValidate(isText(getData().pain));
              }}
            />
            <InputAppointment
              label="مکمل مصرفی"
              id="supplement"
              name="supplement"
              placeholder="مثال کراتین میخورم یا نمیخورم."
              error={supplementError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handleSupplementEditedState(false);
              }}
              onBlur={() => {
                handleSupplementEditedState(true);
                handleSupplementValidate(isText(getData().supplement));
              }}
            />

            {/* سوالات مخصوص تغذیه */}

            <InputAppointment
              label="حساسیت غذایی"
              id="allergy"
              name="allergy"
              placeholder="مثال به لبنیات حساسیت دارم"
              error={allergyError && "باید حداقل شش کاراکتر و عدد باشد."}
              onFocus={() => {
                handleAllergytEditedState(false);
              }}
              onBlur={() => {
                handleAllergytEditedState(true);
                handleAllergyValidate(isText(getData().allergy));
              }}
            />

            <InputAppointment
              label="ساعت تمرین"
              id="time"
              name="time"
              error={timeError && "باید حداقل شش کاراکتر و عدد باشد."}
              placeholder="مثال صبح 9 تا 11"
              onFocus={() => {
                handleTimeEditedState(false);
              }}
              onBlur={() => {
                handleTimeEditedState(true);
                handleTimeValidate(isText(getData().time));
              }}
            />
          </div>
          <TextAreaA
            error={messageError && "باید حداقل شش کاراکتر و عدد باشد."}
            onFocus={() => {
              handleMessageEditedState(false);
            }}
            onBlur={() => {
              handleMessageEditedState(true);
              handleMessageValidate(isText(getData().message));
            }}
          />
          <CheckboxTerms
            error={termsError && "باید حداقل شش کاراکتر و عدد باشد."}
            onFocus={() => {
              handleTermsEditedState(false);
            }}
            onBlur={() => {
              handleTermsEditedState(true);
              handleTermsValidate(getData().terms);
            }}
          />

          {/* <div className={styles.uploading}>
            <Button className={styles["btn-uploding"]}>آپلود عکس</Button>
            <div className={styles["show-images"]}>نمایش عکس ها</div>
          </div> */}

          <div className={styles.send}>
            <Button className={styles["btn-sending"]}>ارسال</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
