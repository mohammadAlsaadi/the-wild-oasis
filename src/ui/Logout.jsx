import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "./SpinnerMini";
function Logout() {
  const { logout, isLogingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLogingOut} onClick={() => logout()}>
      {isLogingOut ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
