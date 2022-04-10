import moment from 'moment';
import { useEffect, useState } from 'react';

function formatTimeAgo(date: string) {
    const dateFormat = moment(date).format("YYYY-MM-DD");
    const timeAgo = moment(dateFormat).fromNow();
    return timeAgo;
}

type TimeFormatType = {
    date: string,
}

function TimeFormat({date}:TimeFormatType) {
    const [time, setTime] = useState<string>()

    useEffect(()=>{
        const getTime = formatTimeAgo(date);
        setTime(getTime)
        console.log(time)
    },[])

    return(
        <span>
            {time}
        </span>
    )
};

export default TimeFormat;