export const formatNumber = (number) => {
    if (Math.abs(number) >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + "Bln";
    } else if (Math.abs(number) >= 1_000_000) {
      return (number / 1_000_000).toFixed(2) + "Mln";
    } else if (Math.abs(number) >= 1_000_000_0000) {
      return (number / 1_000_000_0000).toFixed(2) + "Tln";
    } else {
      return number;
    }
  }

  export const getFormattedDate = () => {
    const date = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} ${day}, ${year}`;
  };