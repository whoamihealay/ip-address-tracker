import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

import { CardInfo, SearchBar, Background, Footer } from "./components/";

import useFetch from "./hooks/useFetch";
import { ApiIpData } from "./interfaces";
import { CardStyled, Container, FlexCol, H1, Main } from "./components/styles";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [ip, setIp] = useState<string>("");
  const TOKEN = import.meta.env.VITE_API_KEY;
  const APIURL = `/api/v2/country,city?apiKey=${TOKEN}&ipAddress=${ip}`;

  const [ipData, setIpData] = useState<ApiIpData>({
    ip: "",
    location: {
      country: "",
      region: "",
      city: "",
      lat: 0,
      lng: 0,
      postalCode: "",
      timezone: "",
    },
    isp: "",
  });

  const { loading, error, value } = useFetch(APIURL, {}, [ip]);

  useEffect(() => {
    if (value) {
      setIpData(value);
    }
  }, [value]);

  useEffect(() => {
    if (error) {
      toast.error(error || "An error occured");
    }
  }, [error]);

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
        <Background loading={loading} location={ipData.location} />
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
