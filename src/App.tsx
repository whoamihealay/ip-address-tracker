import { useEffect, useState } from "react";
import { toast, ToastContainer, ToastContent } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

import { CardInfo, SearchBar, Background, Footer, Map } from "./components/";

import { ApiIpData } from "./interfaces";
import {
  CardStyled,
  Container,
  FlexCol,
  H1,
  Main,
  Image,
} from "./components/styles";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";
import { LatLngExpression } from "leaflet";

function App() {
  const [ip, setIp] = useState<string | null>(null);
  const TOKEN = import.meta.env.VITE_API_KEY;
  const APIURL =
    `/api/v2/country,city?apiKey=${TOKEN}` + (ip ? `&ipAddress=${ip}` : "");
  const [loading, setLoading] = useState(true);

  const [ipData, setIpData] = useState<ApiIpData>(null);

  useEffect(() => {
    const fetchIps = async () => {
      setLoading(true);
      try {
        const res = await axios({
          url: APIURL,
          method: "get",
          baseURL: "https://geo.ipify.org",
        });

        if (res.statusText === "OK") {
          setIpData(res.data);
          setLoading(false);
        }
      } catch (error: any) {
        toast.error(error || "An error occured");
      }
    };

    fetchIps();
  }, [ip]);

  return (
    <>
      <Main>
        <Container>
          <H1>IP Address Tracker</H1>
          <FlexCol>
            <SearchBar setIp={setIp} />
            <CardStyled>
              {!loading ? <CardInfo ipData={ipData} /> : <ScaleLoader />}
            </CardStyled>
          </FlexCol>
        </Container>
        <Background location={ipData?.location}>
          <Image src="assets/pattern-bg.png" alt="" />
          <Map location={ipData?.location} />
        </Background>
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
