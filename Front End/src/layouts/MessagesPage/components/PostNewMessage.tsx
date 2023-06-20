import { useOktaAuth } from "@okta/okta-react"
import { useState } from "react";

export const PostNewMessage = () => {

    const { authState } = useOktaAuth();
    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [displayWarning, setDisplayWarning] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    return (
        <div className="card mt-3">
            {displaySuccess &&
                <div className="alert alert-success" role="alert">
                    Question added succesfully
                </div>
            }
            <div className="card-header">
                Ask question to Luv 2 Read Admin
            </div>
            <div>
                <form method="POST">
                    {displayWarning &&
                        <div className="alert alert-danger" role="alert">
                            All fields must be filled out.</div>
                    }
                    <div className="mb-3">
                        <label className="form-label">
                            Title
                        </label>
                        <input type="text" className="form-control" id="exmapleFormControlInput1"
                            placeholder="Title" onChange={e => setTitle(e.target.value)} value={title} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Question
                        </label>
                        <textarea className="form-control" rows={3} id="exmapleFormControlTextArea1"
                            onChange={e => setTitle(e.target.value)} value={question}>

                        </textarea>
                    </div>
                    <button type="button" className="btn btn-primary mt-3">
                        Submit Question
                    </button>
                </form>
            </div>
        </div>
    )
}