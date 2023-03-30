import React, { useState, useEffect } from "react";
import styles from "./AITools.module.css";
import { faMagnifyingGlass, faMicrophone, faCode, faAlignLeft, faKeyboard, faTimes, faCopy, faLanguage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASEURL_AI } from "../../connection/BaseUrl";
import { Dna, ThreeDots } from "react-loader-spinner";
import reactStringReplace from "react-string-replace";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { FreeMode } from "swiper";
import TextareaAutosize from 'react-textarea-autosize';
import CopyToClipboard from "react-copy-to-clipboard";
import { FormControl, NativeSelect } from "@material-ui/core";
import { BASEURL_Translation } from "../../connection/BaseUrl";
function AITools({ SetAiModeOption, mode }) {
    const [Results, SetResults] = useState([]);
    const [ResultReady, SetResultReady] = useState(false);
    const [CurrentState, SetCurrentState] = useState(false);


    const SubmitAiSearchRequest = (mode, query) => {
        const url = BASEURL_AI + "ai?keyword=" + query + "&option=" + mode;
        SetCurrentState("loading");
        var usrmsg = {
            role: 0,
            message: query,
        };
        SetResults((oldArray) => [...oldArray, usrmsg]);
        fetch(url, { method: "POST" })
            .then((r) => r.json())
            .then((response) => {
                var msg = {
                    role: 1,
                    message: response,
                };
                // RefineRequests(response)
                SetResultReady(true);
                SetResults((oldArray) => [...oldArray, msg]);
            SetCurrentState(false);
            })
            .catch((e) => {
                SetCurrentState("error");
            });
    };
    return (
        <div className={styles.AiToolsWrapper}>
            <div className={styles.AiToolsMain}>
                <button className={styles.AiToolsCrossBtn} onClick={() => SetAiModeOption(null)}>
                    <FontAwesomeIcon icon={faTimes} className="pt-1 pl-1" size="2x" color="red" />
                </button>
                <div className={styles.AIToolsTopWrapper}>
                    <h1 className={styles.AiToolsH1}>SSEBOWA AI TOOLS</h1>
                </div>
                <div className={styles.AiResultContainerBig}>
                    {Results.length > 0? (
                        <>
                            {Results.map((item, i) => {
                                if (item.role === 0) {
                                    return <RequestMessage text={item.message} />;
                                } else if (item.role === 1) {
                                    return <ResponseMessage text={item.message} />;
                                }
                            })}
                        </>
                    ) : (
                        <>START TYPING YOU QUERIES TO SEE AI HOW OUR AI WORKS</>
                    )}
                    {CurrentState === 'loading' ?<LoadingeMessage /> : CurrentState ==='error'? <ErrorMessage/> :<></>}
                </div>
                <div className={styles.AiActionContainerSmall}>
                    <div className={styles.AiToolsSelectDiv}>
                        <Swiper
                            freeMode={{ sticky: false, enabled: true }}
                            spaceBetween={10}
                            grabCursor={true}
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            allowTouchMove={true}
                            observer={true}
                            pagination={false}
                            modules={[FreeMode]}
                            initialSlide={mode}
                            mousewheel={{ forceToAxis: true }}
                            className="mySwiper"
                        >
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={1} selected={mode == 1} text={"Write a letter email for"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={2} selected={mode == 2} text={"Write a poem about"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={3} selected={mode == 3} text={"Write code for"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={4} selected={mode == 4} text={"Calculate"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={1} selected={mode == 1} text={"Write an essay about"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={5} selected={mode == 5} text={"Write song for"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={6} selected={mode == 6} text={"Write an article for"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AiToolSelect SetAiModeOption={SetAiModeOption} option={7} selected={mode == 7} text={"Write scientific equation for"} />
                        </SwiperSlide>
                        </Swiper>
                    </div>
                    <AiInputField mode={mode} SubmitAiSearchRequest={SubmitAiSearchRequest} />
                </div>
            </div>
        </div>
    );
}

export default AITools;

const AiToolSelect = ({ text, selected, SetAiModeOption, option }) => {
    return (
        <button className={selected ? styles.AiToolsSelectDark : styles.AiToolsSelect} onClick={() => SetAiModeOption(option)}>
            {text}
        </button>
    );
};

const AiInputField = ({ mode, SubmitAiSearchRequest }) => {
    const [inputVal, SetInputVal] = useState("");
    const [inpPlaceHolder, SetInpPlaceHolder] = useState("");
    useEffect(() => {
        if (mode == 3) {
            SetInpPlaceHolder("Write Code for ");
        } else if (mode == 2) {
            SetInpPlaceHolder("Write a poem on  ");
        } else if (mode == 1) {
            SetInpPlaceHolder("Write a letter email or essay for ");
        } else if (mode == 4) {
            SetInpPlaceHolder("Calculate ");
        }else if (mode == 5) {
            SetInpPlaceHolder("Write song for ");
        }else if (mode == 6) {
            SetInpPlaceHolder("Write an article for ");
        }else if (mode == 7) {
            SetInpPlaceHolder("Write scientific equation for ");
        }
    }, [mode]);
    const onChangeText = (e) => {
        SetInputVal(e.target.value);
    };
    const SubmitSearch = (e) => {
        e.preventDefault();
        var text = inpPlaceHolder + inputVal;
        SubmitAiSearchRequest(mode, text);
    };

    return (
        <form
            className={styles.AiInputBox}
            onSubmit={(e) => {
                SubmitSearch(e);
                SetInputVal("");
            }}
        >
            <TextareaAutosize maxRows={5}
                              className={styles.AiInputField}
                              onChange={(e) => onChangeText(e)}
                              value={inputVal}
                              placeholder={`${inpPlaceHolder}...`} />

            <button className={styles.AiSubmitBtn} type={"submit"}>
                Submit
            </button>
        </form>
    );
};

const ResponseMessage = ({ text }) => {


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
      SetMessage(text);
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
        fetch(url,{
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
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
      <div className={styles.ResponseMessage}>
          <div className={styles.ResponseMessageInner}>
         {!MessageLoading?     
       <>
            {reactStringReplace(Message, "<br>", (match, i) => (
              <br/>
            ))}

            <div className={styles.RecievdedActionDiv}>
              <CopyToClipboard text={Message} onCopy={() => SetCopied(true)}>
                <button className={styles.RecievdedActionButton}>
                  <FontAwesomeIcon icon={faCopy} size="xl" color="#181c51" />
                  <p className={styles.RecievdedActionButtonP}>
                    {copied ? "copied 👍🏻" : "copy"}
                  </p>
                </button>
              </CopyToClipboard>
              {!LanguageChoose ? (
                <button
                  className={styles.RecievdedActionButton}
                  type="select"
                  onClick={() => HandelTranslateToggle()}
                >
                  <FontAwesomeIcon icon={faLanguage} size="xl" color="#181c51" />
                  <p className={styles.RecievdedActionButtonP}> translate</p>
                </button>
              ) : (
                <>
                  <FormControl sx={{ borderColor: "#181c51" }}>
                    <NativeSelect
                      inputProps={{
                        name: "Select Language To Translate",
                        id: "uncontrolled-native",
                      }}
                      style={{
                        color: "#181c51",
                        borderColor: "#181c51",
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
                    className={styles.RecievdedActionButton}
                    type="select"
                    onClick={() => HandelTranslateToggle()}
                  >
                    <FontAwesomeIcon icon={faXmark} size="xl" color="#181c51" />
                    <p className={styles.RecievdedActionButtonP}> cancel</p>
                  </button>
                </>
              )}
            </div>
          </>: <ThreeDots
            height="20"
            width="20"
            radius="9"
            color="#181c51"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />}
              </div>
      </div>
  );
};

const RequestMessage = ({ text }) => {
    return (
        <div className={styles.RequestMessage}>
            <div className={styles.RequestMessageInner}>{text}</div>
        </div>
    );
};

const LoadingeMessage = () => {
    return (
        <div className={styles.LoadingeMessage}>
            <div className={styles.LoadingeMessageInner}>
                <Dna visible={true} height="20" width="20" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
            </div>
        </div>
    );
};

const ErrorMessage = () => {
    return (
        <div className={styles.ErrorMessage}>
            <div className={styles.ErrorMessageInner}>
                An Error Occured Please Try again after some time
            </div>
        </div>
    );
};
