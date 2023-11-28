import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Layouts/Navbar";
import Main from "../components/Layouts/Main";
import Footer from "../components/Layouts/Footer";

const IndexPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Genshin Prodigy</title>
      </Helmet>
      <Navbar />
      <Main />
      <Footer />
    </HelmetProvider>
  );
};

export default IndexPage;
