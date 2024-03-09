import moment from 'moment';

const useTimeZone = () => {
    const formatUTCTime = (date: Date | number | string) => {
        const localTime = moment.utc(date).local().format();
        const formated = moment(localTime).format('Do MMM YYYY, h:mm a');
        return formated;
    }


    const formatDayMonthYear = (date?: Date | number | string) => {
        if (!date) {
            return '--'
        }
        const localTime = moment.utc(date).local().format();
        const formated = moment(localTime).format('Do MMM YYYY');
        return formated;
    }

    const formatTimeOnly = (date?: Date | number | string) => {
        if (!date) {
            return '--'
        } 
        const localTime = moment.utc(date).local().format();
        const formated = moment(localTime).format('hh: mm a');
        return formated;
    }

    return {
        formatUTCTime,
        formatDayMonthYear,
        formatTimeOnly,
    }
}


export default useTimeZone;
