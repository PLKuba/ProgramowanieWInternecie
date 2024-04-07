import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ setWidocznaSekcja }) {
    return (
        <header className="text-center py-3">
            <h1>PWI Strona React</h1>
            <nav className="d-flex justify-content-center">
                <button className="btn m-2" onClick={() => setWidocznaSekcja('cudowSwiata')}>7 cudów
                    świata
                </button>
                <button className="btn m-2" onClick={() => setWidocznaSekcja('papierKamienNozyce')}>Papier,
                    kamień, nożyce
                </button>
            </nav>
        </header>
    );
}

export default Header;
