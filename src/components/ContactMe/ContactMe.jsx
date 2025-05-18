import styles from "./ContactMe.module.css";

import Title from "../Title/Title";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { useInput } from "../../hooks/useInput";
import { isEmpty, isText, isInstagramId } from "../../util/Validation";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import InfoItem from "./InfoItem/InfoItem";
import { useRef } from "react";

const list = [
  {
    icon: <HiOutlineLocationMarker fontSize="1.5rem" color="#222" />,
    title: "آدرس باشگاه:",
    text: "گچساران، شهرک نفت، کوچه هشت شمالی",
  },
  {
    icon: <IoCallOutline fontSize="1.5rem" color="#222" />,
    title: "شماره تماس:",
    text: "09171488436",
    url: "tel:+98-0917-148-8436",
  },
  {
    icon: <FaInstagram fontSize="1.5rem" color="#222" />,
    title: "اینستاگرام:",
    text: "ahmaad.alizade",
    url: "https://instagram.com/ahmaad.alizade",
  },
];

function ContactMe() {
  const formRef = useRef();
  const messageRef = useRef(""); // "" -> string     ,   null -> dom element
  const {
    handleEditedState: handleFullnameEditedState,
    handleValidate: handleFullnameValidate,
    error: fullNameError,
    handleReset: handleFullnameReset,
  } = useInput();

  const {
    handleEditedState: handleInstagramidEditedState,
    handleValidate: handleInstagramidValidate,
    error: instagramIdError,
    handleReset: handleInstagramidReset,
  } = useInput();

  const {
    handleEditedState: handleMessageEditedState,
    handleValidate: handleMessageValidate,
    error: messageError,
    handleReset: handleMessageReset,
  } = useInput();

  const telegramToken = "7518817928:AAEoq0B3xQ5a5wXbUXzc-eFSLYs1K_6tihY";
  const telegramId = "-1002674251393";

  async function sendMessageToTelegram(message) {
    const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    try {
      const ressponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: telegramId,
          text: message,
        }),
      });
      if (ressponse.ok) {
        console.log("پیام ارسال شد");
      } else {
        console.error("خطا در ارسال پیام");
      }
    } catch (error) {
      console.error("خطا:", error);
    }
  }

  function getData() {
    if (formRef.current) {
      const myfd = new FormData(formRef.current);
      const data = Object.fromEntries(myfd.entries());
      return data;
    }
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    const data = getData();

    const invalidFullname = fullNameError || isEmpty(data.fullName);

    let exist = false;
    if (invalidFullname) {
      handleFullnameEditedState(true);
      handleFullnameValidate(false);
      exist = true;
    }

    const invalidInstagramId = instagramIdError || isEmpty(data.instagramId);
    if (invalidInstagramId) {
      handleInstagramidEditedState(true);
      handleInstagramidValidate(false);
      exist = true;
    }

    const invalidMessage = messageError || isEmpty(data.message);

    if (invalidMessage) {
      handleMessageEditedState(true);
      handleMessageValidate(false);
      exist = true;
    }

    if (exist) {
      console.log("invalid form");
      return;
    }

    console.log("ok form , data is : ", data);

    messageRef.current = "";
    for (const key in data) {
      const edited = (data[key] || "").trim();
      messageRef.current += `${key} : ${edited}\n`;
    }
    console.log("message: ", messageRef.current);
    sendMessageToTelegram(messageRef.current);

    handleFullnameReset();
    handleInstagramidReset();
    handleMessageReset();
    formRef.current.reset();
  }

  return (
    <>
      <a id="contactMe"></a>
      <div className={styles.contact}>
        <Title title="ارتباط با من" />
        <div className={styles.content}>
          <div className={styles.info}>
            {list.map((l, index) => (
              <InfoItem
                icon={l.icon}
                title={l.title}
                text={l.text}
                url={l.url}
              />
            ))}
          </div>
          <div className={styles["sending-message"]}>
            <form
              className={styles.form}
              onClick={handleFormSubmit}
              ref={formRef}
            >
              <div className={styles.inputs}>
                <Input
                  name="fullName"
                  id="fullName"
                  label="نام و نام خانوادگی"
                  placeholder="احمد علیزاده"
                  error={
                    fullNameError && "حداقل شش کاراکتر از حروف و اعداد است."
                  }
                  onFocus={() => {
                    handleFullnameEditedState(false);
                  }}
                  onBlur={() => {
                    handleFullnameEditedState(true);
                    handleFullnameValidate(isText(getData().fullName));
                  }}
                />

                <Input
                  name="instagramId"
                  id="instagramId"
                  label="آیدی اینستاگرام"
                  placeholder="ahmaad.alizade"
                  error={instagramIdError && "فرمت آیدی وارد شده اشتباه است."}
                  onFocus={() => {
                    handleInstagramidEditedState(false);
                  }}
                  onBlur={() => {
                    handleInstagramidEditedState(true);
                    handleInstagramidValidate(
                      isInstagramId(getData().instagramId)
                    );
                  }}
                />
              </div>

              <Input
                name="message"
                id="message"
                label="پیام شما"
                placeholder="لطفا پیام خود را بنویسید."
                error={
                  messageError &&
                  "متن پیام باید حداقل شش کاراکتر از حروف و اعداد باشد."
                }
                onFocus={() => {
                  handleMessageEditedState(false);
                }}
                onBlur={() => {
                  handleMessageEditedState(true);
                  handleMessageValidate(isText(getData().message));
                }}
              />
              <div className={styles.button}>
                <Button className={styles["btn-sending"]}>ارسال پیام</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
