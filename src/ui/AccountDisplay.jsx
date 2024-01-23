import { useState } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import Modal from "./Modal";
import Heading from "./Heading";

const DisplayRow = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const DisplayContainer = styled.div`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 3rem;
`;
const ProfileImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  cursor: pointer;
`;

function AccountDisplay() {
  const { user, isLoading } = useUser();
  const { fullName, avatar } = user?.user_metadata;

  if (isLoading) return <Spinner />;
  return (
    <DisplayRow>
      <Modal>
        <DisplayContainer>
          <Modal.Open opens="profileAvatar">
            <ProfileImage
              src={avatar} // Replace with the actual path or URL
              alt="Profile avatar"
            />
          </Modal.Open>
          <Heading as="h3">{fullName}</Heading>
        </DisplayContainer>
        <Modal.Window name="profileAvatar">
          {isLoading ? <Spinner /> : <img src={avatar} alt="Profile avatar" />}
        </Modal.Window>
      </Modal>
    </DisplayRow>
  );
}

export default AccountDisplay;
