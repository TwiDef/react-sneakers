

function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="headerRight d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg" alt="" />
                        <span>1205 rub</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="" />
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <h1>Все кроссовки</h1>
                ...
            </div>
        </div>
    );
}

export default App;
