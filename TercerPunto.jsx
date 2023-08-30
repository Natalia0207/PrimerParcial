import React, { useState } from 'react';

const Saludo = () => {

    const [nombre, setNombre] = useState('');
    const [hora, setHora] = useState('');
    const [mensaje, setMensaje] = useState('');

    const darSaludo = () => {
        
        const horaNumero = parseInt(hora.split(':')[0], 10); // Sacamos la hora del texto que puso el usuario
        let tipoSaludo = '';
        if (horaNumero < 12) {
            tipoSaludo = 'Buenos días';
        } else if (horaNumero >= 12 && horaNumero < 18) {
            tipoSaludo = 'Buenas tardes';
        } else {
            tipoSaludo = 'Buenas noches';
        }
        setMensaje(`${tipoSaludo}, ${nombre}`); // Mostramos el saludo completo
    }
    return (
        <div>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
            </div>
            <div><label htmlFor="hora">Hora (HH:mm):</label>
                <input 
                    type="text" 
                    id="hora" 
                    value={hora} 
                    onChange={(e) => setHora(e.target.value)} 
                    placeholder="HH:mm"
                /></div>
            <button onClick={darSaludo}>Saludar</button>
            <p>{mensaje}</p>
        </div>
    );
}

export default Saludo;