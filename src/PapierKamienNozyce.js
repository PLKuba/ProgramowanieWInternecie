import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';


function PapierKamienNozyce() {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

    const opcje = ['📄', '🪨', '✂️'];
    const [wynik, setWynik] = useState('');
    const [wyborKomputera, setWyborKomputera] = useState('');
    const [scoreboard, setScoreboard] = useState({wygrane: 0, przegrane: 0, remisy: 0});

    function losujWyborKomputera() {
        const losowyIndeks = Math.floor(Math.random() * opcje.length);
        return opcje[losowyIndeks];
    }

    function rozstrzygnijMecz(wyborGracza) {
        const komputer = losujWyborKomputera();
        setWyborKomputera(komputer); // Zapisz wybór komputera do stanu

        if (wyborGracza === komputer) {
            setWynik('Remis!');
            setScoreboard(prevState => ({...prevState, remisy: prevState.remisy + 1}));
        } else if (
            (wyborGracza === '📄' && komputer === '🪨') ||
            (wyborGracza === '🪨' && komputer === '✂️') ||
            (wyborGracza === '✂️' && komputer === '📄')
        ) {
            setWynik('Wygrałeś!');
            setScoreboard(prevState => ({...prevState, wygrane: prevState.wygrane + 1}));
        } else {
            setWynik('Przegrałeś!');
            setScoreboard(prevState => ({...prevState, przegrane: prevState.przegrane + 1}));
        }
    }

    const resetujWyniki = () => {
        setScoreboard({wygrane: 0, przegrane: 0, remisy: 0});
    };

    return (
        <animated.div style={fadeIn}>
                <div className="fade-in-section">
                    <div className="container my-5">
                        <h2 className="text-center mb-4">Papier, Kamień, Nożyce</h2>
                        <div className="game-button-container">
                            {opcje.map((opcja) => (
                                <button key={opcja} className="btn border border-dark m-2 game-button"
                                        onClick={() => rozstrzygnijMecz(opcja)}>
                                    {opcja}
                                </button>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-8 text-center game-info">
                                <p>Wybór komputera: {wyborKomputera}</p>
                                <p>Wynik: {wynik}</p>
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-md-0 game-info">
                                <div className="scoreboard">
                                    <h3 className="text-center">Tablica Wyników</h3>
                                    <p className="total-wins">Wygrane: {scoreboard.wygrane}</p>
                                    <p className="total-losses d-none d-md-block">Przegrane: {scoreboard.przegrane}</p>
                                    <p className="total-ties d-none d-md-block">Remisy: {scoreboard.remisy}</p>
                                    {/* Przycisk resetujący */}
                                    <button className="btn border border-dark mt-3" onClick={resetujWyniki}>Resetuj
                                        wyniki
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </animated.div>
                );
                }

                export default PapierKamienNozyce;

