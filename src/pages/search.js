import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
// import NavBarFooter from "../components/NavBarFooter/NavBarFooter";
// import ScrollToTop from "../components/scroll-to-top";
import SearchResults from "../components/SearchResults/SearchResults";
import SearchResultsImages from "../components/SearchResults/SearchResultsImages";
import SearchResultsVideos from "../components/SearchResults/SearchResultsVideos";
import SearchTypeHeader from "../components/SearchResults/SearchTypeHeader";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import Layout from "../layouts/index";
import SearchHeader from "../layouts/SearchHeader";
import ChatBotSuggestions from "../components/ChatBotSuggestions/ChatBotSuggestions";
import AITools from "../components/AITools/AITools";

const SearchPage = () => {
    const [query, SetQuery] = React.useState("");
    const [AiMode, SetAiMode] = useState(null)
    const [searchType, setSearchType] = useState("general");

    const history = useHistory();

    const SetAiModeOption = (option) => {
        if (option) {
            SetAiMode(option)
        }
        else if (option === null) {
            SetAiMode(option)
        }
    }

    const handleSearchType = (value) => {
        setSearchType(value);
        console.log(value);
    };

    const RetrieveQuery = () => {
        var h = window.location.href;
        var q = h.split("search?q=")[1];
        if (!q.replace(/\s/g, "").length) {
            history.push("/", { replace: true });
        } else {
            SetQuery(q);
        }
    };
    const InputChanged = (q) => {
        SetQuery(q);
    };

    React.useEffect(() => {
        RetrieveQuery();
    }, []);
    return (
        <React.Fragment style={{ height: "100vh" }}>
            <Layout>
                <SEO title="Ssebowa Search" />
                <meta
                    name="description"
                    content="Ssebowa turns your searches to trees, food for hungry children and sanitary  pads for girls without pads. Search now to mitigate climate change and change lives."
                />
                {AiMode !== null ?
                    <AITools mode={AiMode} SetAiModeOption={SetAiModeOption} />
                    :
                    <></>
                }
                <div className="wrapper">
                    <div className="hero-shape1 navbar fixed-top">
                        <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`} alt="shape" />
                    </div>
                    <SearchHeader query={query} InputChanged={InputChanged} />
                    {/*<SearchTypeHeader handleSearchType={handleSearchType} />*/}
                    <div className="results-container">
                        <ChatBotSuggestions callAiToolWithMode={SetAiModeOption} />
                        <SearchResults query={query} />
                        <SearchResultsImages query={query} />
                        <SearchResultsVideos query={query} />
                    </div>
                    {/* <NavBarFooter></NavBarFooter> */}
                    {/* <ScrollToTop /> */}
                    {/*<StickyChatBot />*/}
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SearchPage;
