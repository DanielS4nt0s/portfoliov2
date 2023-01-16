/* eslint-disable no-undef */
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="project-img" alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-link">
            <a href={link} target="_blank" rel="noreferrer"><span>View Here</span></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
