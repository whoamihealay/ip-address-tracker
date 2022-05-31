export type ApiIpData = {
  ip: string;
  location: ApiLocation;
  isp: string;
};

export type ApiLocation = {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
};
