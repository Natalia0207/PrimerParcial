import React, { useState } from 'react';

const CalculadorCostoLlamada = () => {
    
    const [minutos, setMinutos] = useState('');
    const [costoTotal, setCostoTotal] = useState('');

    const calcular = () => {
    
        const duracion = parseInt(minutos, 10); // Convertimos lo que escribió el usuario a número
        if (duracion <= 3) {
            setCostoTotal('El costo es de 100 pesos.');
        } else {
            const minutosExtra = duracion - 3; // calculamos el costo extra
            const costo = 100 + (minutosExtra * 50); 
            setCostoTotal(`El costo es de ${costo} pesos.`);
        }
    }
    return (
        <div>
            <label htmlFor="minutos">Minutos de la llamada:</label>
            <div><input 
                type="number" 
                id="minutos" 
                value={minutos} 
                onChange={(e) => setMinutos(e.target.value)} 
                placeholder="Minutos"
            /></div>
            <button onClick={calcular}>Calcular</button>
            <p>{costoTotal}</p>
        </div>
    );
}

export default CalculadorCostoLlamada;