import React from "react";
import { IInfoChip } from "./IInfoChip";
import classes from "./InfoChip.module.scss";
const InfoChip = (props: IInfoChip) => {
  const { userdata, onClick } = props;
  const { img, name, mail } = userdata;
  return (
    <div className={classes.infoChipWrapper} onClick={onClick}>
      <img src={img} alt="" className={classes.profileImg} />
      <div className={classes.info}>
        <div className={classes.name}>{name}</div>
        <div>{mail}</div>
      </div>
    </div>
  );
};

export default InfoChip;
