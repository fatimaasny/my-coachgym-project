import styles from "./Home.module.css";

import Header from "../../components/Header/Header";
import MyInformation from "../../components/MyInformation/MyInformation";
import MyDocuments from "../../components/MyDocuments/MyDocuments";
import MyTraining from "../../components/MyTraining/MyTraining";
import MyCompetitions from "../../components/MyCompetitions/MyCompetitions";
import MyGallery from "../../components/MyGallery/MyGallery";
import ContactMe from "../../components/ContactMe/ContactMe";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <MyInformation />
      <MyDocuments />
      <MyCompetitions />
      <MyTraining />
      <MyGallery />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;
