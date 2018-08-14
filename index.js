import React from 'react';
import { render } from 'react-dom';
import Imagenes from './src/components/imagenes.js';
import data from './src/api.json';

const SentoDog = document.getElementById('SentoDog');

render(<Imagenes data={data}/>, SentoDog);
