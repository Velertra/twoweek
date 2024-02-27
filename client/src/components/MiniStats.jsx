const MiniStats = ({ stats }) => {

    return (
        <>
            <div style={{width: "25vh"}} id="stats-container">
                <h3>{stats.account.name}</h3>
                <p>KD - {stats.stats.all.solo.kd}</p>
                <p>Kills - {stats.stats.all.solo.kills}</p>
                <p>Matches - {stats.stats.all.solo.matches}</p>
                <p>Mins played - {stats.stats.all.solo.minutesPlayed}</p>
                <p>Score - {stats.stats.all.solo.score}</p>
                <p>Kills - {stats.stats.all.solo.kills}</p>
                <p>Wins - {stats.stats.all.solo.wins}</p>
            </div>
        </>
      );;
}
 
export default MiniStats;