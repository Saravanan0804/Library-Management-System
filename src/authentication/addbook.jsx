import React from 'react'

class addbook extends components() {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <Link to="/books" className="waves-effect waves-light btn">
                            Back to dashboard
        </Link>

                        <div className="card">
                            <div className="card-content">
                                <h5 className="card-title center">Add New Book</h5>
                                <div className="row">
                                    <div className="col s12 m7">
                                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="input-field col s6">
                                                    <input
                                                        id="title"
                                                        type="text"
                                                        className="validate"
                                                        onChange={handleChange("title")}
                                                        value={title}
                                                    />
                                                    <label htmlFor="title">Title</label>
                                                </div>
                                                <div className="input-field col s6">
                                                    <input
                                                        id="author"
                                                        type="text"
                                                        className="validate"
                                                        onChange={handleChange("author")}
                                                        value={author}
                                                    />
                                                    <label htmlFor="author">Author</label>
                                                </div>
                                                <div className="input-field col s4">
                                                    <input
                                                        id="genre"
                                                        type="text"
                                                        className="validate"
                                                        onChange={handleChange("genre")}
                                                        value={genre}
                                                    />
                                                    <label htmlFor="genre">Genre</label>
                                                </div>
                                                <div className="input-field col s4">
                                                    <input
                                                        id="no_copies"
                                                        type="number"
                                                        className="validate"
                                                        onChange={handleChange("no_copies")}
                                                        value={no_copies}
                                                    />
                                                    <label htmlFor="no_copies">No. Copies</label>
                                                </div>
                                                <div className="input-field col s4">
                                                    <input
                                                        id="date_published"
                                                        type="date"
                                                        className="validate"
                                                        onChange={handleChange("date_published")}
                                                        value={date_published}
                                                    />
                                                    <label htmlFor="date_published">Date Published</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <textarea
                                                        id="description"
                                                        className="materialize-textarea"
                                                        onChange={handleChange("description")}
                                                        value={description}
                                                    ></textarea>
                                                    <label htmlFor="description">Description</label>
                                                </div>
                                            </div>
                                            <div className="file-field input-field">
                                                <div className="btn purple darken-4">
                                                    <span>Upload Cover Image</span>
                                                    <input
                                                        type="file"
                                                        onChange={uploadImage}
                                                        accept="image/*"
                                                    />
                                                </div>

                                                <div className="file-path-wrapper">
                                                    <input className="file-path validate" type="text" />
                                                </div>
                                            </div>
                                            <div className="center">
                                                <button
                                                    className="waves-effect waves-light btn"
                                                    style={{ margin: "8px 18px" }}
                                                    type="submit"
                                                >
                                                    ADD BOOK{" "}

                                                </button>
                                                <button
                                                    className="waves-effect waves-light btn red"
                                                    type="reset"
                                                    onClick={resetForm}
                                                >
                                                    Reset
                    </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col s12 m5 center">
                                        <p>Cover Image</p>
                                        <img
                                            src={imagePreview}
                                            alt={imageName}
                                            className="responsive-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default addbook
