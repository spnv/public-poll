import React from 'react';

const UnvoteItem = (props) => (
    <div className="columns">
        <div className="column is-three-quarters">
            <b>Do you think that blockchain will make the world better ?</b>
            <p>It is important for students to know how to write a conclusion, whether 
                to drive the final point home.</p>
        </div>
        <div className="column">
            <div className="field has-addons">
                <div className="control">
                    <div className="select">
                        <select>
                            <option>---</option>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </div>
                </div>
                <div className="control">
                    <button type="submit" className="button is-warning">Vote</button>
                </div>
            </div>
        </div>
    </div>
)

export default UnvoteItem;