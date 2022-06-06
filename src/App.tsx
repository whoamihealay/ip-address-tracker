import { useEffect, useState } from "react";
import { toast, ToastContainer, ToastContent } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";

import { CardInfo, SearchBar, Background, Footer } from "./components/";

import { ApiIpData } from "./interfaces";
import { CardStyled, Container, FlexCol, H1, Main } from "./components/styles";
import ScaleLoader from "react-spinners/ScaleLoader";
import axios from "axios";

function App() {
  const [ip, setIp] = useState<string>("");
  const TOKEN = import.meta.env.VITE_API_KEY;
  const APIURL = `https://geo.ipify.org/api/v2/country,city?apiKey=${TOKEN}&ipAddress=${ip}`;

  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);

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

  // const { loading, error, value } = useFetch(APIURL, {}, [ip]);

  useEffect(() => {
    const fetchIps = async () => {
      setLoading(true);
      try {
        const res = await axios.get(APIURL);

        if (res.statusText === "OK") {
          setValue(res.data);
          setLoading(false);
        }
      } catch (error: any) {
        toast.error(error || "An error occured");
      }
    };

    fetchIps();
  }, [ip]);

  useEffect(() => {
    if (value) {
      setIpData(value);
    }
  }, [value]);

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
