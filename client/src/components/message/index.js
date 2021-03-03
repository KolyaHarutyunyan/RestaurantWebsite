const Message = ({ error, message }) => {
    return !error ? (
        <div className="alert alert-success d-flex" role="alert">
            <i className="material-icons mr-3 mb-0">check_circle</i>
            <p className="mb-0">{message}</p>
        </div>
    ) : (
        <div className="alert alert-danger d-flex" role="alert">
            <i className="material-icons mr-3 mb-0">error</i>
            <p className="mb-0" dangerouslySetInnerHTML={{ __html: message }}></p>
        </div>
    );
};

export default Message;
