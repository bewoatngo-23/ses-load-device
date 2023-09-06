import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useState } from "react";
function EventHandling() {
    
    const [phones, setPhones] = useState([
        {   
            id: 1,
            name: 'Iphone X',
            price: 900,
            quantity: 0
        },
        {
            id: 2,
            name: 'Samsung S9',
            price: 800,
            quantity: 0
        },  
        {
            id: 3,
            name: 'Nokia 1280',
            price: 620,
            quantity: 0
        }
    ])
    const handelClickButtton = (phone) => {
        phones.map(p => {
            if (p.id == phone.id) {
                p.quantity++
            }
        })
        update(phones)
    }
    const [total, setTotal] = useState(0);
    const update = (arr) => {
        var a = 0;
        for (const element of arr) {
            a += element.quantity * element.price
        }
        setTotal(a)
    }
    return (
        <>
            <h1 >EventHandling</h1>
            <div className="d-flex justify-content-evenly">
                {phones.map((phone,index) => {
                return (
                    <Card
                    key={index}
                title={phone.name}
                bordered={false}
                style={{
                    width: 300,
                }}
            >
                <p>Price: {phone.price} USD</p>
                <p>Quantity: {phone.quantity}</p>
                <Button
                    style={{paddingBottom: '5px'}}
                    type="primary"
                    icon={<PlusCircleOutlined style={{fontSize:'20px'}} />}
                            onClick={() => handelClickButtton(phone)}
                    />
            </Card>
                )
                })}
                
            </div>
            <h4>Total: {total} USD</h4>
            
        </>
    )
}
export default EventHandling; 