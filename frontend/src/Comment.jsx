import "./App.css";

function Comment() {
    return (
        <>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <img src="path_to_avatar_image" alt="Avatar" />
                </div>
                <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <img src="path_to_avatar_image" alt="Avatar" />
                </div>
                <div className="chat-bubble">It was you who would bring balance to the Force</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <img src="path_to_avatar_image" alt="Avatar" />
                </div>  
                <div className="chat-bubble text-black">Not leave it in Darkness</div>
            </div>
        </>
    );
}

export default Comment;