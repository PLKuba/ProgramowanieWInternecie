import React from 'react';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';

// W pliku CudowSwiata.js
function CudowSwiata() {
    const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

    // Przykład danych dla cudów świata, dodaj resztę według potrzeb
    const cuda = [
        {
            nazwa: 'Wielka Piramida w Gizie',
            opis: 'Jest to najstarsza i największa z trzech piramid w Gizie, uważana za najstarszy z siedmiu cudów świata i jedyny, który przetrwał do dziś w znaczącym stopniu.',
            obraz: '/cudyswiata/piramida.jpeg',
        },
        {
            nazwa: 'Wiszące Ogrody Semiramidy',
            opis: 'Legendarny tarasowy ogród, który miał istnieć w starożytnej Mezopotamii, w mieście Babilon.',
            obraz: '/cudyswiata/ogrody.jpeg',
        },
        {
            nazwa: 'Statua Zeusa w Olimpii',
            opis: 'Monumentalna rzeźba przedstawiająca siedzącego Zeusa, która była dziełem Fidiasza, jednego z największych rzeźbiarzy starożytnej Grecji.',
            obraz: '/cudyswiata/zeus.jpeg',
        },
        {
            nazwa: 'Świątynia Artemidy w Efezie',
            opis: 'Znana również jako Artemizjon, była to majestatyczna świątynia grecka poświęcona bogini Artemidzie, znajdująca się w Efezie (obecnie tereny Turcji).',
            obraz: '/cudyswiata/swiatynia.webp',
        },
        {
            nazwa: 'Mauzoleum w Halikarnasie',
            opis: 'Monumentalny grobowiec zbudowany dla Mausolosa, satrapy Karii, który zmarł około 353 r. p.n.e.',
            obraz: '/cudyswiata/mauzoleum.webp',
        },
        {
            nazwa: 'Kolos Rodyjski',
            opis: 'Ogromna statua Heliosa, która stała w porcie wyspy Rodos i była dziełem rzeźbiarza Charesa z Lindos.',
            obraz: '/cudyswiata/kolos.jpeg',
        },
        {
            nazwa: 'Latarnia morska na Faros',
            opis: 'Jedna z najstarszych latarni morskich na świecie, zbudowana przez Ptolemeuszy na wyspie Faros, przy Aleksandrii w Egipcie.',
            obraz: '/cudyswiata/latarnia.jpeg',
        }
    ];


    return (
        <animated.div style={fadeIn}>
            <div className="fade-in-section">
                <div className="container my-5">
                    {cuda.map((cudo, index) => (
                        <div key={index} className={`row mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                            <div className="col-md-6">
                                <img src={cudo.obraz} className="img-fluid" alt={cudo.nazwa}/>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <h5 className="card-title">{cudo.nazwa}</h5>
                                    <p className="card-text">{cudo.opis}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </animated.div>
    );
}


export default CudowSwiata;
