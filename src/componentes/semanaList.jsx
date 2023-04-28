import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { SemanaModal } from "./semanaModal";
import { IoIosAddCircle } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import '../estilos/appli.css';


export function ListaSemana(){
    const [datos, setDatos] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [semanaEdit, setSemanaEdit] = useState(null);


    useEffect(()=> {
        axios
            .get('http://localhost:8080/semana')
            .then((response)=> {
                setDatos(response.data);
                console.log(datos);
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    const actualizarDatos = () => {
        axios
        .get('http://localhost:8080/semana')
        .then((response)=> {
            setDatos(response.data);
            console.log(datos);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const agregarSemana = (sem) => {
        axios
            .post('http://localhost:8080/semana', sem)
            .then((response) => {
                console.log(response.data);
                actualizarDatos();
                closeModal();
            })
            .catch((error)=> {
                console.log(error);
            })
    }

    const eliminarSemana = (id) => {
        axios
            .delete(`http://localhost:8080/semana/${id}`)
            .then(() => {
                setDatos(datos.filter((dato) => dato.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const editarSemana = (sem) => {
        axios
            .put(`http://localhost:8080/semana/${sem.id}`, sem)
            .then(() => {
                actualizarDatos();
                closeModal();
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const edit = (sem) => {
        setSemanaEdit(sem);
        setShowModal(true);
        console.log(sem);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <div className="caja">    
            <h1>Horario Semanal</h1> 
            <Button className="botonico" variant="success" onClick={openModal}>
                 <IoIosAddCircle size={30}  />
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Semana</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                        <th>Domingo</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id} className="text-center">
                            <td>{dato.id}</td>
                            <td>{dato.nsemana}</td>
                            <td>{dato.lunes}</td>
                            <td>{dato.martes}</td>
                            <td>{dato.miercoles}</td>
                            <td>{dato.jueves}</td>
                            <td>{dato.viernes}</td>
                            <td>{dato.sabado}</td>
                            <td>{dato.domingo}</td>
                            <td>
                                <Button className="botonico2" variant="success" onClick={() => edit(dato)}>
                                     <GrEdit size={30} />
                                </Button>
                                <Button className="botonico2" variant="danger" onClick={() => eliminarSemana(dato.id)}>
                                    <MdDelete size={30} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <SemanaModal 
            show={showModal} 
            close={closeModal}
            crear={agregarSemana}
            editar={semanaEdit}
            geditar={editarSemana}
            />
        </div>
    );
}