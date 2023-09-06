import React, { useContext, useEffect, useState } from "react";
import Context from "../../store/Context";
import { addProduct, editProduct, removeProduct } from "../../store/Actions";
import { Button, Input, Table } from "antd";

function ReduxExample() {
  const [state, dispatch] = useContext(Context);
  const add = (product) => {
    dispatch(addProduct(product));
    setName("");
  };

  const remove = (product) => {
    console.log(product.id);
    dispatch(removeProduct(product));
  };
  const [id, setId] = useState(0);
  const edit = (product) => {
    setName(product.name);
    setId(product.id);
  };
  const Update = (id) => {
    const pro = {
      id: id,
      name: name,
    };
    dispatch(editProduct(pro));
  };

  const [name, setName] = useState();
  const product = {
    id: Math.floor(Math.random() * 100),
    name: name,
  };
  const handelChangeInput = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      render: (product) => {
        return (
          <>
            <Button onClick={() => remove(product)}>remove</Button>
            <Button className="ms-2" onClick={() => edit(product)}>
              edit
            </Button>
          </>
        );
      },
    },
  ];
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((count) => count + 1);
    }, 3);

    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>ReduxExample Example</h1>
      <Input
        style={{ width: "500px" }}
        onChange={(event) => handelChangeInput(event)}
        value={name}
      />
      <Button className="ms-2" onClick={() => add(product)}>
        ADD
      </Button>
      <Button className="ms-2" onClick={() => Update(id)}>
        Update
      </Button>
      <Table columns={columns} dataSource={state.products} />
    </>
  );
}
export default ReduxExample;
