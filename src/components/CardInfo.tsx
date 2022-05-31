import styled from "styled-components";
import { ApiIpData } from "../interfaces";

interface IProps {
  ipData: ApiIpData;
}

const ListTitle = styled.li`
  color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fsize.xs};
  font-weight: 700;
  text-transform: uppercase;
`;

const ListContent = styled.li`
  font-weight: 500;
  padding-bottom: 1rem;
  font-size: ${(props) => props.theme.fsize.lg};
`;

const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(props) => props.theme.device.md} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Divider = styled.div`
  display: none;
  border-left: 1px solid ${(props) => props.theme.colors.darkGray};
  height: 50px;
  margin: 1rem;
  opacity: 0.5;

  @media ${(props) => props.theme.device.md} {
    display: block;
  }
`;

const CardInfo = ({ ipData }: IProps) => {
  const { ip, location, isp } = ipData;

  return (
    <>
      <CardList>
        <div>
          <ListTitle>IP Address</ListTitle>
          <ListContent>{ip}</ListContent>
        </div>
        <Divider />
        <div>
          <ListTitle>Location </ListTitle>
          <ListContent>
            {location.city}, {location.region} {location.postalCode}
          </ListContent>
        </div>
        <Divider />
        <div>
          <ListTitle>Timezone UTC</ListTitle>
          <ListContent>{location.timezone}</ListContent>
        </div>
        <Divider />
        <div>
          <ListTitle>ISP</ListTitle>
          <ListContent>{isp}</ListContent>
        </div>
      </CardList>
    </>
  );
};

export default CardInfo;
