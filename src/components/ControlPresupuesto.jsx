import React from 'react'
export const ControlPresupuesto = ({ presupuesto, setPresupuesto }) => {
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-PE', {
            style: 'currency',
            currency: 'PEN'
        })
    }
    console.log(typeof (presupuesto))
    //console.log(formatearCantidad(Number(presupuesto)))
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearCantidad(presupuesto)}
                </p>

            </div>
        </div>
    )
}
