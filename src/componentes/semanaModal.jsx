import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export function SemanaModal({show, close, crear, editar, geditar}){

    const [formdata, setFromdata] = useState({
        nsemana:"",
        lunes:"",
        martes:"",
        miercoles:"",
        jueves:"",
        viernes:"",
        sabado:"",
        domingo:""
    });

    useEffect(()=>{
        if(editar){
            setFromdata(editar);
            console.log("Hola");
            console.log(editar);
        } else {
            limpiar();
        }
    }, [editar])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(editar){
            geditar(formdata);
        } else {
            crear(formdata);
        }
        close();
        limpiar();
    }

    const limpiar = () => {
        setFromdata({
            nsemana:"",
            lunes:"",
            martes:"",
            miercoles:"",
            jueves:"",
            viernes:"",
            sabado:"",
            domingo:"",
        });
    }

    return(
        <div>
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Semana</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Semana</Form.Label>
                        <Form.Control 
                            type="text"
                            name="nsemana"
                            placeholder="Ingrese la semana"
                            value={formdata.nsemana}
                            onChange={(e) => setFromdata({...formdata, nsemana: e.target.value})}
                            
                        />

                        <Form.Label>Lunes</Form.Label>
                        <Form.Control 
                            type="text"
                            name="lunes"
                            placeholder="Ingrese datos del lunes"
                            value={formdata.lunes}
                            onChange={(e) => setFromdata({...formdata, lunes: e.target.value})}
                        />

                        <Form.Label>Martes</Form.Label>
                        <Form.Control 
                            type="text"
                            name="martes"
                            placeholder="Ingrese datos del martes"
                            value={formdata.martes}
                            onChange={(e)=> setFromdata({...formdata, martes: e.target.value})}
                        />

                        <Form.Label>Miercoles</Form.Label>
                        <Form.Control
                            type="text"
                            name="miercoles"
                            placeholder="Ingrese datos del miercoles"
                            value={formdata.miercoles}
                            onChange={(e)=> setFromdata({...formdata, miercoles: e.target.value})}
                        />

                        <Form.Label>Jueves</Form.Label>
                        <Form.Control
                            type="text"
                            name="jueves"
                            placeholder="Ingrese datos del jueves"
                            value={formdata.jueves}
                            onChange={(e)=> setFromdata({...formdata, jueves: e.target.value})}
                        />

                        <Form.Label>Viernes</Form.Label>
                        <Form.Control
                            type="text"
                            name="viernes"
                            placeholder="Ingrese datos del viernes"
                            value={formdata.viernes}
                            onChange={(e)=> setFromdata({...formdata, viernes: e.target.value})}
                        />

                        <Form.Label>Sabado</Form.Label>
                        <Form.Control
                            type="text"
                            name="sabado"
                            placeholder="Ingrese datos del sabado"
                            value={formdata.sabado}
                            onChange={(e)=> setFromdata({...formdata, sabado: e.target.value})}
                        />

                        <Form.Label>Domingo</Form.Label>
                        <Form.Control
                            type="text"
                            name="domingo"
                            placeholder="Ingrese datos del domingo"
                            value={formdata.domingo}
                            onChange={(e)=> setFromdata({...formdata, domingo: e.target.value})}
                        />
                        <Button type="submit">Crear</Button>
                        <Button variant="secondary" onClick={close}>Cerrar</Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}