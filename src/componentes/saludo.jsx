import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Saludo(){
    const [num, setNum] = useState(0);

    const aumentar = () => {
        setNum(num + 1);
    }
    
    const restar = () => {
        setNum(num - 1);
    }

    return(
        <div>
            <h1>sas</h1>
            <Button variant="danger" onClick={restar}> - </Button>
            <h2>{num}</h2>
            <Button variant="success" onClick={aumentar}> + </Button>
        </div>
    );
}