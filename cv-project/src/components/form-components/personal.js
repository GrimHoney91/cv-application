import React, {Component} from "react";

class PersonalDetails extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { personal, edit } = this.props;
        return (
            <div className="details-container">
                <div className="form-row">
                    <label aria-label="name">Name
                    <input type='text' name="name" value={personal.name} onChange={(e) => edit(e, 'name')}></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>Title
                    <input type='text' name="title" value={personal.title} onChange={(e) => edit(e, 'title')}></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>Phone
                    <input type='tel' name="phone" value={personal.phone} onChange={(e) => edit(e, 'phone')}></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>Email
                    <input type='email' name="email" value={personal.mail} onChange={(e) => edit(e, 'mail')}></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>Address
                    <input type='text' name="address" value={personal.address} onChange={(e) => edit(e, 'address')}></input>
                    </label>
                </div>
                <div className="form-row">
                    <label>Personal description
                    <textarea name="personal-description" placeholder="Tell us about yourself..." value={personal.description} onChange={(e) => edit(e, 'description')}></textarea>
                    </label>
                </div>
            </div>
        );
    }
}

export default PersonalDetails;