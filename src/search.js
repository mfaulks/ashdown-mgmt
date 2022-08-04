import React from "react";

const fields = {
    person: ['firstName', 'surname'],
    organisation: ['organisation'],
    contact: ['contact']
};

class Search extends React.Component{
    async search(event){
        event.preventDefault();
        let query = [];
        for(const field of fields[event.target.type.value]){
            query.push({
                field: field,
                value: event.target[field].value
            });
        }

        const response = await fetch('/api/search', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer-when-downgrade',
            body: JSON.stringify(query)
        });
        console.log(await response.json());
    }

    render(){
        return <div>
            <div className="title">Search</div>
            <form onSubmit={this.search}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <input type="radio" name="type" value="organisation" />Organisation
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="organisation" onChange={(event) => {event.target.form.type.value = 'organisation'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type="radio" name="type" value="person" />Person
                            </td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>
                                <input type="text" name="firstName" onChange={(event) => {event.target.form.type.value ='person'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Surname</td>
                            <td>
                                <input type="text" name="surname" onChange={(event) => {event.target.form.type.value ='person'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type="radio" name="type" value="contact" />All Contacts
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="contact" onChange={(event) => {event.target.form.type.value = 'contact'}}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type="submit" value="search"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

export default Search;