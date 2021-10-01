import React, { useState } from 'react'
import './Voting.css'

function VotingSystem() {
    
    const [languages, setLanguages] = useState([{name:"php",votes:0},{name:"python",votes:0},{name:"go",votes:0},{name:"java",votes:0},{name:"Html",votes:0}]);
  function  vote (i) {
		let newLanguages = [...languages];
        newLanguages[i].votes++;
        setLanguages([...languages]);
        console.log(newLanguages);
        console.log(languages);
    }

    return (
        <div>
            <h1>Vote Your Language!</h1>
            <div className="languages">
					{
						languages.map((lang, i) => 
							<div key={i} className="language">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="languageName">
									{lang.name}
								</div>
								<button onClick={vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
        </div>
    )
}

export default VotingSystem
