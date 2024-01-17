import classes from "./DropDown.module.scss";
import { userInfo } from "../InfoChip/info";
import InfoChip from "../InfoChip";
import { IDropDown, IUserData } from "./IDropDown";
import { Fragment, useCallback, useEffect, useState } from "react";
const DropDown = (props: IDropDown) => {
  const { userData, onClickChip } = props;

  const handleOnClickInfoChip = (user: IUserData) => {
    user && onClickChip(user);
  };

  return (
    <Fragment>
      {userData.length ? (
        <div className={classes.dropDownWrapper}>
          {userData?.map((user: any) => {
            return (
              <div className={classes.chipWrapper}>
                <InfoChip
                  userdata={user}
                  onClick={() => handleOnClickInfoChip(user)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default DropDown;
