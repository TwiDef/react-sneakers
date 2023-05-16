import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {

    const [items, setItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://6463873a4dca1a6613609a48.mockapi.io/items')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div className="wrapper clear">
            {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
            <Header
                onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Поиск..." />
                    </div>
                </div>

                <div className="sneakers d-flex flex-wrap">

                    {items.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onFavorite={() => console.log('add to bookmarks')}
                            onPlus={() => console.log('cliked plus')}
                        />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default App;
