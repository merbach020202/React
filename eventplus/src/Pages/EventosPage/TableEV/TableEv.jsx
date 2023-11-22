import React from "react";
import "./TableEv.css"
import editPen from '../../../Assets/images/edit-pen.svg'
import trashDelete from '../../../Assets/images/trash-delete.svg'

const TableEv = ( {dados, fnDelete = null, fnUpdate = null} ) => {
    return (
        <table className="table-data">
            {/* {cabeçalho} */}
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">
                        Evento
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Descrição
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Tipo Evento
                    </th>
                    <th className="table-data__head-title table-data__head-title--big">
                        Data
                    </th>
                    <th className="table-data__head-title table-data__head-title--little">
                        Editar
                    </th>
                    <th className="table-data__head-title table-data__head-title--little">
                        Deletar
                    </th>
                </tr>
            </thead>

            <tbody>
                {dados.map((tp)=>{
                    return (
                        <tr className="table-data__head-row" key={tp.idTipoEvento}>
                    <td className="table-data__data table-data__data--big">
                        {tp.titulo}
                    </td>

                    <td className="table-data__data table-data__data--little">
                        <img className="table-data__icon" src={editPen} alt="" 
                            onClick={() => {fnUpdate(tp.idTipoEvento)}}
                        />
                    </td>

                    <td 
                        className="table-data__data table-data__data--little"
                        >
                            <img 
                                className="table-data__icon" 
                                src={trashDelete} alt="" 
                                onClick={() => {fnDelete(tp.idTipoEvento)}}
                                />
                    </td>
                </tr>
                    )
                })}
                
                
            </tbody>
        </table>
    );
};

export default TableEv;
