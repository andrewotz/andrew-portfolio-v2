import React from "react";
import mock01 from '../assets/images/CERNcollision.png';
import mock02 from '../assets/images/electricpotential.png';
import mock03 from '../assets/images/quantumoscillator.png';
import mock04 from '../assets/images/coinflip.png';
import mock05 from '../assets/images/EMPpulse.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/andrewotz/CERN-Particle-Simulator" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/andrewotz/CERN-Particle-Simulator" target="_blank" rel="noreferrer"><h2>CERN Particle Simulator</h2></a>
                <p>A particle collision simulator inspired by CERN experiments, showing particle trajectories and collision effects in real time.</p>
            </div>
            <div className="project">
                <a href="https://github.com/andrewotz/Interactive-2D-Electric-Field-Potential-Simulator" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/andrewotz/Interactive-2D-Electric-Field-Potential-Simulator" target="_blank" rel="noreferrer"><h2>Interactive 2D Electric Field Simulation</h2></a>
                <p>An interactive 2D simulator that visualizes electric potential and field lines in real time, letting users adjust charges to explore electrostatic concepts.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/andrewotz/Interactive-Quantum-Harmonic-Oscillator-Visualization" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/andrewotz/Interactive-Quantum-Harmonic-Oscillator-Visualization" target="_blank" rel="noreferrer"><h2>Interactive Quantum Oscillator Simulation</h2></a>
                <p>A real-time simulation of a quantum harmonic oscillator that lets users explore wavefunctions, probabilities, and energy states interactively.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/andrewotz/Cryptography-RNG-Comparison-Demo" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/andrewotz/Cryptography-RNG-Comparison-Demo" target="_blank" rel="noreferrer"><h2>Cryptography RNG Comparison Demo</h2></a>
                <p>An interactive demo comparing the unpredictability and randomness quality of quantum versus classical random number generators using simulated coin flips.</p>
            </div>
            <div className="project">
                <a href="https://github.com/andrewotz/EMP-Pulse-Circuit-Response-Simulator" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/andrewotz/EMP-Pulse-Circuit-Response-Simulator" target="_blank" rel="noreferrer"><h2>EMP Pulse Response Simulation</h2></a>
                <p>A simulation visualizing the effects of an electromagnetic pulse (EMP) on digital systems, demonstrating how EMP disrupts electronic circuits and signals.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;