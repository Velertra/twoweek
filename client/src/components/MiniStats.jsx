const MiniStats = ({ stats, brType }) => {
    const data = stats.stats.all[brType];

   
    function capitalize([ first='', ...rest ]){
        return [ first.toUpperCase(), ...rest ].join('');
    }

    return (
        <>
            <div className="stats-container" id="stats-container">{console.log(data)}
                <h3 className="br-type">{capitalize(brType)}</h3>
                <div>
                    <p className="profile-stats-label">KD</p>
                    <p className="profile-stats-value">{data.kd}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Kills</p>
                    <p className="profile-stats-value">{data.kills}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Matches</p>
                    <p className="profile-stats-value">{data.matches}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Mins played</p>
                    <p className="profile-stats-value">{data.minutesPlayed}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Score</p>
                    <p className="profile-stats-value">{data.score}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Kills</p>
                    <p className="profile-stats-value">{data.kills}</p>
                </div>
                <div>
                    <p className="profile-stats-label">Wins</p>
                    <p className="profile-stats-value">{data.wins}</p>
                </div>
            </div>
        </>
      );;
}
 
export default MiniStats;