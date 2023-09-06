import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../store/Context";
import { ToastContainer } from "react-toastify";
import { NotficationError } from "./Notification";
import S3MDataLoadFrame2 from "./S3MDataLoadFrame2";
import { Tabs } from "antd";
import { addtab2, removetab2 } from "../store/Actions";
const ListTabFrame2 = () => {
  const [state, dispatch] = useContext(Context);
  const [activeKey, setActiveKey] = useState(state.frame2[0].key);
  const newTabIndex = useRef(2);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`;
    const tab = {
      label: `New Frame2`,
      children: <S3MDataLoadFrame2 data={newActiveKey} />,
      key: newActiveKey,
      status: false,
    };
    dispatch(addtab2(tab));
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    console.log(targetKey);
    if (state.frame2.length == 1) {
      NotficationError("Không thể xóa");
      return;
    }
    console.log(state.frame2.filter((a) => a.key == targetKey)[0].key);
    for (let i = 0; i < state.frame2.length; i++) {
      if (targetKey == state.frame2[i].key) {
        if (i == 0) {
          setActiveKey(state.frame2[i + 1].key);
        } else {
          setActiveKey(state.frame2[i - 1].key);
        }
      }
    }

    dispatch(removetab2(targetKey));
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
        items={state.frame2}
      />
    </>
  );
};

export default ListTabFrame2;
