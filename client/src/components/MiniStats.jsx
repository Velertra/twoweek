const MiniStats = ({ stats, brType }) => {
    const data = stats.stats.all[brType];

    function capitalize([ first='', ...rest ]){
        return [ first.toUpperCase(), ...rest ].join('');
    }

    return (
        <>
            <div className="stats-container" id="stats-container">
                <h3 className="br-type">{capitalize(brType)}</h3>
                <div>
                    <text className="profile-stats-label">KD</text>
                    <text className="profile-stats-value">{data.kd}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Kills</text>
                    <text className="profile-stats-value">{data.kills}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Matches</text>
                    <text className="profile-stats-value">{data.matches}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Mins played</text>
                    <text className="profile-stats-value">{data.minutesPlayed}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Score</text>
                    <text className="profile-stats-value">{data.score}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Kills</text>
                    <text className="profile-stats-value">{data.kills}</text>
                </div>
                <div>
                    <text className="profile-stats-label">Wins</text>
                    <text className="profile-stats-value">{data.wins}</text>
                </div>
            </div>
        </>
      );;
}
 
export default MiniStats;