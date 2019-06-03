import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume-cp">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              {/* <img
                src="https://rovinox3.s3.amazonaws.com/bucketFolder/1557503584256-lg.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{ paddingTop: "2em" }}>David Hernandez</h2>
            <h4 style={{ color: "grey" }}>Software Devoloper</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hi, my name is David Hernandez from Tampa, FL. I moved to Dallas
              to attend DevMountain's 13 week immersive boot camp and start my
              journey as a Software Developer. My previous career was in the
              automotive industry but I found myself yearning for a new
              challenge and opportunities, and I'm confident that I'll find what
              I'm looking for in the software development field.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Location</h5>
            <p>Plano, TX</p>
            <h5>Phone</h5>
            <p>(813) 409-0403</p>
            <h5>Email</h5>
            <p>djhernandez@rocketmail.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>
            <Skills
              schoolName="Frontend Technologies"
              schoolDescription="HTML | CSS | JAVASCRIPT | REACT | REDUX | REACT HOOKS"
            />
            <Skills
              schoolName="Backend Technologies"
              schoolDescription="NODE.JS | EXPRESS | POSTGRESQL "
            />
            <Skills schoolName="Tools" schoolDescription="GIT | SSH " />

            <hr style={{ borderTop: "3px solid white" }} />

            <h2>Experience</h2>

            <Experience
              startYear={"March 2019"}
              endYear={"June 2019"}
              jobtitle="Student Developer"
              jobName="DevMountain Dallas"
              jobDescription="Became proficient in software development languages such as HTML 5, CSS 3, JavaScript, React JS, Node JS.
              Also, learned about the fundamentals of data storage and management. Learning how to use the Test Driven Development model of development, along with popular test suites like Jest, Postman, and Cypress, to guide development process and write code that solves problems."
            />
            <Experience
              startYear={"May 2016"}
              endYear={"Feb 2019"}
              jobtitle="Parts Assistant Manager"
              jobName="Barney's Yamaha Suzuki Brandon"
              jobDescription="• Achieved 142% sales-quota employing customer-centric strategies.
              • Fielded calls from motorcycle and ATV enthusiasts that need assistance with ordering parts for their vehicles, as well as, accessories and safety gear.
               • Hired, trained and managed a small group of parts associates and aided with any questions about products or customer relations. 
              • Analyzed and compared sales data with other metric motorcycle dealerships across the US in search of areas where the team could improve. 
              • Handled over $500,000 in revolving inventory and made sure sales floor was properly stocked with product."
            />
            <Experience
              startYear={"August 2013"}
              endYear={"Apr 2016"}
              jobtitle="Senior Parts Associate"
              jobName="Barney's Yamaha Suzuki Brandon"
              jobDescription="• Achieved 153% sales-quota by coupling robust product knowledge with strong customer relations.
              •	Initiated successful outside lead generation campaigns without management guidance in an effort to increase sales outside of storefront.
              •	Interact and inform walk-in customers about proper motorcycle safety gear and performance parts, as well as, sell genuine Yamaha, Suzuki, Kawasaki and Can-Am hard parts. 
              •	In over one year, sold over $500,000 worth of parts, accessories, and apparel for imported sport bikes, cruisers, Jet Skis and WaveRunners, and ATVs . Set records for amount sold in one day and amount sold in one month.
              •	Customized units with variety of parts and accessories.
              •	Formally trained and accountable for products made by over 100 brands of performance parts and accessories."
            />
            <Experience
              startYear={"Jul 2012"}
              endYear={"Jul 2013"}
              jobtitle="Assistant Manager"
              jobName="Hungry Howie's Pizza"
              jobDescription="
              •	Managed interacting shifts of over 10 employees at a time. 
              •	Made daily cash drops and was accountable for all daily cash and credit transactions. 
              •	Kept labor below 15% of gross daily income.
              •	Maintained and ordered products while keeping food cost as low as possible.
              •	Responsible for exemplary facility and safety of employees."
            />
            <hr style={{ borderTop: "3px solid white" }} />

            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="DevMountain Dallas - Dallas, TX"
              schoolDescription="13 week Web Development Bootcamp"
            />

            {/* <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
