import { useState } from "react";
import { HistoryPage } from "./components/HistoryPage";
import { Loans } from "./components/Loans";

export const ShelfPage = () => {
    const [historyClick, setHisotryClick] = useState(false);
    return (
        <div className="container">
            <div className="mt-3">
                <nav>
                    <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                        <button onClick={() => setHisotryClick(false)} className="nav-link active" id='nav-loans-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-loans' type='button' role='tab' aria-aria-controls="nav-loans"
                            aria-selected='true'>
                            Loans
                        </button>
                        <button onClick={() => setHisotryClick(true)} className="nav-link" id='nav-history-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-history' type='button' role='tab' aria-aria-controls="nav-history"
                            aria-selected='false'>
                            Your history
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active"
                        id="nav-loans" role="tabpanel"
                        aria-label="nav-loans-tab">
                        <p><Loans /></p>
                    </div>
                    <div className="tab-pane fade"
                        id="nav-history" role="tabpanel"
                        aria-label="nav-history-tab">
                        {historyClick ? <HistoryPage /> : <></>}

                    </div>
                </div>
            </div>
        </div>
    );
}