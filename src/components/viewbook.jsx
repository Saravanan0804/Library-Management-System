import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebaseConfig";
import { Link } from "react-router-dom";
import spinner from "../images/loadingSpinner.gif";
import { AuthContext } from "../context/Auth";

const Viewbook = props => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchAuthor, setSearchAuthor] = useState("");

    useEffect(() => {
        console.log(user)
        if (!user) {
            props.history.push("/");
            console.log("hit")
        }
        setIsLoading(true);
        const unsubscribe = firebase
            .firestore()
            .collection("books")
            .onSnapshot(
                snapshot => {
                    const allBooks = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    console.log(allBooks)
                    setBooks(allBooks);
                    setIsLoading(false);
                },
                function (error) {
                    console.log("error");
                }
            );
        return () => unsubscribe();
    }, [user, props.history]);
    return isLoading ? (
        <div className="spinner">
            <img src={spinner} alt="loading-spinner" />
        </div>
    ) : (
        <div className="row">
            <div className="col s12 m3 left-panel">
                <h4>Search Books</h4>


                <div className="input-field">
                    <input
                        id="title"
                        type="text"
                        className="validate"
                        value={searchTitle}
                        onChange={e => setSearchTitle(e.target.value)}
                    />
                    <label htmlFor="title">Search by title</label>
                </div>

                <div className="input-field">
                    <input
                        id="author"
                        type="text"
                        className="validate"
                        value={searchAuthor}
                        onChange={e => setSearchAuthor(e.target.value)}
                    />
                    <label htmlFor="author">Search by author</label>
                </div>
            </div>
            <div className="col s12 m9 right-panel">
                {books.length > 0 ? (<div className="row" style={{ padding: "16px" }}>
                    {books
                        .filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()))
                        .filter(book => book.author.toLowerCase().includes(searchAuthor.toLowerCase()))
                        .map(book => (
                            <div className="col s12 m4" key={book.id}>
                                <div className="card grey lighten-5 z-depth-1 hoverable">
                                    <div className="card-image">
                                        <img src={book.imageURL} style={{ height: "250px" }} alt={book.author} />
                                    </div>

                                    <div className="card-action center">
                                        <h6>
                                            <strong>Title : {book.title}</strong>
                                        </h6>


                                    </div>
                                </div>
                            </div>
                        ))}
                </div>) : <h3>No books available</h3>}
            </div>
        </div>
    );
};

export default Viewbook;
