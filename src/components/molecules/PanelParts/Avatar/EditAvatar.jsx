import styles from "./edit-avatar.module.css";
import classChange from "../../../../hooks/classChange";
import { useState } from "react";
import AvatarModal, { AVATARS } from "../../ModalAvatar/AvatarModal";
import userService from "../../../../service/apiAccount";
import useAuth from "../../../../hooks/useAuth";

function EditAvatar() {
  const isMobile = classChange();
  const { user, updateUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = async (avatarKey) => {
    await userService.updateUserAvatar(user.id, { avatar: avatarKey });
    updateUser({ avatar: avatarKey });
  };

  return (
    <article className={styles.wrapperEditAvatar}>
      <h3 className={styles.titleEditAvatar}>Manage your avatar?</h3>
      <div className={styles.fieldBtnChooseAvatar}>
        <button
          className={styles[isMobile ? "liquid_mobile" : "liquid"]}
          onClick={() => setIsOpen(true)}
        >
          Gallery
        </button>
      </div>

      <AvatarModal
        isOpen={isOpen}
        currentAvatar={user.avatar}
        onSelect={handleSelect}
        onClose={() => setIsOpen(false)}
      />
    </article>
  );
}

export default EditAvatar;
