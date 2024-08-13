import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContext from "./context/App.context";
import Root from "./components/Root/Root";
import LatestNews from "./components/LatestNews/LatestNews";
import LatestNewsDetails from "./components/LatestNewsDetails/LatestNewsDetails";
import National from "./Pages/National";
import NationalDetails from "./Pages/NationalDetails";
import NotFound from "./Pages/NotFound";
import Politics from "./Pages/Politics";
import PoliticsDetails from "./Pages/PoliticsDetails";
import PrivacyPage from "./Pages/PrivacyPage/PrivacyPage";
import TermsOfUsePage from "./Pages/TermsOfUsePage/TermsOfUsePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import TeamPage from "./Pages/TeamPage/TeamPage";
import EconomyPage from "./Pages/EconomyPage/EconomyPage";
import EconomyDetails from "./Pages/EconomyDetails/EconomyDetails";
import AdvertisePage from "./Pages/AdvertisePage/AdvertisePage";
import InternationalPage from "./Pages/InternationalPage/InternationalPage";
import InternationalDetails from "./Pages/InternationalDetails/InternationalDetails";
import SportsPage from "./Pages/SportsPage/SportsPage";
import SportsDetails from "./Pages/SportsDetails/SportsDetails";
import EntertainmentPage from "./Pages/EntertainmentPage/EntertainmentPage";
import EntertainmentDetails from "./Pages/EntertainmentDetails/EntertainmentDetails";
import DistrictPage from "./Pages/DistrictPage/DistrictPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root></Root>,
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    path: "/",
                    element: <LatestNews></LatestNews>,
                },
                {
                    path: "/latest-news/:id",
                    element: <LatestNewsDetails></LatestNewsDetails>,
                    loader: () => fetch("latestNews.json"),
                },
            ],
        },
        {
            path: "/national",
            element: <National></National>,
        },
        {
            path: "/national/:id",
            element: <NationalDetails></NationalDetails>,
            loader: () => fetch("national.json"),
        },
        {
            path: "/politics",
            element: <Politics></Politics>,
        },
        {
            path: "/politics/:id",
            element: <PoliticsDetails></PoliticsDetails>,
            loader: () => fetch("politics.json"),
        },
        {
            path: "/privacy",
            element: <PrivacyPage></PrivacyPage>,
        },
        {
            path: "/terms-of-use",
            element: <TermsOfUsePage></TermsOfUsePage>,
        },
        {
            path: "/contact",
            element: <ContactPage></ContactPage>,
        },
        {
            path: "/about-us",
            element: <AboutUsPage></AboutUsPage>,
        },
        {
            path: "/team",
            element: <TeamPage></TeamPage>,
        },
        {
            path: "/economy",
            element: <EconomyPage></EconomyPage>,
        },
        {
            path: "/economy/:id",
            element: <EconomyDetails></EconomyDetails>,
            loader: () => fetch("economy.json"),
        },
        {
            path: "/advertise",
            element: <AdvertisePage></AdvertisePage>,
        },
        {
            path: "/international",
            element: <InternationalPage></InternationalPage>,
        },
        {
            path: "/international/:id",
            element: <InternationalDetails></InternationalDetails>,
            loader: () => fetch("international.json"),
        },
        {
            path: "/sports",
            element: <SportsPage></SportsPage>,
        },
        {
            path: "/sports/:id",
            element: <SportsDetails></SportsDetails>,
            loader: () => fetch("sports.json"),
        },
        {
            path: "/entertainment",
            element: <EntertainmentPage></EntertainmentPage>,
        },
        {
            path: "entertainment/:id",
            element: <EntertainmentDetails></EntertainmentDetails>,
            loader: () => fetch("entertainment.json"),
        },
        {
            path: "/country-map",
            element: <DistrictPage></DistrictPage>,
        },
    ]);
    return (
        <AppContext>
            <RouterProvider router={router} />
        </AppContext>
    );
};

export default App;
