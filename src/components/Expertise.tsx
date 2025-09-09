import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "MATLAB",
    "C++",
    "NumPy",
    "Matplotlib",
    "Java",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "React",
    "JavaScript",
    "MySQL",
    "HTML5",
    "CSS3",
];

const labelsThird = [
    "Qiskit",
    "TensorFlow",
    "PyTorch",
    "Wolfram Mathematica",
    "Jupyter Notebook",
    "Dartfish",
    "Linux",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Computational Science & Simulation</h3>
                    <p>I design and implement advanced simulations that model real-world systems, with a focus on physics-based and data-driven applications. My work ranges from interactive electric field visualizations to quantum cryptography demos, leveraging Python, MATLAB, and numerical methods to bring complex concepts to life.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Software Development & Systems Integration</h3>
                    <p>With a background in IT and computer science, I develop full-stack solutions and automation workflows that bridge frontend usability with backend efficiency. I’m experienced in modern frameworks, APIs, and database systems, creating robust applications that are both scalable and user-focused.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Physics, Quantum Computing & Competitive Performance</h3>
                    <p>As a nationally ranked college tennis player and aspiring quantum computing researcher, I bring the same discipline, focus, and strategic thinking from elite athletics into scientific problem-solving. My interests span quantum algorithms, computational modeling, and physics-based simulations, applying analytical rigor to both cutting-edge research and high-performance competition.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;