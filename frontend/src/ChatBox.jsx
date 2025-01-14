import "./App.css";
import Header from "./Header";

function ChatBox() {
    return (
        <>
            <div>
                <Header />
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">
                        That's never been done in the history of the Jedi. It's insulting!
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                </div>
            </div>
            <div className="flex justify-between">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-secondary w-11/12 ml-6 mt-2" />
                <button className="btn btn-outline btn-secondary mt-2 mr-3 border-">
                    <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#810b63]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path
                                d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                        </svg>
                    </span>
                </button>
            </div>
        </>
    )
}

export default ChatBox;