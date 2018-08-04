import React from 'react';
import { render } from 'react-dom';
import Media from './src/components/media';

const SentoDog = document.getElementById('SentoDog');

//const Hola = <h1>Hola inmundo animal</h1>;
//que se renderiza y donde se renderiza
render(<Media type="video" title="SentoDog" author="Una app para dogs" image="http://estag.fimagenes.com/img/2/2/X/s/2Xs_900.jpg"/>,SentoDog);
