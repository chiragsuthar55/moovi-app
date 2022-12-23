import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Components/Banner";
import CardBanner from "../Components/CardBanner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import StoryBanner from "../Components/StoryBanner";
import Subscribe from "../Components/Subscribe";
import { getMoviesData } from "../services";

const HomePage = () => {
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(getMoviesData());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="homePage">
      <Navbar />
      <div>
        <Banner />
        <hr />
        <StoryBanner />
        <hr />
        <CardBanner />
        <hr />
        <Subscribe />
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
