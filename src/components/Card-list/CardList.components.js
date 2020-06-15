import React from 'react';
import Card from '../Card/Card.components';

const CardList = props => {
    return (
        props.monsters.map(monster => (
            <div key={monster.id}>
                <Card key={monster.id} monster={monster} />
            </div>
        ))
    )
}

export default CardList;