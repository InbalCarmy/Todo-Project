

export function ActivityList({activities}){
    
    function getTimeAgo(timestamp) {
        const diff = Date.now() - timestamp
        const minutes = Math.floor(diff / (1000 * 60))
        const hours = Math.floor(diff / (1000 * 60 * 60))

        if (minutes < 1) return 'just now'
        if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`
        if (hours < 5) return `a couple of hours ago`
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`
    }


    return (
        <ul>
            {activities && activities.map((activity, idx) => (
                <li key={idx}>
                    <span className="time-of-activity">
                        {getTimeAgo(activity.at)} :
                    </span>
                    <span>
                        {getTimeAgo(activity.at)} : {activity.txt} : '{activity.todo}'
                    </span>

                </li>
            ))}
        </ul>

    )
}