
import {StyledList, ListItem} from "./CryptoTable.styles"

function CryptoTable({ coinData }) {
    return (
        <StyledList>
            {coinData.map((item) => (
                <ListItem key={item.id}>
                    <img src={item.image} alt="" />
                    <p>{`${item.name} (${item.symbol.toUpperCase()})`}</p>
                    <p>{item.current_price}</p>
                    <p>{`${item.price_change_percentage_1h_in_currency.toFixed(2)} %`}</p>
                    <p>{`${item.price_change_percentage_24h_in_currency.toFixed(2)} %`}</p>
                    <p>{`${item.price_change_percentage_7d_in_currency.toFixed(2)} %`}</p>
                    <p>{item.total_volume}</p>
                    <p>{item.market_cap}</p>
                    <p>{Math.floor(item.circulating_supply)}</p>
                    <p>{Math.floor(item.total_supply)}</p>
                </ListItem>
            ))}
        </StyledList> 
    );
}

export default CryptoTable;