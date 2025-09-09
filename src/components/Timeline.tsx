import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Development</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Software Engineer - Operations Director | Maybyte LLC</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <p>
              Contribute to software and cybersecurity operations at Maybyte LLC, a firm backed by Boston University and specializing in predictive analytics for sports performance, wealth management and financial strategies. Work includes algorithm design, data pipelines, and front-end/back-end development for tools that transform complex datasets into secure, actionable insights.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2024 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Selected Mentee, University Presidential Leadership Fellowship</h3>
            <h4 className="vertical-timeline-element-subtitle">Texarkana, TX</h4>
            <p>
              Selected by Texas A&M University–Texarkana President Dr. Ross Alexander for an exclusive leadership development fellowship. Engaged directly with senior executives and industry leaders through high-level seminars, mentorship, and leadership training. Gained and refined executive-level communication, decision-making, and organizational leadership skills.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2025 - April 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Research - Electric Field Vector Visualization</h3>
            <h4 className="vertical-timeline-element-subtitle">Texarkana, TX</h4>
            <p>
              Under the guidance of a Professor of Physics at Texas A&M University–Texarkana. Collaborated on electric field vector behavior research using MATLAB. Developed interactive 3D simulations of electric field vectors and potentials.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2024 - April 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graph Theory Research | Equitable Edge Colorings of K<sub>n</sub></h3>
            <h4 className="vertical-timeline-element-subtitle">Texarkana, TX</h4>
            <p>
              Investigated equitable (s, p) edge colorings of complete graphs. Designed algorithms to compute and visualize colorings, producing graphical (.png) and structured data (.txt) outputs. Integrated theoretical research with computational methods in algorithm design, data structures, and visualization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Tennis Teaching Professional | Baton Rouge Country Club</h3>
            <h4 className="vertical-timeline-element-subtitle">Baton Rouge, LA</h4>
            <p>
              Provide private and group instruction to members at one of Louisiana’s most prestigious country clubs. Having over 20 years of playing experience and 4 years of coaching expertise, including time as a Division I athlete and a nationally ranked collegiate player (#24 singles).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research Seminar, Royal Institution</h3>
            <h4 className="vertical-timeline-element-subtitle">London, England</h4>
            <p>
              Explored radiopharmaceuticals for PET imaging and their role in early disease detection. Gained insight into how computational modeling, data analysis techniques transform biomedical signals into interpretable imaging data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CERN Research Facility</h3>
            <h4 className="vertical-timeline-element-subtitle">Geneva, Switzerland</h4>
            <p>
              Explored the European Organization for Nuclear Research, the worlds leading physics research lab, studying its advanced IT infrastructure. Gained insights into distributed computing, large-scale data storage, and real-time analysis supporting cutting-edge particle physics research.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;