import React, { useState } from 'react';

const ConvertirTiempo = () => {

    const [segundos, setSegundos] = useState('');  // Aquí estoy creando dos cajitas para guardar la info, una para los segundos y otra para el resultado
    const [resultado, setResultado] = useState('');

    const convertir = () => {
        const totalSegundos = parseInt(segundos, 10); // Convertimos lo que el usuario escribió a un número entero 
        let segundosRestantes = totalSegundos;
        const horas = Math.floor(segundosRestantes / 3600);// Aquí calculamos cuantas horas hay 
        segundosRestantes %= 3600; // Y nos quedamos solo con los segundos que no formaron horas
        const minutos = Math.floor(segundosRestantes / 60);// Acá lo mismo pero con los minutos
        segundosRestantes %= 60;
        setResultado(`Horas: ${horas}, Minutos: ${minutos}, Segundos: ${segundosRestantes}`);
    }
    return (
        <div>
            <label htmlFor="segundos">Introduce segundos:</label>
            <div>
            <input 
                type="number" 
                id="segundos" 
                value={segundos} 
                onChange={(e) => setSegundos(e.target.value)} 
                placeholder="Introduce segundos"
            /></div>
            <button onClick={convertir}>Convertir</button> 
            <p>{resultado}</p>
        </div>
    );
}

export default ConvertirTiempo;

