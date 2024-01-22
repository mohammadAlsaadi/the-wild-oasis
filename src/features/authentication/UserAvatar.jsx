import styled from "styled-components";
import { useUser } from "./useUser";
import { useNavigate } from "react-router-dom";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const StyledClickAvatar = styled.button`
  border: none;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: var(--color-grey-100);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;
function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const navigate = useNavigate();
  return (
    <StyledClickAvatar onClick={() => navigate("account")}>
      <StyledUserAvatar>
        <Avatar
          alt={`avatar of ${fullName}`}
          src={avatar || "default-user.jpg"}
        />
        <span>{fullName}</span>
      </StyledUserAvatar>
    </StyledClickAvatar>
  );
}

export default UserAvatar;
