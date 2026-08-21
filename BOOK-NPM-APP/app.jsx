function App() {
    return (
        <div className="App">

            <h1>My Book Store</h1>

            <div className="books">

                <Book
                    title="Clean Code"
                    price="760"
                    image="b1.jpeg"
                />

                <Book
                    title="The Pragmatic Programmer"
                    price="950"
                    image="b2.jpeg"
                />

                <Book
                    title="Head First Design Patterns"
                    price="1850"
                    image="b3.jpeg"
                />

            </div>

        </div>
    );
}

export default App;