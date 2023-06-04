export const formatNumber = (number) => {
    if (Math.abs(number) >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(2) + " bln";
    } else if (Math.abs(number) >= 1_000_000) {
      return (number / 1_000_000).toFixed(2) + " mln";
    } else if (Math.abs(number) >= 1_000_000_0000) {
      return (number / 1_000_000_0000).toFixed(2) + " tln";
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

  export const currencySymbol = (value) => {
    switch (value) {
      case "USD":
        return "$"
      case "CAD":
        return "$"
      case "GBP":
        return "£"
      case "EUR":
        return "€"
      case "BTC":
        return "₿"
      case "ETH":
        return "Ξ"
      default:
        return "$"
    }
  }

  export function formatCurrencyValue(value, currency) {
    return `${currencySymbol(currency)}${new Intl.NumberFormat().format(value)}`;
  }