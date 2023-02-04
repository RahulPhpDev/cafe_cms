
const dateObj =  new Date();

const getDbDateFormat = (date) => {
   return new Date(date).toISOString().split('T')[0];
}

const getStartDate = () => {
   const firstDateOfMonth =   new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
   return getDbDateFormat(firstDateOfMonth);
}

const getTodayDate = () => {
    const firstDateOfMonth =   new Date();
   return getDbDateFormat(firstDateOfMonth);
}


module.exports = {
    getDbDateFormat,
    getStartDate,
    getTodayDate
}