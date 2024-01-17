import React, { Fragment, useEffect, useState } from "react";
import classes from "./Pills.module.scss";
const Pills = (props: any) => {
  const { users, setclickableChip } = props;
  const [onclickcross, setOnClickCross] = useState<boolean>(false);
  const [targetIndexArray, setTargetIndexArray] = useState<number[]>([]);

  const handleCrossClick = (targetIndex: number) => {
    console.log(targetIndex);
    setTargetIndexArray((prev) => [...prev, targetIndex]);
    setOnClickCross(true);
    // setclickableChip(
    //   users.filter((item: number, index: number) => item.name !== user.name)
    // );
    //  setUserData(userData.filter((item) => item.name !== user.name));
  };
  console.log(users);

  return (
    <Fragment>
      {users.map((user: any, index: number) => {
        return (
          <>
            {user && (
              <div
                className={`${classes.pills} ${
                  onclickcross && index + 1 === targetIndexArray[index + 1]
                    ? classes.targetElementNone
                    : ""
                }`}
                key={index + 1}
              >
                <img src={user.img} alt="" className={classes.profileImg} />
                {user.name}
                <div onClick={() => handleCrossClick(index + 1)}>X</div>
              </div>
            )}
          </>
        );
      })}
    </Fragment>
  );
};

export default Pills;
