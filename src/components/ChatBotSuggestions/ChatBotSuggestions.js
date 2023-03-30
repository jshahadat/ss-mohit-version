import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faCode, faAlignLeft, faCalculator, faMusic, faEquals } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { FreeMode } from "swiper";

const ChatBotSuggestions = ({ callAiToolWithMode }) => {
    const suggestions = [
        {
            mode: 1,
            type: "Write an email",
            icon: faKeyboard,
        },
        {
            mode: 2,
            type: "Write a poem",
            icon: faAlignLeft,
        },
        {
            mode: 3,
            type: "Write code",
            icon: faCode,
        },
        {
            mode: 4,
            type: "Calculate",
            icon: faCalculator,
        },
        {
            mode: 5,
            type: "Write an essay",
            icon: faAlignLeft,
        },
        {
            mode: 6,
            type: "Write song",
            icon: faMusic,
        },{
            mode: 7,
            type: "Write an article",
            icon: faAlignLeft,
        },
        {
            mode: 8,
            type: "Write scientific equation",
            icon: faEquals,
        },

    ];

    /*const fetchChatBotSuggestionsHandler = async () => {
        try {
            const response = await axios.get(`https://chatapi.ssebowa.org/chatbot/${query}`);
            console.log("suggestions results", response.data);
        } catch (err) {
            console.log("error fetching chat bot suggestions", err);
        }
    };*/

    return (
        <section className="chatbot-suggestions">
            <Swiper
                freeMode={{ sticky: false, enabled: true }}
                spaceBetween={10}
                grabCursor={true}
                slidesPerView={"auto"}
                allowTouchMove={true}
                observer={true}
                pagination={false}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {suggestions?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <button className="suggestion-badge" onClick={() => callAiToolWithMode(item.mode)}>
                            <div className="icon-container">
                                <FontAwesomeIcon icon={item.icon} className="icon" />
                            </div>
                            {item.type}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default ChatBotSuggestions;
