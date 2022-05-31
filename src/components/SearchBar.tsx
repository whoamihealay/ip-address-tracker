import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { ArrowIcon } from "../assets";
import { isValidIpAdress } from "../validations/ipAddress";

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  width: 100%;

  @media ${(props) => props.theme.device.sm} {
    max-width: 25em;
  }
`;

const SearchInput = styled.input`
  margin: 0.3rem;
  padding: 0.7rem;
  width: 100%;
  background-color: transparent;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  cursor: pointer;
  outline: 0px solid transparent;

  &:focus {
    outline-color: ${(props) => props.theme.colors.darkGray};
  }
`;

const SearchButton = styled.button`
  background-color: black;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
`;

interface IProps {
  setIp: (arg0: string) => void;
}

const SearchBar = ({ setIp }: IProps) => {
  const [text, setText] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.currentTarget.value.trim());
  };

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) {
      const validIpAdress = isValidIpAdress(text);

      if (!validIpAdress) {
        toast.error("Invalid IP format");
        return;
      }
    }

    setIp(text);
  };

  return (
    <>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchInput
          type="text"
          onChange={handleOnChange}
          placeholder="Locate any IP address"
          value={text}
        />
        <SearchButton>
          <ArrowIcon />
        </SearchButton>
      </SearchForm>
    </>
  );
};

export default SearchBar;
