import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { GameContext } from '../context/games-context';




const Content = () => {
    const { linkData, setLinkData } = useContext(GameContext);
    
    const handleFilter = (event) =>{
        
        const textValue = event.target.value;
        filterText(textValue)
    }
    const filterText = (textValue) => {
        const filteredData = linkData.filter((item) =>  item.title.toLowerCase().includes(textValue.toLowerCase()) )
        setLinkData(filteredData)
    }

    return (
        <div className="content">
            <h2>2021'de PC ve Tarayıcı için Oynaması En İyi Ücretsiz Oyunlar !</h2>
            <p>Oynaması ücretsiz 365 oyun listemizde bulundu!</p>
            <div className='search'>
                <input type="text" placeholder='Oyun ara' onChange={handleFilter} />
                <SearchIcon />
            </div>
            
        </div>
    )
}

export default Content