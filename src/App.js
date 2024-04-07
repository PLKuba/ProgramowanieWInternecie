import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Header';
import CudowSwiata from './CudowSwiata';
import PapierKamienNozyce from './PapierKamienNozyce';
import Footer from './Footer';

function App() {
    const [widocznaSekcja, setWidocznaSekcja] = useState('cudowSwiata'); // domyślnie pokazuje '7 cudów świata'

    return (
        // Użyj klasy .container-fluid dla pełnej szerokości na każdym poziomie viewportu
        <div className="container-fluid p-0 min-vh-100 d-flex flex-column">
            <Header setWidocznaSekcja={setWidocznaSekcja}/>
            {/* Dodaj klasę .flex-grow-1, aby główna treść rozciągała się */}
            <main className="flex-grow-1">
                {widocznaSekcja === 'cudowSwiata' ? <CudowSwiata key="cudowSwiata" /> : <PapierKamienNozyce key="papierKamienNozyce" />}
            </main>
            <Footer/>
        </div>
    );
}

export default App;
