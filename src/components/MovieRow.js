import React from 'react';
import './MovieRow.css';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default ({title, itens}) => {
    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left'>
                <NavigateBeforeOutlinedIcon style={{fontSize: 50}}/>
            </div>
            <div className='movieRow--right'>
                <NavigateNextOutlinedIcon style={{fontSize: 50}}/>
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list'>
                    {itens.results.length > 0 && itens.results.map((item, key)=>(
                        <div className='movieRow--item' key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}