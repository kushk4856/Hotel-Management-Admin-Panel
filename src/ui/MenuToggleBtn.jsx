import ButtonIcon from "./ButtonIcon";
import { HiOutlineBars2 } from "react-icons/hi2";
import SidebarMobile from "./SidebarMobile";
import MobileNavModal from "./MobileNavModal";

const MenuToggleBtn = () => {
  return (
    <div className="menuToggle">
      <MobileNavModal type="nav">
        <MobileNavModal.Open opens="mob-side">
          <ButtonIcon>{<HiOutlineBars2 />}</ButtonIcon>
        </MobileNavModal.Open>
        <MobileNavModal.Window name="mob-side">
          <SidebarMobile />
        </MobileNavModal.Window>
      </MobileNavModal>
    </div>
  );
};

export default MenuToggleBtn;
