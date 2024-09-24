import React from "react";
import { motion } from "framer-motion";
import UseAnimations from "../../hooks/UseAnimations";

const AboutBody = () => {

    const { slideLeft, slideRight } = UseAnimations();

    return (
        <div>
            <BoxOne slideLeft={slideLeft} />

            <BoxTwoAndThree slideLeft={slideLeft} slideRight={slideRight} />

            <BoxFourAndFive slideLeft={slideLeft} slideRight={slideRight} />
        </div>
    );
};
export default AboutBody;

function BoxOne({ slideLeft }) {
    return (
        <motion.div
            {...slideLeft}
            className="p-5 mb-4 bg-white border"
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="container-fluid">
                <h1 className="display-5 fw-bold col">Welcome to Literature Studies</h1>
                <p className="fs-4">Welcome to Literature Studies, a unique platform designed for both teachers
                    and students at the Institute of Foreign Language. Our website is a treasure trove of summarized
                    literature, specifically curated for Year 2 and Year 3 students at the DOE, IFL.</p>
            </div>
        </motion.div>
    );
}

function BoxTwoAndThree({ slideLeft, slideRight }) {
    return (
        <div className="row align-items-md-stretch mb-4">
            <motion.div
                {...slideRight}
                className="col-md-6"
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="h-100 p-5 text-bg-dark">
                    <h2>Our Origin Story</h2>
                    <p style={{ textAlign: 'justify' }}>The inception of this website is rooted in <i>the CE302 Presentation
                        Assignment: Professional
                        Development Through Online Learning,</i> a major assignment provided in Year 3, Semester
                        2. The
                        objective of this assignment was to engage in self-improvement and career-oriented learning
                        by enrolling in and completing a free online course relevant to our future careers.</p>
                </div>
            </motion.div>

            <motion.div
                {...slideLeft}
                className="col-md-6"
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <div className="h-100 p-5 bg-white border">
                    <h2>The Fusion of Literature and Technology</h2>
                    <p style={{ textAlign: 'justify' }}>Our founder, <code style={{ fontSize: "16px" }}>Cheam Norakpanha,</code> an
                        IT-engineering student,
                        chose the
                        <code><a
                            href="https://www.udemy.com/course/the-complete-react-js-developer-course-for-beginners-2022/"
                            style={{ color: "#000" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            "React JS Crash Course for Beginners [2022 Updated]"
                        </a></code> on Udemy. While the course
                        project was straightforward, our founder decided to take it a step further. The result is
                        this website,
                        a fusion of literature and technology, showcasing the power of modern web development tools
                        in creating educational resources.
                    </p>
                </div>
            </motion.div>
        </div>

    );
}

function BoxFourAndFive({ slideLeft, slideRight }) {
    return (
        <div className="row align-items-md-stretch mb-5">
            <motion.div
                {...slideRight}
                className="col-md-6"
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <div className="h-100 p-5 bg-white border">
                    <h2>Bridging the Gap between Literature and Busy Schedules</h2>
                    <p style={{ textAlign: 'justify' }}>We understand that not everyone has the time or inclination to read an
                        entire book. Some of
                        us are just too busy, while others may find it intimidating. That's where Literature Studies
                        comes in. We provide comprehensive summaries of various literature studies, allowing
                        students to grasp the essence of the work without having to read it in its entirety.</p>
                </div>
            </motion.div>
            <motion.div
                {...slideLeft}
                className="col-md-6"
                transition={{ duration: 1.4, ease: "easeInOut" }}
            >
                <div className="h-100 p-5 text-bg-dark">
                    <h2>Our Mission and Offerings</h2>
                    <p style={{ textAlign: 'justify' }}>Our mission is to make literature more accessible and enjoyable for
                        everyone. Whether you're
                        cramming for an exam or just curious about a particular piece of literature, we've got you
                        covered. Dive into our collection of summaries and discover the joy of literature, one story
                        at a time.</p>
                </div>
            </motion.div>
        </div>

    );
}