import React, { useEffect, useState } from "react";
import classes from "./PickUser.module.scss";
import DropDown from "../DropDown";
import { userInfo } from "../InfoChip/info";
import Pills from "../Pills/Pills";

const PickUser = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState(userInfo);
  const [clickableChip, setclickableChip] = useState<any[]>([]);

  const search = (value: string) => {
    const searchResult =
      value && userInfo.filter((element) => element.name.includes(value));
    searchResult && setUserData(searchResult);
  };

  const handleOnChange = (value: string) => {
    value ? setDropDown(true) : setDropDown(false);
    setSearchValue(value);
    search(value);
  };

  const onClickInput = () => {
    setDropDown(true);
    setUserData(userInfo);
  };

  const onClickChip = (user: any) => {
    setclickableChip((prev) => [...prev, user]);
    setUserData(userData.filter((item) => item.name !== user.name));
  };

  return (
    <div className={classes.pickUserContainer}>
      <div className={classes.inputWrapperContainer}>
        <Pills users={clickableChip} setclickableChip={setclickableChip} />
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Add new User..."
          onClick={onClickInput}
          onChange={(event: any) => handleOnChange(event.target.value)}
        />
      </div>
      {dropDown && <DropDown onClickChip={onClickChip} userData={userData} />}
    </div>
  );
};

export default PickUser;
