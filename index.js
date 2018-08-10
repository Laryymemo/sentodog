import React from 'react';
import { render } from 'react-dom';
import Imagenes from './src/components/imagenes.js';
import data from './src/api.json';

const SentoDog = document.getElementById('SentoDog');

//que se renderiza y donde se renderiza
//render(<Media type="video" title="All start" author="One app for Pets" image="http://estag.fimagenes.com/img/2/2/X/s/2Xs_900.jpg"/>,SentoDog);
render(<Imagenes data={data}/>, SentoDog);
