import { Helmet, HelmetProvider } from "react-helmet-async";
import { ScrollRestoration, useParams } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";
import DetailLayout from "../components/Layouts/DetailLayout";
import Footer from "../components/Layouts/Footer";

const DetailCharacterPage = () => {
  const { name } = useParams();

  const formattedName = name
    .toLowerCase()
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${formattedName} - Genshin Prodigy`}</title>
      </Helmet>
      <ScrollRestoration />
      <Navbar />
      <DetailLayout />
      <Footer />
    </HelmetProvider>
  );
};

export default DetailCharacterPage;
