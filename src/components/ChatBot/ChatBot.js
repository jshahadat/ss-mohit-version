import { faCopy, faLanguage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Typewriter from "typewriter-effect";
import {
  BASEURL_AI,
  BASEURL_Chat_Bot,
  BASEURL_Translation,
} from "../../connection/BaseUrl";
import reactStringReplace from "react-string-replace";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";

function ChatBot() {
  const initialData = {
    message:
      "👋 Hello! My name is Ssebowa Chat, I’m an AI that can answer general questions, explain things, suggest ideas, translate, summarize text, compose emails, and write code for you. I’m powered by Ssebowa Artificial Neural Networks and Natural Language Processing, allowing you to have human-like conversations with me. I am constantly learning from huge amounts of information on the internet, which means I sometimes may get some answers wrong. My AI is always improving and I will often share sources for my answers. Some example queries you can try asking me:",
    type: "r",
    first: true,
  };
  const [messages, SetMessages] = useState([initialData]);
  const [MessageLoading, SetMessageLoading] = useState(false);

  const [Active, SetActive] = useState(true);
  const [inputVal, SetinputVal] = useState("");

  useEffect(() => {
    fetch(BASEURL_Chat_Bot + "Checking")
      .then((r) => r.json())
      .then((r) => {
        SetActive(true);
      })
      .catch((e) => {
        console.log(e);
        SetActive(false);
      });
  }, []);

  const pushMessageAndSet = (m) => {
    SetMessages((old_messages) => [m, ...old_messages]);
    console.log(messages);
    // try {
    //     localStorage.setItem("ssebowa-chat-messages", "messages);
    //     return true;
    // } catch (e) {
    //     console.log(e);
    //     return e;
    // }
  };
  const onChangeInput = (e) => {
    SetinputVal(e.target.value);
  };
  const FetchMessage = (inputVal) => {
    SetMessageLoading(true);
    var url = BASEURL_Chat_Bot + inputVal;
    fetch(url, { method: "GET" })
      .then((r) => r.json())
      .then((r) => {
        var s = {
          message: r?.generated_text,
          type: "r",
          first: false,
        };
        pushMessageAndSet(s);
        SetMessageLoading(false);
      })
      .catch((e) => {
        console.log(e);
        var b = {
          message:
            "Sorry, I didn't understand the question well, can you please repeat the question again",
          type: "r",
          first: false,
        };
        pushMessageAndSet(b);
        SetMessageLoading(false);
      });
  };
  const SubmitMessageRequest = (e) => {
    e.preventDefault();
    if (inputVal.replace(/\s/g, "").length) {
      var v = { message: inputVal, type: "q", first: false };
      pushMessageAndSet(v);
      SetinputVal("");
      FetchMessage(v?.message);
    }
  };
  return (
    <div className="ChatBotContainer"> 
      <div className="ChatBotMain">
        <div className="ChatBotNav">
          <h6 className="fw-bold text-success">SSEBOWA CHAT</h6>
          {Active ? (
            <span className="text-primary fw-bold" style={{ fontSize: 13 }}>
              • ACTIVE
            </span>
          ) : (
            <span className="text-danger fw-bold" style={{ fontSize: 13 }}>
              • INACTIVE
            </span>
          )}
        </div>
        <div className="ChatBotResponceDiv">
          {MessageLoading ? <MessageRecievdedLoading /> : <></>}
          {messages.map((e, i) => {
            if (e.type === "q") {
              return <MessageSent message={e.message} key={i} />;
            } else {
              console.log(messages);
              return (
                <MessageRecievded message={e.message} first={e.first} key={i} />
              );
            }
          })}
        </div>
        <div className="ChatBotFormDiv">
          <form
            className="ChatBotForm"
            method="get"
            onSubmit={(e) => SubmitMessageRequest(e)}
          >
            <input
              placeholder="Try asking anything..."
              className="ChatBotInput"
              type={"search"}
              value={inputVal}
              onChange={(e) => onChangeInput(e)}
            />
            <button type="submit" className="ChatBotButton">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="pt-1 "
                size="lg"
                style={{
                  color: "#181c51",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;

export const MessageSent = ({ message }) => {
  return (
    <div className="MessageSentMain">
      <div className="MessageSentInner">{message}</div>
    </div>
  );
};

export const MessageRecievded = ({ message }) => {
  const [Languages, SetLanguages] = useState([
    "afrikaans",
    "albanian",
    "amharic",
    "arabic",
    "armenian",
    "azerbaijani",
    "basque",
    "belarusian",
    "bengali",
    "bosnian",
    "bulgarian",
    "catalan",
    "cebuano",
    "chichewa",
    "chinese (simplified)",
    "chinese (traditional)",
    "corsican",
    "croatian",
    "czech",
    "danish",
    "dutch",
    "english",
    "esperanto",
    "estonian",
    "filipino",
    "finnish",
    "french",
    "frisian",
    "galician",
    "georgian",
    "german",
    "greek",
    "gujarati",
    "haitian creole",
    "hausa",
    "hawaiian",
    "hebrew",
    "hebrew",
    "hindi",
    "hmong",
    "hungarian",
    "icelandic",
    "igbo",
    "indonesian",
    "irish",
    "italian",
    "japanese",
    "javanese",
    "kannada",
    "kazakh",
    "khmer",
    "korean",
    "kurdish (kurmanji)",
    "kyrgyz",
    "lao",
    "latin",
    "latvian",
    "lithuanian",
    "luxembourgish",
    "macedonian",
    "malagasy",
    "malay",
    "malayalam",
    "maltese",
    "maori",
    "marathi",
    "mongolian",
    "myanmar (burmese)",
    "nepali",
    "norwegian",
    "odia",
    "pashto",
    "persian",
    "polish",
    "portuguese",
    "punjabi",
    "romanian",
    "russian",
    "samoan",
    "scots gaelic",
    "serbian",
    "sesotho",
    "shona",
    "sindhi",
    "sinhala",
    "slovak",
    "slovenian",
    "somali",
    "spanish",
    "sundanese",
    "swahili",
    "swedish",
    "tajik",
    "tamil",
    "telugu",
    "thai",
    "turkish",
    "ukrainian",
    "urdu",
    "uyghur",
    "uzbek",
    "vietnamese",
    "welsh",
    "xhosa",
    "yiddish",
    "yoruba",
    "zulu",
  ]);
  const [copied, SetCopied] = useState(false);
  const [LanguageChoose, SetLanguageChoose] = useState(false);
  const [MessageLoading, SetMessageLoading] = useState(true);
  const [LanguageSelected, SetLanguageSelected] = useState("");
  const [Message, SetMessage] = useState("");
  useEffect(() => {
    SetMessage(message);
    SetMessageLoading(false);
  }, []);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      SetCopied(false);
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);
  const HandelTranslateToggle = () => {
    SetLanguageChoose(!LanguageChoose);
  };

  const RequestTranslatedText = (mess) => {
    if (mess !== "") {
      SetMessageLoading(true);
      const url = BASEURL_Translation + "?sentence=" + Message + "&lang=" + mess;
      console.log(url)
      fetch(url,{
        method: "POST",
        headers: {
          "accept": "application/json",
        }}).then((r) => r.json()).then((response) => {
          console.log("Response=>>>>>",response);
          SetMessage(response);
          SetMessageLoading(false);
        }).catch((e) => {
          console.log("Error=>>>>>",e);
          SetMessageLoading(false);
        });
    }
  };
  const HandelTranslation = (e) => {
    SetLanguageSelected(e.target.value);
    RequestTranslatedText(e.target.value);
  };
  return (
    <>
      <div className="MessageRecievdedMain">
        <div className="MessageRecievdedInner">
          {!MessageLoading ? (
            <>
              {reactStringReplace(Message, "\\\\", (match, i) => (
                <br />
              ))}

              <div className="RecievdedActionDiv">
                <CopyToClipboard text={message} onCopy={() => SetCopied(true)}>
                  <button className="RecievdedActionButton">
                    <FontAwesomeIcon icon={faCopy} size="xl" color="#fff" />
                    <p className="RecievdedActionButtonP">
                      {copied ? "copied 👍🏻" : "copy"}
                    </p>
                  </button>
                </CopyToClipboard>
                {!LanguageChoose ? (
                  <button
                    className="RecievdedActionButton"
                    type="select"
                    onClick={() => HandelTranslateToggle()}
                  >
                    <FontAwesomeIcon icon={faLanguage} size="xl" color="#fff" />
                    <p className="RecievdedActionButtonP"> translate</p>
                  </button>
                ) : (
                  <>
                    <FormControl sx={{ borderColor: "#fff" }}>
                      <NativeSelect
                        inputProps={{
                          name: "Select Language To Translate",
                          id: "uncontrolled-native",
                        }}
                        style={{
                          color: "#fff",
                          borderColor: "#fff",
                          fontSize: 10,
                        }}
                        value={LanguageSelected}
                        label="Language"
                        onChange={(e) => HandelTranslation(e)}
                      >
                        {Languages?.map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </NativeSelect>
                    </FormControl>
                    <button
                      className="RecievdedActionButton ml-1-2"
                      type="select"
                      onClick={() => HandelTranslateToggle()}
                    >
                      <FontAwesomeIcon icon={faXmark} size="xl" color="#fff" />
                      <p className="RecievdedActionButtonP"> cancel</p>
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <ThreeDots
              height="20"
              width="20"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export const MessageRecievdedLoading = () => {
  return (
    <>
      <div className="MessageRecievdedMain">
        <div className="MessageRecievdedInner">
          <ThreeDots
            height="20"
            width="20"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      </div>
    </>
  );
};

MessageRecievded.propTypes = {
  message: PropTypes.string,
  Languages: PropTypes.object,
  first: PropTypes.bool,
};

MessageSent.propTypes = {
  message: PropTypes.string,
};

const PreferLangMainDiv = () => {
  return <div className="PreferLangMainDiv"></div>;
};
