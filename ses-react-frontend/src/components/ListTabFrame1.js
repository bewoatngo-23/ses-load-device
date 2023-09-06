import { Tabs } from "antd";
import Context from "../store/Context";
import React, { useContext, useRef, useState } from "react";
import S3MDataLoadFrame1 from "./S3MDataLoadFrame1";
import { addtab, removetab } from "../store/Actions";
import { NotficationError } from "./Notification";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const ListTabFrame1 = () => {
  const [state, dispatch] = useContext(Context);
  const [activeKey, setActiveKey] = useState(state.frame1[0].key);
  const newTabIndex = useRef(2);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`;
    const tab = {
      label: `New Frame`,
      children: <S3MDataLoadFrame1 data={newActiveKey} />,
      key: newActiveKey,
      status: false,
    };
    dispatch(addtab(tab));
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    console.log(targetKey);
    if (state.frame1.length == 1) {
      NotficationError("Không thể xóa");
      return;
    }
    console.log(state.frame1.filter((a) => a.key == targetKey)[0].key);
    for (let i = 0; i < state.frame1.length; i++) {
      if (targetKey == state.frame1[i].key) {
        if (i == 0) {
          setActiveKey(state.frame1[i + 1].key);
        } else {
          setActiveKey(state.frame1[i - 1].key);
        }
      }
    }

    dispatch(removetab(targetKey));
  };
  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  console.log(activeKey);
  return (
    <>
      <ToastContainer />
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={state.frame1}
      />
    </>
  );
};

export default ListTabFrame1;
