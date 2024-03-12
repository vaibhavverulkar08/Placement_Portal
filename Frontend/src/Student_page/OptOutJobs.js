import React from 'react';
import './OptOutJobs.css';

const OptOutJobs = ({ jobs }) => {
    return (
        <div className="opt-out-jobs-container">
            <h1>Opt-Out Jobs</h1>
            <div className="jobs-list">
                {jobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        {job.optOut && <span className="opt-out-tag">Opt-Out</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OptOutJobs;
